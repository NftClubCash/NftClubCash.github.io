(this.webpackJsonppixel_guy_club_nft_minting_dapp=this.webpackJsonppixel_guy_club_nft_minting_dapp||[]).push([[0],{247:function(n,t){},256:function(n,t){},274:function(n,t){},276:function(n,t){},295:function(n,t){},296:function(n,t){},359:function(n,t){},361:function(n,t){},394:function(n,t){},396:function(n,t){},397:function(n,t){},402:function(n,t){},404:function(n,t){},410:function(n,t){},412:function(n,t){},425:function(n,t){},437:function(n,t){},440:function(n,t){},445:function(n,t){},453:function(n,t){},462:function(n,t){},464:function(n,t){},534:function(n,t,e){},535:function(n,t,e){"use strict";e.r(t);var c,a,r,o,i,s,l,u,d,x,p,b,j,h,g,f,O=e(1),m=e(86),y=e.n(m),C=e(17),A=e.n(C),w=e(44),v=e(70),E=e(15),S=e(59),T=e(69),_=e.n(T),N=e(221),k=e.n(N),D=e(71),M=e(222),L=e(20),I={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(L.a)(Object(L.a)({},I),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(L.a)(Object(L.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(L.a)(Object(L.a)({},I),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(L.a)(Object(L.a)({},n),{},{account:t.payload.account});default:return n}},R={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},K=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(L.a)(Object(L.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(L.a)(Object(L.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(L.a)(Object(L.a)({},R),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},P=Object(D.b)({blockchain:U,data:K}),F=[M.a],H=Object(D.c)(D.a.apply(void 0,F)),z=Object(D.d)(P,H),W=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},Y=function(){return function(){var n=Object(w.a)(A.a.mark((function n(t){var e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,z.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(W("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},B=function(n){return{type:"CONNECTION_FAILED",payload:n}},G=function(n){return function(){var t=Object(w.a)(A.a.mark((function t(e){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(Y());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},Q=e(16),q=Q.a.div(c||(c=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),X=(Q.a.div(a||(a=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),Q.a.div(r||(r=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"])))),J=Q.a.div(o||(o=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),V=Q.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Z=Q.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),$=Q.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),nn=(Q.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Q.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),tn=(Q.a.div(x||(x=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(226)),en=e(3),cn=function(){return""},an=Q.a.button(p||(p=Object(E.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 50, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 50, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 50, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rn=Q.a.button(b||(b=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 50, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 50, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 50, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),on=Q.a.div(j||(j=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),sn=Q.a.img(h||(h=Object(E.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n  margin-top: 1em;\n"]))),ln=Q.a.img(g||(g=Object(E.a)(["\n  box-shadow: 0px 4px 0px -2px rgba(250, 50, 250, 0.3);\n  border: none;\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),un=Q.a.a(f||(f=Object(E.a)(["\n  color: var(--accent-text);\n  text-decoration: none;\n"])));var dn=function(){var n,t,e=Object(S.b)(),c=Object(S.c)((function(n){return n.blockchain})),a=Object(S.c)((function(n){return n.data})),r=Object(O.useState)(!1),o=Object(v.a)(r,2),i=o[0],s=o[1],l=Object(O.useState)("Click buy to mint your NFT."),u=Object(v.a)(l,2),d=u[0],x=u[1],p=Object(O.useState)(1),b=Object(v.a)(p,2),j=b[0],h=b[1],g=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1,LAUNCH_DATE:""}),f=Object(v.a)(g,2),m=f[0],y=f[1],C=function(){""!==c.account&&null!==c.smartContract&&e(Y(c.account))},E=function(){var n=Object(w.a)(A.a.mark((function n(){var t,e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,y(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(O.useEffect)((function(){E()}),[]),Object(O.useEffect)((function(){C()}),[c.account]),Object(en.jsx)(q,{children:Object(en.jsxs)(Z,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:m.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(en.jsx)(sn,{alt:"logo",src:"/config/images/logo.png"}),Object(en.jsx)(X,{}),Object(en.jsxs)(on,{flex:1,style:{padding:24},test:!0,children:[Object(en.jsx)(Z,{flex:1,jc:"center",ai:"center",children:Object(en.jsx)(ln,{alt:"example",src:"/config/images/example.gif"})}),Object(en.jsx)(V,{}),Object(en.jsxs)(Z,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"none",boxShadow:"0px 4px 0px -2px rgba(250,50,250,0.3)"},children:[Object(en.jsxs)($,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[a.totalSupply," / ",m.MAX_SUPPLY]}),Object(en.jsx)(nn,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(en.jsx)(un,{target:"_blank",href:m.SCAN_LINK,children:(n=m.CONTRACT_ADDRESS,t=15,n.length>t?"".concat(n.substring(0,t),"..."):n)})}),Object(en.jsx)(X,{}),Number(a.totalSupply)>=m.MAX_SUPPLY?Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)($,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(en.jsxs)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",m.NFT_NAME," on"]}),Object(en.jsx)(X,{}),Object(en.jsxs)(un,{target:"_blank",href:m.MARKETPLACE_LINK,children:[m.MARKETPLACE,Object(en.jsx)("img",{style:{width:"192px"},src:"/oasis_logo.svg",alt:"Oasis"})]})]}):Object(en.jsxs)(en.Fragment,{children:[Object(en.jsxs)($,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",m.SYMBOL," costs ",m.DISPLAY_COST," ",m.NETWORK.SYMBOL," plus gas fees."]}),Object(en.jsx)(J,{}),""===c.account||null===c.smartContract?Object(en.jsxs)(Z,{ai:"center",jc:"center",children:[Object(en.jsxs)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Please connect MetaMask to the ",m.NETWORK.NAME," network and then connect to this website."]}),Object(en.jsx)(X,{}),Object(en.jsx)(an,{onClick:function(n){n.preventDefault(),e(function(){var n=Object(w.a)(A.a.mark((function n(t){var e,c,a,r,o,i,s,l,u;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=n.sent,n.next=12,a.json();case 12:if(r=n.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){n.next=33;break}return _.a.setProvider(i),s=new k.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==r.NETWORK.ID?(u=new _.a(c,r.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(n){t(G(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(B("Change network to ".concat(r.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),t(B("Something went wrong."));case 31:n.next=34;break;case 33:t(B("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t){return n.apply(this,arguments)}}()),C()},children:"CONNECT"}),""!==c.errorMsg?Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)(X,{}),Object(en.jsx)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(en.jsxs)(en.Fragment,{children:[new Date>new Date(m.LAUNCH_DATE)?Object(en.jsx)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:d}):null,Object(en.jsx)(J,{}),new Date>new Date(m.LAUNCH_DATE)?Object(en.jsxs)(Z,{ai:"center",jc:"center",fd:"row",children:[Object(en.jsx)(rn,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j-1;n<1&&(n=1),h(n)}()},children:"-"}),Object(en.jsx)(J,{}),Object(en.jsx)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(en.jsx)(J,{}),Object(en.jsx)(rn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j+1;n>10&&(n=10),h(n)}()},children:"+"})]}):null,Object(en.jsx)(X,{}),new Date>new Date(m.LAUNCH_DATE)?Object(en.jsx)(Z,{ai:"center",jc:"center",fd:"row",children:Object(en.jsx)(an,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=m.WEI_COST,t=m.GAS_LIMIT,a=String(n*j),r=String(t*j);console.log("Cost: ",a),console.log("Gas limit: ",r),x("Minting your ".concat(m.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(j).send({gasLimit:String(r),to:m.CONTRACT_ADDRESS,from:c.account,value:a}).once("error",(function(n){console.log(n),x("Sorry, something went wrong. Please try again later."),s(!1)})).then((function(n){console.log(n),x("Hooray! You successfully minted some ".concat(m.NFT_NAME,"! After the big reveal, you can see how your NFTs look on ").concat(m.MARKETPLACE,".")),s(!1),e(Y(c.account))}))}(),C()},children:i?"BUSY":"BUY"})}):Object(en.jsxs)(nn,{style:{textAlign:"center",fontSize:28,color:"var(--primary-text)"},children:["The minting begins ",new Date(m.LAUNCH_DATE).toUTCString(),"."]})]})]}),Object(en.jsx)(J,{}),Object(en.jsx)(J,{}),Object(en.jsx)("div",{className:"countdown",style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--primary-text)"},children:Object(en.jsx)(tn.a,{date:new Date(m.LAUNCH_DATE),children:Object(en.jsx)(cn,{})})}),Object(en.jsxs)(Z,{jc:"center",ai:"center",style:{width:"90%"},children:[Object(en.jsx)(J,{}),Object(en.jsx)(J,{}),Object(en.jsxs)(nn,{style:{textAlign:"center",color:"var(---accent-text)"},children:["We have set the gas limit to ",m.GAS_LIMIT," so that the smart contract can successfully mint the ",m.NFT_NAME,". We recommend that you don't lower the gas limit. Otherwise the minting may fail."]}),Object(en.jsx)(X,{}),Object(en.jsx)(nn,{style:{textAlign:"center",fontSize:20,color:"var(--primary-text)"},children:"Please note: Once you make the purchase, you cannot undo this action."})]}),Object(en.jsx)(J,{})]}),Object(en.jsx)(V,{}),Object(en.jsx)(Z,{flex:1,jc:"center",ai:"center",children:Object(en.jsx)(ln,{alt:"example",src:"/config/images/example.gif"})})]})]})})},xn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,539)).then((function(t){var e=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;e(n),c(n),a(n),r(n),o(n)}))};e(534);y.a.render(Object(en.jsx)(S.a,{store:z,children:Object(en.jsx)(dn,{})}),document.getElementById("root")),xn()}},[[535,1,2]]]);
//# sourceMappingURL=main.496b158f.chunk.js.map