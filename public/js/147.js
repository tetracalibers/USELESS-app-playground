(self.webpackChunk=self.webpackChunk||[]).push([[147],{7147:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Y});var r=n(7757),i=n.n(r),o=n(7294),a=n(7393),s=n(8767),u=n(5021),c=n(2740),l=n(5893);const f=function(){var e=(0,a.y)(),t=e.singDate,n=e.setDate;return(0,l.jsx)(c.Z,{selected:t,onChange:function(e){return n(e)}})};var d=n(7425);const b=function(){var e=(0,a.y)(),t=e.singRate,n=e.setRate;return(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{value:t,onClick:function(e){return n(e)}})})};var m=n(7332);const p=function(e){var t=e.rowId,n=(0,a.y)(),r=n.singKey,i=n.setKey;return(0,l.jsx)("div",{children:(0,l.jsx)(m.Z,{primaryKey:t,value:r,onClick:function(e){return i(e)}})})};var w=n(1538),g=n(3782),v=n(9327),h=n(9781);function y(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}var x=function(e){var t=e.mode,n=void 0===t?"search":t,r=e.country,o=void 0===r?"jp":r,a=e.lang,s=void 0===a?"ja_jp":a,u=e.media,c=void 0===u?"music":u,l=e.entity,f=e.attribute,d=e.term,b=e.sort,m=void 0===b?"popular":b,p=e.limit,w=void 0===p?200:p,g=e.options,v=void 0===g?{}:g,x=Object.keys(v).map((function(e){return"&".concat(e,"=").concat(v[e])})),j=function(){var e,t=(e=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.ZP.get("https://itunes.apple.com/".concat(n,"?lang=").concat(s,"&media=").concat(c,"&entity=").concat(l,"&country=").concat(o,"&term=").concat(d,"&limit=").concat(w,"&attribute=").concat(f,"&sort=").concat(m).concat(x)).json();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){y(o,r,i,a,s,"next",e)}function s(e){y(o,r,i,a,s,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();return{iTunesAPIfetch:j}},j=n(7516);const S=o.createContext({});function k({baseColor:e,highlightColor:t,width:n,height:r,borderRadius:i,circle:o,direction:a,duration:s,enableAnimation:u=true}){const c={};return"rtl"===a&&(c["--animation-direction"]="reverse"),"number"==typeof s&&(c["--animation-duration"]=`${s}s`),u||(c["--pseudo-element-display"]="none"),"string"!=typeof n&&"number"!=typeof n||(c.width=n),"string"!=typeof r&&"number"!=typeof r||(c.height=r),"string"!=typeof i&&"number"!=typeof i||(c.borderRadius=i),o&&(c.borderRadius="50%"),void 0!==e&&(c["--base-color"]=e),void 0!==t&&(c["--highlight-color"]=t),c}function O({count:e=1,wrapper:t,className:n,containerClassName:r,containerTestId:i,circle:a=!1,style:s,...u}){var c,l;const f=o.useContext(S),d={...u};for(const[e,t]of Object.entries(u))void 0===t&&delete d[e];const b={...f,...d,circle:a},m={...s,...k(b)};let p="react-loading-skeleton";n&&(p+=` ${n}`);const w=null!==(c=b.inline)&&void 0!==c&&c,g=[];for(let t=0;t<e;t++){const e=o.createElement("span",{className:p,style:m,key:t},"‌");w?g.push(e):g.push(o.createElement(o.Fragment,{key:t},e,o.createElement("br",null)))}return o.createElement("span",{className:r,"data-testid":i,"aria-live":"polite","aria-busy":null===(l=b.enableAnimation)||void 0===l||l},t?g.map(((e,n)=>o.createElement(t,{key:n},e))):g)}var A,P,C,E=n(8872),I=n(5518);function N(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const D=function(){var e,t=(0,a.y)(),n=t.singArtistName,r=t.setArtistName,i=t.singArtistId,u=t.setArtistId,c=t.setSongName,f=t.singSongName,d=t.setJacketImage,b=t.setKey,m=(0,w.T)(),p=m.artistLog,h=m.songLog,y=(e=(0,a.y)().allRecords,{getPreviousKey:function(t,n){var r=e.filter((function(e){return t==e.songName&&n==e.artistId}));return r.sort((function(e,t){return e[singDate]>t[singDate]?1:-1})),r.length>0?r[0].singKey:0}}).getPreviousKey,S=U((0,o.useState)([]),2),k=S[0],T=S[1],F=U((0,o.useState)(!1),2),D=F[0],B=F[1],q=U((0,o.useState)(""),2),z=q[0],R=q[1],L=U((0,o.useState)(!1),2),V=L[0],W=L[1],Z=U((0,o.useState)(""),2),K=Z[0],$=Z[1],G=U((0,o.useState)(!1),2),Y=G[0],H=G[1],J=U((0,o.useState)(!1),2),Q=J[0],X=J[1],ee=U((0,o.useState)([]),2),te=ee[0],ne=ee[1],re=U((0,o.useState)([]),2),ie=re[0],oe=re[1],ae=U((0,o.useState)(""),2),se=ae[0],ue=ae[1],ce=U((0,o.useState)(!1),2),le=ce[0],fe=ce[1],de=U((0,o.useState)([]),2),be=de[0],me=de[1],pe=U((0,o.useState)(!1),2),we=pe[0],ge=pe[1],ve=U((0,o.useState)(!1),2),he=ve[0],ye=ve[1];(0,o.useEffect)((function(){!Q&&f.length>0&&n.length>0&&(X(!0),ue(f))}),[]),(0,o.useEffect)((function(){p.length>0&&T(p)}),[p,D]);var xe=function(e){var t=e.target.value;R(t),t.length>0&&T(function(e){return k.filter((function(t){return-1!==t.artistName.toLowerCase().indexOf(e.toLowerCase())}))}(t))},je=x({mode:"lookup",entity:"song",attribute:"songTerm",options:{id:i}}).iTunesAPIfetch,Se=(0,s.useQuery)("songSearch",je,{enabled:!1,retry:0,onSuccess:function(e){var t=[];e.results.map((function(e){var n=e.wrapperType,r=e.trackName,i=e.artistName,o=e.artworkUrl30;"track"===n&&t.push({song:r,artist:i,thumbnail:o})})),me(t),oe(t)},onError:function(e){return console.log(e)}}),ke=Se.refetch,Oe=Se.isLoading,Ae=function(e){var t,n=(t=e.artistId,h.filter((function(e){return e.artistId==t})));ne(n),ge(!0),oe(n)};(0,o.useEffect)((function(){oe(te)}),[we]);var Pe=function(){T([])},Ce=function(e){var t=e.artistId,n=e.artistName;u(t),r(n)},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NotFound";Pe(),W(!0),B(!1),"NotFound"!==e?(R(e.artistName),Ce(e),Ae(e)):Ce({artistId:-1,artistName:z}),X(!0)};(0,o.useEffect)((function(){i>-1&&ke()}),[i]);var Ie=x({entity:"musicArtist",attribute:"artistTerm",term:K}).iTunesAPIfetch,Ne=(0,s.useQuery)("artistSearch",Ie,{enabled:!1,retry:0,onSuccess:function(e){var t=[];e.results.map((function(e){var n=e.artistName,r=e.artistId;t.push({artistName:n,artistId:r})})),T(t),H(!0)},onError:function(e){return console.log(e)}}).refetch,Te=!V&&0===k.length&&z.length>0;(0,o.useEffect)((function(){Te&&$(encodeURIComponent(z))}),[k]),(0,o.useEffect)((function(){K.length>0&&Ne()}),[K]);var _e=function(e){var t=e.target.value;ue(t),t.length>0&&oe(function(e){return ie.filter((function(t){return-1!==t.song.toLowerCase().indexOf(e.toLowerCase())}))}(t))},Me=function(){oe([])},Ue=function(e){var t=e.song,n=e.artist,i=e.thumbnail,o=e.key;c(t),r(n),d(i),b(o)},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NotFound";Me(),fe(!0),ge(!1);var t=0;"NotFound"!==e?(ue(e.song),Y||(t=y(e.song,i)),Ue(_(_({},e),{},{key:t}))):Ue({song:se,artist:n,thumbnail:"",key:t})};(0,o.useEffect)((function(){!le&&0===ie.length&&se.length>0&&i>0&&(ye(!0),oe(be))}),[ie]);var De=function(){oe([]),ue(""),fe(!1),ye(!1),ge(!1)};(0,o.useEffect)((function(){0===z.length&&0===n.length&&X(!1)}),[z]);var Be=function(){c(""),d("")},qe=function(){T([]),R(""),W(!1),$(""),B(!1),H(!1),De(),r(""),u(-1),Be()},ze=["rgba(227, 163, 171, .3)","rgba(202, 226, 230, .3)","rgba(204, 223, 181, .3)","rgba(194, 199, 225, .3)"],Re=(0,E.iv)(A||(A=N(["\n    text-align: right;\n    font-size: 0.7rem;\n    font-family: 'TsukushiBMaruGothic';\n    color: antiquewhite;\n    padding-top: 1em;\n  "])));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{children:[Oe?(0,l.jsx)(O,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:Re,children:"ローマ字名は楽曲入力時に正式な名称に変換されます"}),(0,l.jsx)(g.oi,{value:z,onChange:function(e){I.tq||xe(e)},onCompositionEnd:function(e){return tartFilteringArtists(e)},placeholder:"search artists",onFocus:function(e){B(!0)},icon:z.length>0?(0,l.jsx)(v.WB9,{onClick:function(e){return qe()}}):""})]}),D?(0,l.jsx)(g.FE,{children:(0,l.jsxs)(l.Fragment,{children:[Y?(0,l.jsx)(g.j8,{onClick:function(e){return Ee()},children:(0,l.jsx)("span",{className:"title",children:"候補にない"})}):"",k.map((function(e,t){return(0,l.jsx)(g.j8,{onClick:function(t){return Ee(e)},className:(0,E.iv)(P||(P=N(["\n                    --pastel: ",";\n                  "])),ze[t%ze.length]),children:(0,l.jsx)("span",{className:"title",children:e.artistName})},"artist-".concat(t))}))]})}):""]}),(0,l.jsxs)("div",{children:[Oe?(0,l.jsx)(O,{}):(0,l.jsxs)(l.Fragment,{children:[!Q&&(0,l.jsx)("div",{className:Re,children:"まずは上の欄にアーティスト名を記入してください"}),(0,l.jsx)(g.oi,{value:se,onChange:function(e){I.tq||_e(e)},onCompositionEnd:function(e){return _e(e)},onFocus:function(e){ge(!0)},icon:se.length>0?(0,l.jsx)(v.WB9,{onClick:function(e){return De(),void Be()}}):"",disabled:!Q,placeholder:"search song"})]}),we&&!Oe?(0,l.jsx)(g.FE,{children:(0,l.jsxs)(l.Fragment,{children:[he?(0,l.jsx)(g.j8,{onClick:function(e){return Fe()},children:(0,l.jsx)("span",{className:"title",children:"候補にない"})}):"",ie.map((function(e,t){var n;return(0,l.jsxs)(g.j8,(M(n={className:"avatar",onClick:function(t){return Fe(e)}},"className",(0,E.iv)(C||(C=N(["\n                    --pastel: ",";\n                  "])),ze[t%ze.length])),M(n,"children",[e.thumbnail.length>0?(0,l.jsx)("img",{className:"circle",src:e.thumbnail}):"",(0,l.jsx)("span",{className:"title",children:e.song}),(0,l.jsxs)("p",{children:[(0,l.jsx)(j.DLv,{}),e.artist]})]),n),"song-".concat(t))}))]})}):""]})]})};var B=n(1201);const q=function(){var e=(0,a.y)(),t=e.singMemo,n=e.setMemo;return(0,l.jsx)("div",{children:(0,l.jsx)(B.Z,{value:t,setValue:n})})};var z=n(5255);const R=function(){var e=(0,a.y)(),t=e.singScore,n=e.setScore;return(0,l.jsx)("div",{children:(0,l.jsx)(z.Z,{score:t,setScore:n})})};var L=n(5817);const V=function(){var e=(0,a.y)(),t=e.setProblem,n=e.singProblem;return(0,l.jsx)("div",{children:(0,l.jsx)(L.Z,{value:n,setValue:t})})};var W=n(5871),Z=n(8420);function K(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const Y=function(){var e=$((0,o.useState)(!1),2),t=e[0],n=e[1],r=$((0,o.useState)(""),2),c=r[0],d=r[1],m=(0,u.b)().api,w=(0,a.y)(),g=w.user,v=w.singDate,h=w.singArtistId,y=w.singArtistName,x=w.singSongName,j=w.singJacketImage,S=w.singKey,k=w.singRate,O=w.singScore,A=w.singProblem,P=w.singMemo,C=w.resetRecordBuilder,E=w.addRecord,I=w.setInitComplete;!function(){var e=(0,a.y)(),t=e.allRecords,n=e.setDate;(0,o.useEffect)((function(){if(t.length>0){var e=t[0];n(e.singDate)}}),[t.length])}();var N=function(){var e,t=(e=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.post("/api/ohako/setlist/store",{json:{userId:g.id,singDate:v?v.toLocaleDateString("ja-JP"):(new Date).toLocaleDateString("ja-JP"),artistId:h,artistName:y,songName:x,jacketImage:j,singKey:S,rating:k,score:O,memo:P,problems:A.map((function(e){return e.value}))}}).json();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){K(o,r,i,a,s,"next",e)}function s(e){K(o,r,i,a,s,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),T=(0,s.useQuery)("newSetlistSubmit",N,{enabled:!1,retry:0,onSuccess:function(e){if(!e.status)return console.log(e.message),void setError(e.message);E({id:e.id,singDate:v,artistId:h,artistName:y,songName:x,jacketImage:j,singKey:S,rating:k,score:O,memo:P,problems:A.map((function(e){return e.label})),registDate:(0,Z.default)(e.created_at)}),C(),d(""),n(!1)},onError:function(e){console.log(e),d("エラーが発生しました。もう一度送信してください。"),n(!0)},onSettled:function(){I(!0)}}),_=T.refetch,M=T.isLoading;return(0,l.jsx)(W.Z,{isLoading:M,header:"Add a new history",id:"ohakoAddSetlistFormModal",isModalOpen:t,errorMsg:c,SingDateForm:(0,l.jsx)(f,{}),MusicForm:(0,l.jsx)(D,{}),SingKeyForm:(0,l.jsx)(p,{}),RatingForm:(0,l.jsx)(b,{}),ScoreForm:(0,l.jsx)(R,{}),ProblemsForm:(0,l.jsx)(V,{}),MemoForm:(0,l.jsx)(q,{}),submitLabel:"Add",onSubmit:function(e){I(!1),_()}})}},5518:(e,t,n)=>{"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r,a=n(3451),s=new a,u=s.getBrowser(),c=s.getCPU(),l=s.getDevice(),f=s.getEngine(),d=s.getOS(),b=s.getUA(),m=function(e){return s.setUA(e)},p=function(e){if(e){var t=new a(e);return{UA:t,browser:t.getBrowser(),cpu:t.getCPU(),device:t.getDevice(),engine:t.getEngine(),os:t.getOS(),ua:t.getUA(),setUserAgent:function(e){return t.setUA(e)}}}console.error("No userAgent string was provided")},w=Object.freeze({ClientUAInstance:s,browser:u,cpu:c,device:l,engine:f,os:d,ua:b,setUa:m,parseUserAgent:p});function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function k(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C="mobile",E="tablet",I="smarttv",N="console",T="wearable",_="embedded",M=void 0,U={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},F={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},D={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||t},q=function(){return!("undefined"==typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},z=function(e){var t=q();return t&&t.platform&&(-1!==t.platform.indexOf(e)||"MacIntel"===t.platform&&t.maxTouchPoints>1&&!window.MSStream)},R=function(e,t,n,r){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{vendor:B(t.vendor),model:B(t.model),os:B(n.name),osVersion:B(n.version),ua:B(r)})};var L=function(e){return e.type===C},V=function(e){return e.type===E},W=function(e){var t=e.type;return t===C||t===E},Z=function(e){return e.type===I},K=function(e){return e.type===M},$=function(e){return e.type===T},G=function(e){return e.type===N},Y=function(e){return e.type===_},H=function(e){var t=e.vendor;return B(t)},J=function(e){var t=e.model;return B(t)},Q=function(e){var t=e.type;return B(t,"browser")},X=function(e){return e.name===F.Android},ee=function(e){return e.name===F.Windows},te=function(e){return e.name===F.MAC_OS},ne=function(e){return e.name===F.WindowsPhone},re=function(e){return e.name===F.IOS},ie=function(e){var t=e.version;return B(t)},oe=function(e){var t=e.name;return B(t)},ae=function(e){return e.name===U.Chrome},se=function(e){return e.name===U.Firefox},ue=function(e){return e.name===U.Chromium},ce=function(e){return e.name===U.Edge},le=function(e){return e.name===U.Yandex},fe=function(e){var t=e.name;return t===U.Safari||t===U.MobileSafari},de=function(e){return e.name===U.MobileSafari},be=function(e){return e.name===U.Opera},me=function(e){var t=e.name;return t===U.InternetExplorer||t===U.Ie},pe=function(e){return e.name===U.MIUI},we=function(e){return e.name===U.SamsungBrowser},ge=function(e){var t=e.version;return B(t)},ve=function(e){var t=e.major;return B(t)},he=function(e){var t=e.name;return B(t)},ye=function(e){var t=e.name;return B(t)},xe=function(e){var t=e.version;return B(t)},je=function(){var e=q(),t=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"==typeof t&&/electron/.test(t)},Se=function(e){return"string"==typeof e&&-1!==e.indexOf("Edg/")},ke=function(){var e=q();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},Oe=function(){return z("iPad")},Ae=function(){return z("iPhone")},Pe=function(){return z("iPod")},Ce=function(e){return B(e)};function Ee(e){var t=e||w,n=t.device,r=t.browser,i=t.os,o=t.engine,a=t.ua;return{isSmartTV:Z(n),isConsole:G(n),isWearable:$(n),isEmbedded:Y(n),isMobileSafari:de(r)||Oe(),isChromium:ue(r),isMobile:W(n)||Oe(),isMobileOnly:L(n),isTablet:V(n)||Oe(),isBrowser:K(n),isDesktop:K(n),isAndroid:X(i),isWinPhone:ne(i),isIOS:re(i)||Oe(),isChrome:ae(r),isFirefox:se(r),isSafari:fe(r),isOpera:be(r),isIE:me(r),osVersion:ie(i),osName:oe(i),fullBrowserVersion:ge(r),browserVersion:ve(r),browserName:he(r),mobileVendor:H(n),mobileModel:J(n),engineName:ye(o),engineVersion:xe(o),getUA:Ce(a),isEdge:ce(r)||Se(a),isYandex:le(r),deviceType:Q(n),isIOS13:ke(),isIPad13:Oe(),isIPhone13:Ae(),isIPod13:Pe(),isElectron:je(),isEdgeChromium:Se(a),isLegacyEdge:ce(r)&&!Se(a),isWindows:ee(i),isMacOs:te(i),isMIUI:pe(r),isSamsungBrowser:we(r)}}var Ie=Z(l),Ne=G(l),Te=$(l),_e=Y(l),Me=de(u)||Oe(),Ue=ue(u),Fe=W(l)||Oe(),De=L(l),Be=V(l)||Oe(),qe=K(l),ze=K(l),Re=X(d),Le=ne(d),Ve=re(d)||Oe(),We=ae(u),Ze=se(u),Ke=fe(u),$e=be(u),Ge=me(u),Ye=ie(d),He=oe(d),Je=ge(u),Qe=ve(u),Xe=he(u),et=H(l),tt=J(l),nt=ye(f),rt=xe(f),it=Ce(b),ot=ce(u)||Se(b),at=le(u),st=Q(l),ut=ke(),ct=Oe(),lt=Ae(),ft=Pe(),dt=je(),bt=Se(b),mt=ce(u)&&!Se(b),pt=ee(d),wt=te(d),gt=pe(u),vt=we(u);function ht(e){var t=e||window.navigator.userAgent;return p(t)}t.tq=Fe},3451:function(e,t,n){var r;!function(i,o){"use strict";var a="function",s="undefined",u="object",c="string",l="model",f="name",d="type",b="vendor",m="version",p="architecture",w="console",g="mobile",v="tablet",h="smarttv",y="wearable",x="embedded",j="Amazon",S="Apple",k="ASUS",O="BlackBerry",A="Firefox",P="Google",C="Huawei",E="LG",I="Microsoft",N="Motorola",T="Opera",_="Samsung",M="Sony",U="Xiaomi",F="Zebra",D="Facebook",B=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},q=function(e,t){return typeof e===c&&-1!==z(t).indexOf(z(e))},z=function(e){return e.toLowerCase()},R=function(e,t){if(typeof e===c)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof t===s?e:e.substring(0,255)},L=function(e,t){for(var n,r,i,s,c,l,f=0;f<t.length&&!c;){var d=t[f],b=t[f+1];for(n=r=0;n<d.length&&!c;)if(c=d[n++].exec(e))for(i=0;i<b.length;i++)l=c[++r],typeof(s=b[i])===u&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,l):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=l?l.replace(s[1],s[2]):o:this[s[0]]=l?s[1].call(this,l,s[2]):o:4===s.length&&(this[s[0]]=l?s[3].call(this,l.replace(s[1],s[2])):o):this[s]=l||o;f+=2}},V=function(e,t){for(var n in t)if(typeof t[n]===u&&t[n].length>0){for(var r=0;r<t[n].length;r++)if(q(t[n][r],e))return"?"===n?o:n}else if(q(t[n],e))return"?"===n?o:n;return e},W={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Z={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[f,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[f,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[f,m],[/opios[\/ ]+([\w\.]+)/i],[m,[f,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[m,[f,T]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[f,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[f,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[m,[f,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[f,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[f,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[f,"IE"]],[/yabrowser\/([\w\.]+)/i],[m,[f,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[f,/(.+)/,"$1 Secure Browser"],m],[/\bfocus\/([\w\.]+)/i],[m,[f,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[m,[f,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[f,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[f,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[f,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[f,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[m,[f,A]],[/\bqihu|(qi?ho?o?|360)browser/i],[[f,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[f,/(.+)/,"$1 Browser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[f,/_/g," "],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[f,m],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[f],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[f,D],m],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[f,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[f,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[f,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[f,"Chrome WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[f,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[f,m],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[m,[f,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[m,f],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[f,[m,V,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[f,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[f,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[f,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[f,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,z]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",z]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,z]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[b,_],[d,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[l,[b,_],[d,g]],[/\((ip(?:hone|od)[\w ]*);/i],[l,[b,S],[d,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[b,S],[d,v]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[l,[b,C],[d,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[l,[b,C],[d,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[l,/_/g," "],[b,U],[d,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[l,/_/g," "],[b,U],[d,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[b,"OPPO"],[d,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[b,"Vivo"],[d,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[l,[b,"Realme"],[d,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[b,N],[d,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[b,N],[d,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[b,E],[d,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[b,E],[d,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[l,[b,"Lenovo"],[d,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[l,/_/g," "],[b,"Nokia"],[d,g]],[/(pixel c)\b/i],[l,[b,P],[d,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[b,P],[d,g]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[b,M],[d,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[b,M],[d,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[b,"OnePlus"],[d,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[b,j],[d,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[b,j],[d,g]],[/(playbook);[-\w\),; ]+(rim)/i],[l,b,[d,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[b,O],[d,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[b,k],[d,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[b,k],[d,g]],[/(nexus 9)/i],[l,[b,"HTC"],[d,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[b,[l,/_/g," "],[d,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[b,"Acer"],[d,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[b,"Meizu"],[d,g]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[b,"Sharp"],[d,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[b,l,[d,g]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[b,l,[d,v]],[/(surface duo)/i],[l,[b,I],[d,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[b,"Fairphone"],[d,g]],[/(u304aa)/i],[l,[b,"AT&T"],[d,g]],[/\bsie-(\w*)/i],[l,[b,"Siemens"],[d,g]],[/\b(rct\w+) b/i],[l,[b,"RCA"],[d,v]],[/\b(venue[\d ]{2,7}) b/i],[l,[b,"Dell"],[d,v]],[/\b(q(?:mv|ta)\w+) b/i],[l,[b,"Verizon"],[d,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[b,"Barnes & Noble"],[d,v]],[/\b(tm\d{3}\w+) b/i],[l,[b,"NuVision"],[d,v]],[/\b(k88) b/i],[l,[b,"ZTE"],[d,v]],[/\b(nx\d{3}j) b/i],[l,[b,"ZTE"],[d,g]],[/\b(gen\d{3}) b.+49h/i],[l,[b,"Swiss"],[d,g]],[/\b(zur\d{3}) b/i],[l,[b,"Swiss"],[d,v]],[/\b((zeki)?tb.*\b) b/i],[l,[b,"Zeki"],[d,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[b,"Dragon Touch"],l,[d,v]],[/\b(ns-?\w{0,9}) b/i],[l,[b,"Insignia"],[d,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[b,"NextBook"],[d,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[b,"Voice"],l,[d,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[b,"LvTel"],l,[d,g]],[/\b(ph-1) /i],[l,[b,"Essential"],[d,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[b,"Envizen"],[d,v]],[/\b(trio[-\w\. ]+) b/i],[l,[b,"MachSpeed"],[d,v]],[/\btu_(1491) b/i],[l,[b,"Rotor"],[d,v]],[/(shield[\w ]+) b/i],[l,[b,"Nvidia"],[d,v]],[/(sprint) (\w+)/i],[b,l,[d,g]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[b,I],[d,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[b,F],[d,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[b,F],[d,g]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[b,l,[d,w]],[/droid.+; (shield) bui/i],[l,[b,"Nvidia"],[d,w]],[/(playstation [345portablevi]+)/i],[l,[b,M],[d,w]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[b,I],[d,w]],[/smart-tv.+(samsung)/i],[b,[d,h]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[b,_],[d,h]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[b,E],[d,h]],[/(apple) ?tv/i],[b,[l,"Apple TV"],[d,h]],[/crkey/i],[[l,"Chromecast"],[b,P],[d,h]],[/droid.+aft(\w)( bui|\))/i],[l,[b,j],[d,h]],[/\(dtv[\);].+(aquos)/i],[l,[b,"Sharp"],[d,h]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[b,R],[l,R],[d,h]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,h]],[/((pebble))app/i],[b,l,[d,y]],[/droid.+; (glass) \d/i],[l,[b,P],[d,y]],[/droid.+; (wt63?0{2,3})\)/i],[l,[b,F],[d,y]],[/(quest( 2)?)/i],[l,[b,D],[d,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[b,[d,x]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[l,[d,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[d,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,v]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[d,g]],[/(android[-\w\. ]{0,9});.+buil/i],[l,[b,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[f,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[f,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[f,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,f]],os:[[/microsoft (windows) (vista|xp)/i],[f,m],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[f,[m,V,W]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[f,"Windows"],[m,V,W]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[f,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[f,"Mac OS"],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[m,f],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[f,m],[/\(bb(10);/i],[m,[f,O]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[f,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[f,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[f,"webOS"]],[/crkey\/([\d\.]+)/i],[m,[f,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[f,"Chromium OS"],m],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[f,m],[/(sunos) ?([\w\.\d]*)/i],[[f,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[f,m]]},K=function(e,t){if(typeof e===u&&(t=e,e=o),!(this instanceof K))return new K(e,t).getResult();var n=e||(typeof i!==s&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:""),r=t?function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2==0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n}(Z,t):Z;return this.getBrowser=function(){var e,t={};return t.name=o,t.version=o,L.call(t,n,r.browser),t.major=typeof(e=t.version)===c?e.replace(/[^\d\.]/g,"").split(".")[0]:o,t},this.getCPU=function(){var e={};return e.architecture=o,L.call(e,n,r.cpu),e},this.getDevice=function(){var e={};return e.vendor=o,e.model=o,e.type=o,L.call(e,n,r.device),e},this.getEngine=function(){var e={};return e.name=o,e.version=o,L.call(e,n,r.engine),e},this.getOS=function(){var e={};return e.name=o,e.version=o,L.call(e,n,r.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=typeof e===c&&e.length>255?R(e,255):e,this},this.setUA(n),this};K.VERSION="0.7.31",K.BROWSER=B([f,m,"major"]),K.CPU=B([p]),K.DEVICE=B([l,b,d,w,g,h,v,y,x]),K.ENGINE=K.OS=B([f,m]),typeof t!==s?(e.exports&&(t=e.exports=K),t.UAParser=K):n.amdO?(r=function(){return K}.call(t,n,t,e))===o||(e.exports=r):typeof i!==s&&(i.UAParser=K);var $=typeof i!==s&&(i.jQuery||i.Zepto);if($&&!$.ua){var G=new K;$.ua=G.getResult(),$.ua.get=function(){return G.getUA()},$.ua.set=function(e){G.setUA(e);var t=G.getResult();for(var n in t)$.ua[n]=t[n]}}}("object"==typeof window?window:this)}}]);
//# sourceMappingURL=147.js.map