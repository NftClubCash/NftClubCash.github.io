// Presale setup
// smartbchtestnet
const tokenSymbol = 'NFTC';
const tokenAddress = '0x8dd87b3f50bE9C6Ac5EC08458803843F0D294B3d';
const tokenSaleAddress = '0x0b7643e9D501386417A11a9E9221EC3F1bbEDEd2';
const netId = 10000;


const presaleSupply = 2144082; // 2.14... million
var tokensRemaining = presaleSupply;
const maxTokensPerTx = 21441;
const minTokensPerTx = 100;

const pricePerWei = 46640000000000; // 0.00004664 BCH -- real presale price
// const pricePerWei = 466400000000; // 0.0000 00 4664 BCH -- testnet presale price
const bnPricePerWei = new BigNumber(pricePerWei);
// constants
const divideForsBCH = 10 ** 18;




if (window.ethereum) {
  handleEthereum();
} else {
  window.addEventListener('ethereum#initialized', handleEthereum,
    {
      once: true,
    });

  // If the event is not dispatched by the end of the timeout,
  // the user probably doesn't have MetaMask installed.
  setTimeout(handleEthereum, 3000); // 3 seconds
}

async function handleEthereum() {
  const { ethereum } = window;
  if (ethereum && ethereum.isMetaMask) {
    console.log('Ethereum successfully detected!');
    ethereum.request({ method: 'eth_requestAccounts' })
    const web3 = new Web3(Web3.givenProvider);
    await web3.eth.net.getId().then((netIdFromMetaMask) => {
      console.log(netIdFromMetaMask);
      if (netId != netIdFromMetaMask) {
        $("#processing").html(`Please switch MetaMask to the SmartBch mainnet \nby following <a href="https://read.cash/@MoreGainStrategies/the-ultimate-guide-to-smartbch-for-newbies-d18f55fd">this guide</a>, then refresh this website`);
        return false;
      }
    });
    // web3.eth.net.getNetworkType().then(console.log)

    // try {
    TokenSale = new web3.eth.Contract(TokenSale_json_interface["abi"], tokenSaleAddress);

    await updateSupply();
    showCost();
    $("#processing").text(`MetaMask detected`);
    // }
    // catch (e) {
    //   console.log(e);
    //   // $("#processing").html(`Please switch MetaMask to the SmartBch mainnet \nby following <a href="https://read.cash/@MoreGainStrategies/the-ultimate-guide-to-smartbch-for-newbies-d18f55fd">this guide</a>`);
    // }


    // web3.eth.getBlockNumber().then(function (result) {
    //   currentBlock = parseInt(result);
    // });
  } else {
    $("#processing").text(`MetaMask not found!`);
    console.log('Please install MetaMask!');
  }
}


async function addTokenToMetaMask() {
  // const tokenAddress = '0xd00981105e61274c8a5cd5a88fe7e037d935b513'; // use the one defined above
  // const tokenSymbol = 'NFTC'; // use the one defined above
  const tokenDecimals = 18;
  const tokenImage = ''; // need a logo
  // const tokenImage = 'http://placekitten.com/200/300'; // need a logo

  try {
    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
    const wasAdded = await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: tokenAddress, // The address that the token is at.
          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
          decimals: tokenDecimals, // The number of decimals in the token
          image: tokenImage, // A string url of the token logo
        },
      },
    })
      .then((wasAdded) => {
        if (wasAdded) {
          $("#processing").text('Adding NFTC to your MetaMask wallet');
        } else {
          $("#processing").text('Adding NFTC to your MetaMask wallet is not possible. \nPlease add it manually by copy-pasting the contract address.');
        }
      });
  } catch (error) {
    $("#processing").text('An error occured while trying to add the token to Metamask');
    console.log(error);
  }

}





function updateText(textId, textInput) {
  console.log(textId + " " + textInput);
  $("#" + textId).val(textInput);
  showCost();
}


function showCost() {
  let tokensToBuyString = $("#tokensToBuy").val();
  console.log(tokensToBuyString);
  let tokensToBuy = 0;
  if ("" !== tokensToBuyString) tokensToBuy = parseInt(tokensToBuyString);
  var nTokensToBuy = Math.min(tokensToBuy, tokensRemaining, maxTokensPerTx);
  if ((minTokensPerTx < tokensRemaining) && (minTokensPerTx > nTokensToBuy)) { nTokensToBuy = minTokensPerTx; }
  if ((minTokensPerTx > tokensRemaining) && (1 > nTokensToBuy)) { nTokensToBuy = 1; }
  $("#tokensToBuy").val(nTokensToBuy);
  let cost = Math.round(nTokensToBuy * pricePerWei * 10 ** -12) * 10 ** -6; // get rid of stupid numbers at the end of the value with round
  $("#cost").html('Cost: <strong>' + cost + ' BCH</strong>');
  return nTokensToBuy;
}


function updateSupplyButtonClicked() {
  $("#processing").text(`Updating remaining supply`);
  updateSupply().then(() => {
    $("#processing").text(`Remaining supply updated`);
  });
}


async function updateSupply() {
  const tokensSold = await TokenSale.methods.tokensSold().call();
  tokensRemaining = presaleSupply - tokensSold;
  showCost();

  $("#supply").html(tokensRemaining + ' / ' + presaleSupply + ' tokens remaining');

  if (0 < tokensRemaining) {
    $('#buyButton').prop('disabled', false);
    $('#buyButton').text('Buy Tokens');
    $('#maxTokensPerTxText').text('You can buy up to ' + Math.min(tokensRemaining, maxTokensPerTx) + ' NFTC per transaction.');
  } else {
    $('#buyButton').prop('disabled', true);
    $('#buyButton').text('No Purchase Possible');
    $('#maxTokensPerTxText').html('<strong>The presale is over. All NFTC have already been sold!</strong>');
    $('#maxTokensPerTxText').css("color", "red");
  }
}


async function requestpayment() {
  $("#processing").text(`Processing payment... `);

  updateSupply();

  let tokensToBuy = await showCost();
  const bnTokensToBuy = new BigNumber(tokensToBuy);

  console.log(`Buyer buys ${tokensToBuy} tokens`);
  await TokenSale.methods.buyTokens(bnTokensToBuy).send(
    {
      from: ethereum.selectedAddress,
      value: bnTokensToBuy.times(bnPricePerWei)
    }
  )
    .then(() => {
      $("#processing").text(`Transaction finished.`);
      updateSupply();
    })
    .catch((e) => {
      $("#processing").text(`Transaction was not successful: \n` + e.message);
      console.log(e);
    });
}



// Set the date we're counting down to
const countDownDate = new Date("Mar 15, 2022 21:30:00 GMT+0100").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    $("#countdown-date").fadeout();
    $("#countdown-timer").fadeout();
  } else {
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    $("#countdown-timer").text(days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ");
  }
}, 1000);