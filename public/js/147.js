(self.webpackChunk=self.webpackChunk||[]).push([[147],{7147:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>W});var r=n(7757),o=n.n(r),i=n(7294),a=n(7393),s=n(8767),c=n(6106),u=n(2740),l=n(5893);const f=function(){var t=(0,a.y)(),e=t.singDate,n=t.setDate;return(0,l.jsx)(u.Z,{selected:e,onChange:function(t){return n(t)}})};var d=n(7425);const m=function(){var t=(0,a.y)(),e=t.singRate,n=t.setRate;return(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{value:e,onClick:function(t){return n(t)}})})};var g=n(7332);const h=function(t){var e=t.rowId,n=(0,a.y)(),r=n.singKey,o=n.setKey;return(0,l.jsx)("div",{children:(0,l.jsx)(g.Z,{primaryKey:e,value:r,onClick:function(t){return o(t)}})})};var v=n(1538),p=n(3782),y=n(9327),b=n(6554),j=n.n(b);function x(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}var S=function(t){var e=t.mode,n=void 0===e?"search":e,r=t.country,i=void 0===r?"jp":r,a=t.lang,s=void 0===a?"ja_jp":a,c=t.entity,u=t.attribute,l=t.term,f=t.sort,d=void 0===f?"popular":f,m=t.limit,g=void 0===m?200:m,h=t.options,v=void 0===h?{}:h,p=Object.keys(v).map((function(t){return"&".concat(t,"=").concat(v[t])})),y=function(){var t,e=(t=o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j()("https://itunes.apple.com/".concat(n,"?lang=").concat(s,"&entity=").concat(c,"&country=").concat(i).concat("search"==n?"&term=".concat(l,"&attribute=").concat(u):"&sort=".concat(d),"&limit=").concat(g).concat(p));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){x(i,r,o,a,s,"next",t)}function s(t){x(i,r,o,a,s,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return{iTunesAPIfetch:y}},w=n(7516);const N=i.createContext({});function k({baseColor:t,highlightColor:e,width:n,height:r,borderRadius:o,circle:i,direction:a,duration:s,enableAnimation:c=true}){const u={};return"rtl"===a&&(u["--animation-direction"]="reverse"),"number"==typeof s&&(u["--animation-duration"]=`${s}s`),c||(u["--pseudo-element-display"]="none"),"string"!=typeof n&&"number"!=typeof n||(u.width=n),"string"!=typeof r&&"number"!=typeof r||(u.height=r),"string"!=typeof o&&"number"!=typeof o||(u.borderRadius=o),i&&(u.borderRadius="50%"),void 0!==t&&(u["--base-color"]=t),void 0!==e&&(u["--highlight-color"]=e),u}function C({count:t=1,wrapper:e,className:n,containerClassName:r,containerTestId:o,circle:a=!1,style:s,...c}){var u,l;const f=i.useContext(N),d={...c};for(const[t,e]of Object.entries(c))void 0===e&&delete d[t];const m={...f,...d,circle:a},g={...s,...k(m)};let h="react-loading-skeleton";n&&(h+=` ${n}`);const v=null!==(u=m.inline)&&void 0!==u&&u,p=[];for(let e=0;e<t;e++){const t=i.createElement("span",{className:h,style:g,key:e},"‌");v?p.push(t):p.push(i.createElement(i.Fragment,{key:e},t,i.createElement("br",null)))}return i.createElement("span",{className:r,"data-testid":o,"aria-live":"polite","aria-busy":null===(l=m.enableAnimation)||void 0===l||l},e?p.map(((t,n)=>i.createElement(e,{key:n},t))):p)}var E,O,P,A=n(8872);function I(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){T(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function L(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return M(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const R=function(){var t,e=(0,a.y)(),n=e.singArtistName,r=e.setArtistName,o=e.singArtistId,c=e.setArtistId,u=e.setSongName,f=e.singSongName,d=e.setJacketImage,m=e.setKey,g=(0,v.T)(),h=g.artistLog,b=g.songLog,j=(t=(0,a.y)().allRecords,{getPreviousKey:function(e,n){var r=t.filter((function(t){return e==t.songName&&n==t.artistId}));return r.sort((function(t,e){return t[singDate]>e[singDate]?1:-1})),r.length>0?r[0].singKey:0}}).getPreviousKey,x=L((0,i.useState)([]),2),N=x[0],k=x[1],F=L((0,i.useState)(!1),2),M=F[0],R=F[1],K=L((0,i.useState)(""),2),B=K[0],Z=K[1],J=L((0,i.useState)(!1),2),_=J[0],U=J[1],$=L((0,i.useState)(""),2),q=$[0],z=$[1],Q=L((0,i.useState)(!1),2),V=Q[0],W=Q[1],G=L((0,i.useState)(!1),2),H=G[0],X=G[1],Y=L((0,i.useState)([]),2),tt=Y[0],et=Y[1],nt=L((0,i.useState)([]),2),rt=nt[0],ot=nt[1],it=L((0,i.useState)(""),2),at=it[0],st=it[1],ct=L((0,i.useState)(!1),2),ut=ct[0],lt=ct[1],ft=L((0,i.useState)([]),2),dt=ft[0],mt=ft[1],gt=L((0,i.useState)(!1),2),ht=gt[0],vt=gt[1],pt=L((0,i.useState)(!1),2),yt=pt[0],bt=pt[1],jt=L((0,i.useState)(!1),2),xt=jt[0],St=jt[1];(0,i.useEffect)((function(){!H&&f.length>0&&n.length>0&&(X(!0),st(f))}),[]),(0,i.useEffect)((function(){h.length>0&&k(h)}),[h,M]);var wt=function(){_||R(!0)},Nt=function(t){return N.filter((function(e){return-1!==e.artistName.toLowerCase().indexOf(t.toLowerCase())}))},kt=function(t){console.log(t.data),St(!1),k(Nt(t.data))},Ct=S({mode:"lookup",entity:"song",attribute:"songTerm",options:{id:o}}).iTunesAPIfetch,Et=(0,s.useQuery)("songSearch",Ct,{enabled:!1,retry:0,onSuccess:function(t){var e=[];t.results.map((function(t){var n=t.wrapperType,r=t.trackName,o=t.artistName,i=t.artworkUrl30;"track"===n&&e.push({song:r,artist:o,thumbnail:i})})),mt(e),ot(e)},onError:function(t){return console.log(t)}}),Ot=Et.refetch,Pt=Et.isLoading,At=function(t){var e,n=(e=t.artistId,b.filter((function(t){return t.artistId==e})));et(n),vt(!0),ot(n)},It=function(){vt(!0)};(0,i.useEffect)((function(){ot(tt)}),[ht]);var Ft=function(){k([])},Dt=function(t){var e=t.artistId,n=t.artistName;c(e),r(n)},Tt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NotFound";Ft(),U(!0),R(!1),"NotFound"!==t?(Z(t.artistName),Dt(t),At(t)):Dt({artistId:-1,artistName:B}),X(!0)};(0,i.useEffect)((function(){o>-1&&Ot()}),[o]);var Lt=S({entity:"musicArtist",attribute:"artistTerm",term:q}).iTunesAPIfetch,Mt=(0,s.useQuery)("artistSearch",Lt,{enabled:!1,retry:0,onSuccess:function(t){var e=[];t.results.map((function(t){var n=t.artistName,r=t.artistId;e.push({artistName:n,artistId:r})})),k(e),W(!0)},onError:function(t){return console.log(t)}}).refetch,Rt=!_&&0===N.length&&B.length>0;(0,i.useEffect)((function(){Rt&&z(encodeURIComponent(B))}),[N]),(0,i.useEffect)((function(){q.length>0&&Mt()}),[q]);var Kt=function(t){var e=t.target.value;st(e),e.length>0&&ot(function(t){return rt.filter((function(e){return-1!==e.song.toLowerCase().indexOf(t.toLowerCase())}))}(e))},Bt=function(){ot([])},Zt=function(t){var e=t.song,n=t.artist,o=t.thumbnail,i=t.key;u(e),r(n),d(o),m(i)},Jt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NotFound";Bt(),lt(!0),vt(!1);var e=0;"NotFound"!==t?(st(t.song),V||(e=j(t.song,o)),Zt(D(D({},t),{},{key:e}))):Zt({song:at,artist:n,thumbnail:"",key:e})};(0,i.useEffect)((function(){!ut&&0===rt.length&&at.length>0&&o>0&&(bt(!0),ot(dt))}),[rt]);var _t=function(){ot([]),st(""),lt(!1),bt(!1),vt(!1)};(0,i.useEffect)((function(){0===B.length&&0===n.length&&X(!1)}),[B]);var Ut=function(){u(""),d("")},$t=function(){k([]),Z(""),U(!1),z(""),R(!1),W(!1),_t(),r(""),c(-1),Ut()},qt=["rgba(227, 163, 171, .3)","rgba(202, 226, 230, .3)","rgba(204, 223, 181, .3)","rgba(194, 199, 225, .3)"],zt=(0,A.iv)(E||(E=I(["\n    text-align: right;\n    font-size: 0.7rem;\n    font-family: 'TsukushiBMaruGothic';\n    color: antiquewhite;\n    padding-top: 1em;\n  "])));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{children:[Pt?(0,l.jsx)(C,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:zt,children:"ローマ字名は楽曲入力時に正式な名称に変換されます"}),(0,l.jsx)(p.oi,{value:B,onChange:function(t){return function(t){var e=t.target.value;Z(e),e.length>0&&!xt&&k(Nt(e))}(t)},onCompositionStart:function(){return St(!0)},onCompositionEnd:function(t){return kt(t)},placeholder:"search artists",onFocus:function(){return wt()},onTouchEnd:function(){return wt()},icon:B.length>0?(0,l.jsx)(y.WB9,{onClick:function(t){return $t()}}):""})]}),M?(0,l.jsx)(p.FE,{children:(0,l.jsxs)(l.Fragment,{children:[V?(0,l.jsx)(p.j8,{onClick:function(t){return Tt()},children:(0,l.jsx)("span",{className:"title",children:"候補にない"})}):"",N.map((function(t,e){return(0,l.jsx)(p.j8,{onClick:function(e){return Tt(t)},className:(0,A.iv)(O||(O=I(["\n                    --pastel: ",";\n                  "])),qt[e%qt.length]),children:(0,l.jsx)("span",{className:"title",children:t.artistName})},"artist-".concat(e))}))]})}):""]}),(0,l.jsxs)("div",{children:[Pt?(0,l.jsx)(C,{}):(0,l.jsxs)(l.Fragment,{children:[!H&&(0,l.jsx)("div",{className:zt,children:"まずは上の欄にアーティスト名を記入してください"}),(0,l.jsx)(p.oi,{value:at,onChange:function(t){return Kt(t)},onFocus:function(){return It()},onTouchEnd:function(){return It()},icon:at.length>0?(0,l.jsx)(y.WB9,{onClick:function(t){return _t(),void Ut()}}):"",disabled:!H,placeholder:"search song"})]}),ht&&!Pt?(0,l.jsx)(p.FE,{children:(0,l.jsxs)(l.Fragment,{children:[yt?(0,l.jsx)(p.j8,{onClick:function(t){return Jt()},children:(0,l.jsx)("span",{className:"title",children:"候補にない"})}):"",rt.map((function(t,e){var n;return(0,l.jsxs)(p.j8,(T(n={className:"avatar",onClick:function(e){return Jt(t)}},"className",(0,A.iv)(P||(P=I(["\n                    --pastel: ",";\n                  "])),qt[e%qt.length])),T(n,"children",[t.thumbnail.length>0?(0,l.jsx)("img",{className:"circle",src:t.thumbnail}):"",(0,l.jsx)("span",{className:"title",children:t.song}),(0,l.jsxs)("p",{children:[(0,l.jsx)(w.DLv,{}),t.artist]})]),n),"song-".concat(e))}))]})}):""]})]})};var K=n(1201);const B=function(){var t=(0,a.y)(),e=t.singMemo,n=t.setMemo;return(0,l.jsx)("div",{children:(0,l.jsx)(K.Z,{value:e,setValue:n})})};var Z=n(5255);const J=function(){var t=(0,a.y)(),e=t.singScore,n=t.setScore;return(0,l.jsx)("div",{children:(0,l.jsx)(Z.Z,{score:e,setScore:n})})};var _=n(5817);const U=function(){var t=(0,a.y)(),e=t.setProblem,n=t.singProblem;return(0,l.jsx)("div",{children:(0,l.jsx)(_.Z,{value:n,setValue:e})})};var $=n(5871),q=n(8420);function z(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function Q(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return V(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const W=function(){var t=Q((0,i.useState)(!1),2),e=t[0],n=t[1],r=Q((0,i.useState)(""),2),u=r[0],d=r[1],g=(0,c.b)().api,v=(0,a.y)(),p=v.user,y=v.singDate,b=v.singArtistId,j=v.singArtistName,x=v.singSongName,S=v.singJacketImage,w=v.singKey,N=v.singRate,k=v.singScore,C=v.singProblem,E=v.singMemo,O=v.resetRecordBuilder,P=v.addRecord,A=v.setInitComplete;!function(){var t=(0,a.y)(),e=t.allRecords,n=t.setDate;(0,i.useEffect)((function(){if(e.length>0){var t=e[0];n(t.singDate)}}),[e.length])}();var I=function(){var t,e=(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.post("/api/ohako/setlist/store",{json:{userId:p.id,singDate:y?y.toLocaleDateString("ja-JP"):(new Date).toLocaleDateString("ja-JP"),artistId:b,artistName:j,songName:x,jacketImage:S,singKey:w,rating:N,score:k,memo:E,problems:C.map((function(t){return t.id}))}}).json();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){z(i,r,o,a,s,"next",t)}function s(t){z(i,r,o,a,s,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}(),F=(0,s.useQuery)("newSetlistSubmit",I,{enabled:!1,retry:0,onSuccess:function(t){if(!t.status)return console.log(t.message),void setError(t.message);P({id:t.id,singDate:y,artistId:b,artistName:j,songName:x,jacketImage:S,singKey:w,rating:N,score:k,memo:E,problems:C.map((function(t){return t.content})),registDate:(0,q.default)(t.created_at)}),O(),d(""),n(!1)},onError:function(t){console.log(t),d("エラーが発生しました。もう一度送信してください。"),n(!0)},onSettled:function(){A(!0)}}),D=F.refetch,T=F.isLoading;return(0,l.jsx)($.Z,{isLoading:T,header:"Add a new history",id:"ohakoAddSetlistFormModal",isModalOpen:e,errorMsg:u,SingDateForm:(0,l.jsx)(f,{}),MusicForm:(0,l.jsx)(R,{}),SingKeyForm:(0,l.jsx)(h,{}),RatingForm:(0,l.jsx)(m,{}),ScoreForm:(0,l.jsx)(J,{}),ProblemsForm:(0,l.jsx)(U,{}),MemoForm:(0,l.jsx)(B,{}),submitLabel:"Add",onSubmit:function(t){A(!1),D()}})}},6554:function(t,e){var n,r,o;r=[e,t],n=function(t,e){"use strict";var n={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function r(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function o(t){try{delete window[t]}catch(e){window[t]=void 0}}function i(t){var e=document.getElementById(t);e&&document.getElementsByTagName("head")[0].removeChild(e)}function a(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=t,s=e.timeout||n.timeout,c=e.jsonpCallback||n.jsonpCallback,u=void 0;return new Promise((function(n,l){var f=e.jsonpCallbackFunction||r(),d=c+"_"+f;window[f]=function(t){n({ok:!0,json:function(){return Promise.resolve(t)}}),u&&clearTimeout(u),i(d),o(f)},a+=-1===a.indexOf("?")?"?":"&";var m=document.createElement("script");m.setAttribute("src",""+a+c+"="+f),e.charset&&m.setAttribute("charset",e.charset),e.nonce&&m.setAttribute("nonce",e.nonce),e.referrerPolicy&&m.setAttribute("referrerPolicy",e.referrerPolicy),m.id=d,document.getElementsByTagName("head")[0].appendChild(m),u=setTimeout((function(){l(new Error("JSONP request to "+t+" timed out")),o(f),i(d),window[f]=function(){o(f)}}),s),m.onerror=function(){l(new Error("JSONP request to "+t+" failed")),o(f),i(d),u&&clearTimeout(u)}}))}e.exports=a},void 0===(o="function"==typeof n?n.apply(e,r):n)||(t.exports=o)}}]);
//# sourceMappingURL=147.js.map