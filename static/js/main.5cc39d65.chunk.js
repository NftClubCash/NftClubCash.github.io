(this.webpackJsonppixel_guy_club_nft_minting_dapp=this.webpackJsonppixel_guy_club_nft_minting_dapp||[]).push([[0],{249:function(e,t){},257:function(e,t){},275:function(e,t){},277:function(e,t){},296:function(e,t){},297:function(e,t){},360:function(e,t){},362:function(e,t){},395:function(e,t){},397:function(e,t){},398:function(e,t){},403:function(e,t){},405:function(e,t){},411:function(e,t){},413:function(e,t){},426:function(e,t){},438:function(e,t){},441:function(e,t){},446:function(e,t){},454:function(e,t){},463:function(e,t){},465:function(e,t){},536:function(e,t,n){},537:function(e,t,n){"use strict";n.r(t);var c,r,a,o,i,s,l,d,u,x,b,j,p,h,g,f,O=n(1),m=n(86),y=n.n(m),v=n(17),A=n.n(v),w=n(44),C=n(70),T=n(15),_=n(59),E=n(69),N=n.n(E),S=n(222),M=n.n(S),k=n(71),D=n(223),I=n(20),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},L),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},e),{},{account:t.payload.account});default:return e}},P={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},P),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},U=Object(k.b)({blockchain:R,data:F}),K=[D.a],H=Object(k.c)(k.a.apply(void 0,K)),W=Object(k.d)(U,H),X=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},z=function(){return function(){var e=Object(w.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,W.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(X("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},Y=function(e){return{type:"CONNECTION_FAILED",payload:e}},B=function(e){return function(){var t=Object(w.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(z());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},G=n(16),Q=G.a.div(c||(c=Object(T.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),q=(G.a.div(r||(r=Object(T.a)(["\n  height: 8px;\n  width: 8px;\n"]))),G.a.div(a||(a=Object(T.a)(["\n  height: 16px;\n  width: 16px;\n"])))),J=G.a.div(o||(o=Object(T.a)(["\n  height: 24px;\n  width: 24px;\n"]))),V=G.a.div(i||(i=Object(T.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Z=G.a.div(s||(s=Object(T.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),$=G.a.p(l||(l=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ee=(G.a.p(d||(d=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),G.a.p(u||(u=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),te=(G.a.div(x||(x=Object(T.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(227)),ne=n(228),ce=n(2),re=function(){return""},ae=G.a.button(b||(b=Object(T.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 50, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 50, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 50, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),oe=G.a.button(j||(j=Object(T.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--secondary-text);\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 50, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 50, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 50, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ie=G.a.div(p||(p=Object(T.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),se=(G.a.img(h||(h=Object(T.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n  margin-top: 1em;\n"]))),G.a.img(g||(g=Object(T.a)(["\n  // box-shadow: 0px 4px 0px -2px rgba(250, 50, 250, 0.3);\n  border: none;\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"])))),le=G.a.a(f||(f=Object(T.a)(["\n  color: var(--accent-text);\n  text-decoration: none;\n"])));var de=function(){var e,t,n=Object(_.b)(),c=Object(_.c)((function(e){return e.blockchain})),r=Object(_.c)((function(e){return e.data})),a=Object(O.useState)(!1),o=Object(C.a)(a,2),i=o[0],s=o[1],l=Object(O.useState)("Please select how many NFTs you want to mint in one transcation."),d=Object(C.a)(l,2),u=d[0],x=d[1],b=Object(O.useState)(1),j=Object(C.a)(b,2),p=j[0],h=j[1],g=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,MAX_MINT_PER_TX:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1,LAUNCH_DATE:"",END_DATE:""}),f=Object(C.a)(g,2),m=f[0],y=f[1],v=function(){""!==c.account&&null!==c.smartContract&&n(z(c.account))},T=function(){var e=Object(w.a)(A.a.mark((function e(){var t,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,y(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){T()}),[]),Object(O.useEffect)((function(){v()}),[c.account]),Object(ce.jsx)(Q,{children:Object(ce.jsxs)(Z,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:m.SHOW_BACKGROUND?ne.isMobile?"/config/images/bgMobile.jpg":"/config/images/bg.jpg":null,children:[Object(ce.jsxs)(ie,{flex:1,style:{padding:24},test:!0,children:[Object(ce.jsx)(Z,{flex:1,jc:"center",ai:"center",children:Object(ce.jsx)(se,{alt:"preview",src:"/config/images/preview.gif"})}),Object(ce.jsx)(V,{}),Object(ce.jsxs)(Z,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"none"},children:[Object(ce.jsxs)(ee,{style:{textAlign:"center",color:"var(--secondary-text)",paddingBottom:"1em",maxWidth:"450px"},children:[Object(ce.jsx)("img",{style:{marginTop:"1em",maxWidth:"100%"},src:"/config/images/logo.png",alt:"Shorai"}),Object(ce.jsx)("p",{style:{marginTop:"1em"},children:"In a galaxy far away from ours, the Shorai fight for the freedom of their people."}),Object(ce.jsx)("p",{style:{marginTop:"1em"},children:"Stay tuned! The Shorai NFT collection is coming to #SmartBCH soon!"})]}),Object(ce.jsxs)($,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",fontFamily:"Liberation Mono",color:"var(--accent-text)"},children:[r.totalSupply," / ",m.MAX_SUPPLY]}),Object(ce.jsx)(ee,{style:{textAlign:"center",fontFamily:"Liberation Mono",color:"var(--secondary-text)"},children:Object(ce.jsx)(le,{target:"_blank",href:m.SCAN_LINK,children:(e=m.CONTRACT_ADDRESS,t=15,e.length>t?"".concat(e.substring(0,t),"..."):e)})}),Object(ce.jsx)(q,{}),Number(r.totalSupply)>=m.MAX_SUPPLY?Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)($,{style:{textAlign:"center",color:"var(--primary-text)"},children:"The sale has ended."}),Object(ce.jsxs)(ee,{style:{textAlign:"center",color:"var(--primary-text)"},children:["You can still find ",m.NFT_NAME," on"]}),Object(ce.jsx)(q,{}),Object(ce.jsxs)(le,{target:"_blank",href:m.MARKETPLACE_LINK,children:[m.MARKETPLACE,Object(ce.jsx)("img",{style:{width:"192px"},src:"/oasis_logo.svg",alt:"Oasis"})]})]}):Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(q,{}),Object(ce.jsxs)($,{style:{textAlign:"center",color:"var(--primary-text)"},children:["1 ",m.SYMBOL," can be minted for ",m.DISPLAY_COST," ",m.NETWORK.SYMBOL," plus gas fees."]}),Object(ce.jsx)(q,{}),""===c.account||null===c.smartContract?Object(ce.jsxs)(Z,{ai:"center",jc:"center",children:[Object(ce.jsxs)(ee,{style:{textAlign:"center",color:"var(--secondary-text)"},children:["Please connect MetaMask to the ",m.NETWORK.NAME," network and then connect to this website."]}),Object(ce.jsx)(q,{}),Object(ce.jsx)(ee,{style:{textAlign:"center",color:"var(--secondary-text)"},children:'If you are on a computer, please unlock your MetaMask browser extension first and then refresh this page before clicking the "connect" button.'}),Object(ce.jsxs)(ee,{style:{textAlign:"center",color:"var(--secondary-text)"},children:[Object(ce.jsx)(q,{}),"You can mint up to ",m.MAX_MINT_PER_TX," NFTs in one transaction."]}),Object(ce.jsx)(q,{}),Object(ce.jsx)(ae,{onClick:function(e){e.preventDefault(),n(function(){var e=Object(w.a)(A.a.mark((function e(t){var n,c,r,a,o,i,s,l,d;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:if(a=e.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){e.next=33;break}return N.a.setProvider(i),s=new M.a(i),e.prev=18,e.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,i.request({method:"net_version"});case 24:e.sent==a.NETWORK.ID?(d=new N.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(e){t(B(e[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(Y("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(Y("Something went wrong."));case 31:e.next=34;break;case 33:t(Y("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(q,{}),Object(ce.jsx)(ee,{style:{textAlign:"center",color:"var(--primary-text)"},children:c.errorMsg})]}):null]}):Object(ce.jsxs)(ce.Fragment,{children:[new Date>new Date(m.LAUNCH_DATE)?Object(ce.jsx)(ee,{style:{textAlign:"center",color:"var(--primary-text)"},children:u}):null,Object(ce.jsx)(J,{}),new Date>new Date(m.LAUNCH_DATE)?Object(ce.jsxs)(Z,{ai:"center",jc:"center",fd:"row",children:[Object(ce.jsx)(oe,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=p-1;e<1&&(e=1),h(e)}()},children:"-"}),Object(ce.jsx)(J,{}),Object(ce.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:Object(ce.jsx)("input",{type:"number",style:{width:"50px",padding:"5px"},value:p,onChange:function(e){var t=parseInt(e.target.value);t>m.MAX_MINT_PER_TX?t=m.MAX_MINT_PER_TX:t<1&&(t=1),h(t)}})}),Object(ce.jsx)(J,{}),Object(ce.jsx)(oe,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=p+1;e>m.MAX_MINT_PER_TX&&(e=m.MAX_MINT_PER_TX),h(e)}()},children:"+"})]}):null,Object(ce.jsx)(q,{}),new Date>new Date(m.LAUNCH_DATE)?Object(ce.jsx)(Z,{ai:"center",jc:"center",fd:"row",children:Object(ce.jsx)(ae,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=m.WEI_COST,t=m.GAS_LIMIT,r=String(e*p),a=String(t*p);console.log("Cost: ",r),console.log("Gas limit: ",a),x("Minting your ".concat(m.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(p).send({gasLimit:String(a),to:m.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(e){console.log(e),x("Sorry, something went wrong. Please try again later."),s(!1)})).then((function(e){console.log(e),x("Hooray! You successfully minted some ".concat(m.NFT_NAME,"! After the big reveal, you can see how your NFTs look on ").concat(m.MARKETPLACE,".")),s(!1),n(z(c.account))}))}(),v()},children:i?"BUSY":"MINT"})}):Object(ce.jsxs)(ee,{style:{textAlign:"center",fontSize:28,color:"var(--primary-text)"},children:["The minting begins ",new Date(m.LAUNCH_DATE).toUTCString(),"."]})]})]}),Object(ce.jsx)("div",{className:"countdown",style:{textAlign:"center",fontSize:60,fontWeight:"bold",fontFamily:"Liberation Mono",color:"var(--primary-text)"},children:Object(ce.jsx)(te.a,{date:new Date(m.LAUNCH_DATE),children:Object(ce.jsx)(re,{})})}),Object(ce.jsxs)(Z,{jc:"center",ai:"center",style:{width:"90%"},children:[Object(ce.jsx)(J,{}),Object(ce.jsx)(J,{}),Object(ce.jsxs)(ee,{style:{textAlign:"center",color:"var(--secondary-text)"},children:["We have set the gas limit to ",m.GAS_LIMIT," so that the smart contract can successfully mint the ",m.NFT_NAME,". We recommend that you don't lower the gas limit. Otherwise the minting may fail."]}),Object(ce.jsx)(q,{}),Object(ce.jsx)(ee,{style:{textAlign:"center",fontSize:20,color:"var(--accent-text)"},children:"Please note: Once you make the purchase, you cannot undo this action."})]}),Object(ce.jsx)(J,{})]}),Object(ce.jsx)(V,{}),Object(ce.jsx)(Z,{flex:1,jc:"center",ai:"center",children:Object(ce.jsx)(se,{alt:"preview",src:"/config/images/preview.gif"})})]}),Object(ce.jsx)(q,{}),Object(ce.jsx)(Z,{jc:"center",ai:"center",style:{margin:"0",padding:"0",color:"#efefef"},children:Object(ce.jsxs)("div",{className:"social",children:[Object(ce.jsx)("a",{href:"https://t.me/PixelGuyClubNFT",target:"_blank",children:Object(ce.jsx)("img",{src:"/telegram-plane-brands.svg"})}),Object(ce.jsx)("a",{href:"https://twitter.com/PixelGuyClub1",target:"_blank",children:Object(ce.jsx)("img",{src:"/twitter-brands.svg"})})]})})]})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,541)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};n(536);y.a.render(Object(ce.jsx)(_.a,{store:W,children:Object(ce.jsx)(de,{})}),document.getElementById("root")),ue()}},[[537,1,2]]]);
//# sourceMappingURL=main.5cc39d65.chunk.js.map