_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{DlE5:function(e,t,a){e.exports={container:"define_container__2L_wh",headContainer:"define_headContainer__1vHSa",headContainerContent:"define_headContainerContent__2iYm0",selectPool:"define_selectPool__1cCJO",choosePool:"define_choosePool__3LTDM",actionContainer:"define_actionContainer__qL3y1",selectedField:"define_selectedField__1DCmi",assetIcon:"define_assetIcon__GGnSL",assetDetails:"define_assetDetails__3DcHT",selectedPoolText:"define_selectedPoolText__1Xy68",assetNameText:"define_assetNameText__1ivr_",assetNameSubText:"define_assetNameSubText__2l8lu",inputContainer:"define_inputContainer__10fcv",inputFieldTitle:"define_inputFieldTitle__3c6_F",outlinedInput:"define_outlinedInput__3iCnk",availableText:"define_availableText__13qGo",rewardText:"define_rewardText__2hKs4",bigButton:"define_bigButton__1wXUF",inputButton:"define_inputButton__1MD1L"}},O5Sp:function(e,t,a){"use strict";a.r(t);var n=a("nKUr"),i=a("vJKn"),s=a.n(i),r=a("rg98"),o=a("q1tI"),c=a("20a2"),d=a("kB5k"),l=a.n(d),u=a("ofer"),p=a("kKAo"),h=a("r9w1"),b=a("Z3vd"),j=a("K/1S"),m=a("+zGO"),x=a("hdTg"),_=a("J8E0"),f=a("DlE5"),v=a.n(f),O=a("Fu3s"),S=a("hOaT"),g=a("kMCw");Object(j.a)({palette:{type:"light",primary:{main:"#2F80ED"}},shape:{borderRadius:"16px"},typography:{fontFamily:["Inter","Arial","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),body1:{fontSize:"12px"}},overrides:{MuiPaper:{elevation1:{"box-shadow":"0px 7px 7px #0000000A;","-webkit-box-shadow":"0px 7px 7px #0000000A;","-moz-box-shadow":"0px 7px 7px #0000000A;"}},MuiInputBase:{input:{fontSize:"14px"}},MuiOutlinedInput:{input:{padding:"24px 20px"},notchedOutline:{borderColor:"#FFF"}}}});t.default=Object(m.a)((function(e){var t=e.changeTheme,a=(e.theme,Object(c.useRouter)()),i=Object(o.useState)(null),d=i[0],j=i[1],m=Object(o.useState)(!1),f=m[0],w=m[1],N=Object(o.useState)(null),T=(N[0],N[1]),C=Object(o.useState)(!1),y=C[0],k=C[1],I=Object(o.useState)(""),P=(I[0],I[1],Object(o.useState)([])),F=P[0],A=P[1],D=Object(o.useState)(""),E=D[0],L=D[1],B=Object(o.useState)(""),M=B[0],q=B[1],z=Object(o.useState)(!1),R=z[0],W=z[1],J=Object(o.useState)(),K=J[0],U=J[1];return Object(o.useEffect)(Object(r.a)(s.a.mark((function e(){var t,n,i,o,c,d,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(O.a.accountStore.getStore("account")),e.t0=j,e.next=4,O.a.accountStore.getWeb3Provider();case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(r.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.a.incentivesStore.getStore("votes"),(n=t.filter((function(e){return e.index==parseInt(a.query.voteID)}))).length>0&&A(n[0]),e.t0=j,e.next=6,O.a.accountStore.getWeb3Provider();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(e){k(!1),U(e)},o=function(){w(!1),a.push("/")},c=function(){w(!1)},T(O.a.accountStore.getStore("account")),O.a.emitter.on(S.q,c),O.a.emitter.on(S.a,t),O.a.emitter.on(S.v,n),O.a.emitter.on(S.z,i),O.a.emitter.on(S.e,o),d=O.a.incentivesStore.getStore("votes"),console.log(a.query),(l=d.filter((function(e){return e.index==parseInt(a.query.voteID)}))).length>0&&A(l[0]),e.t0=j,e.next=18,O.a.accountStore.getWeb3Provider();case 18:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",(function(){O.a.emitter.removeListener(S.q,c),O.a.emitter.removeListener(S.a,t),O.a.emitter.removeListener(S.v,n),O.a.emitter.removeListener(S.z,i),O.a.emitter.removeListener(S.e,o)}));case 21:case"end":return e.stop()}}),e)}))),[]),Object(n.jsx)(x.a,{changeTheme:t,children:Object(n.jsx)("div",{className:v.a.container,children:Object(n.jsxs)("div",{className:v.a.headContainer,children:[Object(n.jsxs)("div",{className:v.a.headContainerContent,children:[Object(n.jsx)(_.a,{changeTheme:t,variant:2,backClicked:function(){a.push("/addVote")}}),Object(n.jsx)(u.a,{className:v.a.selectPool,children:"Define the Reward"}),Object(n.jsx)(u.a,{className:v.a.choosePool,children:"Add reward token address & specify the amount to be rewarded..."})]}),Object(n.jsxs)(p.a,{className:v.a.actionContainer,children:[Object(n.jsxs)("div",{className:v.a.selectedField,children:[Object(n.jsx)("img",{src:"/Curve.png",width:"55px",height:"55px",className:v.a.assetIcon}),Object(n.jsxs)("div",{className:v.a.assetDetails,children:[Object(n.jsxs)(u.a,{className:v.a.assetNameText,children:["Proposal #",F?F.index:""]}),Object(n.jsx)(u.a,{color:"textSecondary",className:v.a.assetNameSubText,children:F?"https://dao.curve.fi/vote/ownership/".concat(F.index):""})]}),Object(n.jsx)(u.a,{className:v.a.selectedPoolText,color:"textSecondary",children:"Selected Proposal"})]}),Object(n.jsxs)("div",{className:v.a.inputContainer,children:[Object(n.jsx)(u.a,{className:v.a.inputFieldTitle,children:"Add Reward Token Address:"}),Object(n.jsx)(h.a,{className:v.a.outlinedInput,variant:"outlined",fullWidth:!0,placeholder:"0x00000000000000",value:E,onChange:function(e){L(e.target.value)},InputProps:{endAdornment:Object(n.jsx)(b.a,{size:"large",variant:"contained",color:"primary",className:v.a.inputButton,onClick:function(){k(!0),O.a.dispatcher.dispatch({type:S.y,content:{address:E}})},disabled:y||!d||!d.utils||!d.utils.isAddress(E),children:Object(n.jsx)(u.a,{children:y?"Searching ...":"Search"})})}})]}),Object(n.jsxs)("div",{className:v.a.inputContainer,children:[Object(n.jsx)(u.a,{className:v.a.inputFieldTitle,children:"Total Reward Tokens On Offer:"}),Object(n.jsx)(h.a,{className:v.a.outlinedInput,variant:"outlined",fullWidth:!0,placeholder:"0.00",value:M,onChange:function(e){var t=e.target.value;isNaN(t)||l()(t).times(Math.pow(10,K.decimals)).gt(K.balance)?W(!0):W(!1),q(e.target.value)},error:R,disabled:!K,InputProps:{endAdornment:Object(n.jsxs)("div",{children:[Object(n.jsx)(u.a,{color:"textSecondary",className:v.a.availableText,children:"Available"}),Object(n.jsx)(u.a,{color:"textSecondary",className:v.a.availableText,children:K&&Object(g.b)(l()(K.balance).div(Math.pow(10,K.decimals)))})]}),startAdornment:Object(n.jsx)("div",{children:K&&K.address&&Object(n.jsx)("img",{width:30,height:30,style:{marginRight:12},src:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/".concat(d&&d.utils?d.utils.toChecksumAddress(K.address):K.address,"/logo.png")})})}})]}),Object(n.jsx)(u.a,{className:v.a.rewardText,children:"Rewards are valid for 7 days from time created"}),Object(n.jsx)("div",{className:v.a.bigButton,children:Object(n.jsx)(b.a,{size:"large",variant:"contained",color:"primary",fullWidth:!0,onClick:function(){w(!0),O.a.dispatcher.dispatch({type:S.d,content:{rewardToken:K,rewardAmount:M,vote:F}})},disabled:f,children:Object(n.jsx)(u.a,{children:f?"Submitting ...":"Submit"})})})]})]})})})}))},QFQu:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/addVote/[voteID]",function(){return a("O5Sp")}])}},[["QFQu",0,2,4,1,3,5,6]]]);