"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[147],{7147:(t,e,n)=>{n.r(e),n.d(e,{default:()=>_});var r=n(7757),o=n.n(r),i=n(7294),a=n(7393),s=n(8767),c=n(5021),u=n(2740),l=n(5893);const f=function(){var t=(0,a.y)(),e=t.singDate,n=t.setDate;return(0,l.jsx)(u.Z,{selected:e,onChange:function(t){return n(t)}})};var d=n(7425);const m=function(){var t=(0,a.y)(),e=t.singRate,n=t.setRate;return(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{value:e,onClick:function(t){return n(t)}})})};var g=n(7332);const h=function(t){var e=t.rowId,n=(0,a.y)(),r=n.singKey,o=n.setKey;return(0,l.jsx)("div",{children:(0,l.jsx)(g.Z,{primaryKey:e,value:r,onClick:function(t){return o(t)}})})};var v=n(1538),p=n(3782),y=n(9327),b=n(9781);function j(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}var x=function(t){var e=t.mode,n=void 0===e?"search":e,r=t.country,i=void 0===r?"jp":r,a=t.lang,s=void 0===a?"ja_jp":a,c=t.media,u=void 0===c?"music":c,l=t.entity,f=t.attribute,d=t.term,m=t.sort,g=void 0===m?"popular":m,h=t.limit,v=void 0===h?200:h,p=t.options,y=void 0===p?{}:p,x=Object.keys(y).map((function(t){return"&".concat(t,"=").concat(y[t])})),S=function(){var t,e=(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.ZP.get("https://itunes.apple.com/".concat(n,"?lang=").concat(s,"&media=").concat(u,"&entity=").concat(l,"&country=").concat(i,"&term=").concat(d,"&limit=").concat(v,"&attribute=").concat(f,"&sort=").concat(g).concat(x)).json();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){j(i,r,o,a,s,"next",t)}function s(t){j(i,r,o,a,s,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return{iTunesAPIfetch:S}},S=n(7516);const w=i.createContext({});function N({baseColor:t,highlightColor:e,width:n,height:r,borderRadius:o,circle:i,direction:a,duration:s,enableAnimation:c=true}){const u={};return"rtl"===a&&(u["--animation-direction"]="reverse"),"number"==typeof s&&(u["--animation-duration"]=`${s}s`),c||(u["--pseudo-element-display"]="none"),"string"!=typeof n&&"number"!=typeof n||(u.width=n),"string"!=typeof r&&"number"!=typeof r||(u.height=r),"string"!=typeof o&&"number"!=typeof o||(u.borderRadius=o),i&&(u.borderRadius="50%"),void 0!==t&&(u["--base-color"]=t),void 0!==e&&(u["--highlight-color"]=e),u}function k({count:t=1,wrapper:e,className:n,containerClassName:r,containerTestId:o,circle:a=!1,style:s,...c}){var u,l;const f=i.useContext(w),d={...c};for(const[t,e]of Object.entries(c))void 0===e&&delete d[t];const m={...f,...d,circle:a},g={...s,...N(m)};let h="react-loading-skeleton";n&&(h+=` ${n}`);const v=null!==(u=m.inline)&&void 0!==u&&u,p=[];for(let e=0;e<t;e++){const t=i.createElement("span",{className:h,style:g,key:e},"‌");v?p.push(t):p.push(i.createElement(i.Fragment,{key:e},t,i.createElement("br",null)))}return i.createElement("span",{className:r,"data-testid":o,"aria-live":"polite","aria-busy":null===(l=m.enableAnimation)||void 0===l||l},e?p.map(((t,n)=>i.createElement(e,{key:n},t))):p)}var I,O,C,A=n(8872),E=n(5518);function P(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){L(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function L(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const M=function(){var t,e=(0,a.y)(),n=e.singArtistName,r=e.setArtistName,o=e.singArtistId,c=e.setArtistId,u=e.setSongName,f=e.singSongName,d=e.setJacketImage,m=e.setKey,g=(0,v.T)(),h=g.artistLog,b=g.songLog,j=(t=(0,a.y)().allRecords,{getPreviousKey:function(e,n){var r=t.filter((function(t){return e==t.songName&&n==t.artistId}));return r.sort((function(t,e){return t[singDate]>e[singDate]?1:-1})),r.length>0?r[0].singKey:0}}).getPreviousKey,w=R((0,i.useState)([]),2),N=w[0],F=w[1],K=R((0,i.useState)(!1),2),M=K[0],T=K[1],Z=R((0,i.useState)(""),2),B=Z[0],J=Z[1],U=R((0,i.useState)(!1),2),$=U[0],q=U[1],z=R((0,i.useState)(""),2),Q=z[0],V=z[1],W=R((0,i.useState)(!1),2),_=W[0],G=W[1],H=R((0,i.useState)(!1),2),X=H[0],Y=H[1],tt=R((0,i.useState)([]),2),et=tt[0],nt=tt[1],rt=R((0,i.useState)([]),2),ot=rt[0],it=rt[1],at=R((0,i.useState)(""),2),st=at[0],ct=at[1],ut=R((0,i.useState)(!1),2),lt=ut[0],ft=ut[1],dt=R((0,i.useState)([]),2),mt=dt[0],gt=dt[1],ht=R((0,i.useState)(!1),2),vt=ht[0],pt=ht[1],yt=R((0,i.useState)(!1),2),bt=yt[0],jt=yt[1];(0,i.useEffect)((function(){!X&&f.length>0&&n.length>0&&(Y(!0),ct(f))}),[]),(0,i.useEffect)((function(){h.length>0&&F(h)}),[h,M]);var xt=function(t){var e=t.target.value;J(e),e.length>0&&F(function(t){return N.filter((function(e){return-1!==e.artistName.toLowerCase().indexOf(t.toLowerCase())}))}(e))},St=x({mode:"lookup",entity:"song",attribute:"songTerm",options:{id:o}}).iTunesAPIfetch,wt=(0,s.useQuery)("songSearch",St,{enabled:!1,retry:0,onSuccess:function(t){var e=[];t.results.map((function(t){var n=t.wrapperType,r=t.trackName,o=t.artistName,i=t.artworkUrl30;"track"===n&&e.push({song:r,artist:o,thumbnail:i})})),gt(e),it(e)},onError:function(t){return console.log(t)}}),Nt=wt.refetch,kt=wt.isLoading,It=function(t){var e,n=(e=t.artistId,b.filter((function(t){return t.artistId==e})));nt(n),pt(!0),it(n)};(0,i.useEffect)((function(){it(et)}),[vt]);var Ot=function(){F([])},Ct=function(t){var e=t.artistId,n=t.artistName;c(e),r(n)},At=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NotFound";Ot(),q(!0),T(!1),"NotFound"!==t?(J(t.artistName),Ct(t),It(t)):Ct({artistId:-1,artistName:B}),Y(!0)};(0,i.useEffect)((function(){o>-1&&Nt()}),[o]);var Et=x({entity:"musicArtist",attribute:"artistTerm",term:Q}).iTunesAPIfetch,Pt=(0,s.useQuery)("artistSearch",Et,{enabled:!1,retry:0,onSuccess:function(t){var e=[];t.results.map((function(t){var n=t.artistName,r=t.artistId;e.push({artistName:n,artistId:r})})),F(e),G(!0)},onError:function(t){return console.log(t)}}).refetch,Ft=!$&&0===N.length&&B.length>0;(0,i.useEffect)((function(){Ft&&V(encodeURIComponent(B))}),[N]),(0,i.useEffect)((function(){Q.length>0&&Pt()}),[Q]);var Dt=function(t){var e=t.target.value;ct(e),e.length>0&&it(function(t){return ot.filter((function(e){return-1!==e.song.toLowerCase().indexOf(t.toLowerCase())}))}(e))},Lt=function(){it([])},Rt=function(t){var e=t.song,n=t.artist,o=t.thumbnail,i=t.key;u(e),r(n),d(o),m(i)},Kt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NotFound";Lt(),ft(!0),pt(!1);var e=0;"NotFound"!==t?(ct(t.song),_||(e=j(t.song,o)),Rt(D(D({},t),{},{key:e}))):Rt({song:st,artist:n,thumbnail:"",key:e})};(0,i.useEffect)((function(){!lt&&0===ot.length&&st.length>0&&o>0&&(jt(!0),it(mt))}),[ot]);var Mt=function(){it([]),ct(""),ft(!1),jt(!1),pt(!1)};(0,i.useEffect)((function(){0===B.length&&0===n.length&&Y(!1)}),[B]);var Tt=function(){u(""),d("")},Zt=function(){F([]),J(""),q(!1),V(""),T(!1),G(!1),Mt(),r(""),c(-1),Tt()},Bt=["rgba(227, 163, 171, .3)","rgba(202, 226, 230, .3)","rgba(204, 223, 181, .3)","rgba(194, 199, 225, .3)"],Jt=(0,A.iv)(I||(I=P(["\n    text-align: right;\n    font-size: 0.7rem;\n    font-family: 'TsukushiBMaruGothic';\n    color: antiquewhite;\n    padding-top: 1em;\n  "])));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{children:[kt?(0,l.jsx)(k,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:Jt,children:"ローマ字名は楽曲入力時に正式な名称に変換されます"}),(0,l.jsx)(p.oi,{value:B,onChange:function(t){E.tq||xt(t)},onCompositionEnd:function(t){return xt(t)},onInput:function(t){return xt(t)},placeholder:"search artists",onFocus:function(t){T(!0)},icon:B.length>0?(0,l.jsx)(y.WB9,{onClick:function(t){return Zt()}}):""})]}),M?(0,l.jsx)(p.FE,{children:(0,l.jsxs)(l.Fragment,{children:[_?(0,l.jsx)(p.j8,{onClick:function(t){return At()},children:(0,l.jsx)("span",{className:"title",children:"候補にない"})}):"",N.map((function(t,e){return(0,l.jsx)(p.j8,{onClick:function(e){return At(t)},className:(0,A.iv)(O||(O=P(["\n                    --pastel: ",";\n                  "])),Bt[e%Bt.length]),children:(0,l.jsx)("span",{className:"title",children:t.artistName})},"artist-".concat(e))}))]})}):""]}),(0,l.jsxs)("div",{children:[kt?(0,l.jsx)(k,{}):(0,l.jsxs)(l.Fragment,{children:[!X&&(0,l.jsx)("div",{className:Jt,children:"まずは上の欄にアーティスト名を記入してください"}),(0,l.jsx)(p.oi,{value:st,onChange:function(t){E.tq||Dt(t)},onCompositionEnd:function(t){return Dt(t)},onInput:function(t){return Dt(t)},onFocus:function(t){pt(!0)},icon:st.length>0?(0,l.jsx)(y.WB9,{onClick:function(t){return Mt(),void Tt()}}):"",disabled:!X,placeholder:"search song"})]}),vt&&!kt?(0,l.jsx)(p.FE,{children:(0,l.jsxs)(l.Fragment,{children:[bt?(0,l.jsx)(p.j8,{onClick:function(t){return Kt()},children:(0,l.jsx)("span",{className:"title",children:"候補にない"})}):"",ot.map((function(t,e){var n;return(0,l.jsxs)(p.j8,(L(n={className:"avatar",onClick:function(e){return Kt(t)}},"className",(0,A.iv)(C||(C=P(["\n                    --pastel: ",";\n                  "])),Bt[e%Bt.length])),L(n,"children",[t.thumbnail.length>0?(0,l.jsx)("img",{className:"circle",src:t.thumbnail}):"",(0,l.jsx)("span",{className:"title",children:t.song}),(0,l.jsxs)("p",{children:[(0,l.jsx)(S.DLv,{}),t.artist]})]),n),"song-".concat(e))}))]})}):""]})]})};var T=n(1201);const Z=function(){var t=(0,a.y)(),e=t.singMemo,n=t.setMemo;return(0,l.jsx)("div",{children:(0,l.jsx)(T.Z,{value:e,setValue:n})})};var B=n(5255);const J=function(){var t=(0,a.y)(),e=t.singScore,n=t.setScore;return(0,l.jsx)("div",{children:(0,l.jsx)(B.Z,{score:e,setScore:n})})};var U=n(5817);const $=function(){var t=(0,a.y)(),e=t.setProblem,n=t.singProblem;return(0,l.jsx)("div",{children:(0,l.jsx)(U.Z,{value:n,setValue:e})})};var q=n(5871),z=n(8420);function Q(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function V(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return W(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const _=function(){var t=V((0,i.useState)(!1),2),e=t[0],n=t[1],r=V((0,i.useState)(""),2),u=r[0],d=r[1],g=(0,c.b)().api,v=(0,a.y)(),p=v.user,y=v.singDate,b=v.singArtistId,j=v.singArtistName,x=v.singSongName,S=v.singJacketImage,w=v.singKey,N=v.singRate,k=v.singScore,I=v.singProblem,O=v.singMemo,C=v.resetRecordBuilder,A=v.addRecord,E=v.setInitComplete;!function(){var t=(0,a.y)(),e=t.allRecords,n=t.setDate;(0,i.useEffect)((function(){if(e.length>0){var t=e[0];n(t.singDate)}}),[e.length])}();var P=function(){var t,e=(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.post("/api/ohako/setlist/store",{json:{userId:p.id,singDate:y?y.toLocaleDateString("ja-JP"):(new Date).toLocaleDateString("ja-JP"),artistId:b,artistName:j,songName:x,jacketImage:S,singKey:w,rating:N,score:k,memo:O,problems:I.map((function(t){return t.value}))}}).json();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){Q(i,r,o,a,s,"next",t)}function s(t){Q(i,r,o,a,s,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}(),F=(0,s.useQuery)("newSetlistSubmit",P,{enabled:!1,retry:0,onSuccess:function(t){if(!t.status)return console.log(t.message),void setError(t.message);A({id:t.id,singDate:y,artistId:b,artistName:j,songName:x,jacketImage:S,singKey:w,rating:N,score:k,memo:O,problems:I.map((function(t){return t.label})),registDate:(0,z.default)(t.created_at)}),C(),d(""),n(!1)},onError:function(t){console.log(t),d("エラーが発生しました。もう一度送信してください。"),n(!0)},onSettled:function(){E(!0)}}),D=F.refetch,L=F.isLoading;return(0,l.jsx)(q.Z,{isLoading:L,header:"Add a new history",id:"ohakoAddSetlistFormModal",isModalOpen:e,errorMsg:u,SingDateForm:(0,l.jsx)(f,{}),MusicForm:(0,l.jsx)(M,{}),SingKeyForm:(0,l.jsx)(h,{}),RatingForm:(0,l.jsx)(m,{}),ScoreForm:(0,l.jsx)(J,{}),ProblemsForm:(0,l.jsx)($,{}),MemoForm:(0,l.jsx)(Z,{}),submitLabel:"Add",onSubmit:function(t){E(!1),D()}})}}}]);
//# sourceMappingURL=147.js.map