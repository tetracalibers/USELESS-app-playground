(self.webpackChunk=self.webpackChunk||[]).push([[386],{9386:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>$});var r=n(7757),o=n.n(r),i=n(7294),a=n(7393),s=n(8767),c=n(6106),u=n(2740),l=n(5893);const f=function(){var t=(0,a.y)(),e=t.singDate,n=t.setDate;return(0,l.jsx)(u.Z,{selected:e,onChange:function(t){return n(t)}})};var d=n(7425);const h=function(){var t=(0,a.y)(),e=t.singRate,n=t.setRate;return(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{value:e,onClick:function(t){return n(t)}})})};var m=n(7332);const p=function(t){var e=t.rowId,n=(0,a.y)(),r=n.singKey,o=n.setKey;return(0,l.jsx)("div",{children:(0,l.jsx)(m.Z,{primaryKey:e,value:r,onClick:function(t){return o(t)}})})};var g=n(1538),v=n(3782),y=n(9327),b=n(6554),j=n.n(b);function x(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}var S=function(t){var e=t.mode,n=void 0===e?"search":e,r=t.country,i=void 0===r?"jp":r,a=t.lang,s=void 0===a?"ja_jp":a,c=t.entity,u=t.attribute,l=t.term,f=t.sort,d=void 0===f?"popular":f,h=t.limit,m=void 0===h?200:h,p=t.options,g=void 0===p?{}:p,v=Object.keys(g).map((function(t){return"&".concat(t,"=").concat(g[t])})),y=function(){var t,e=(t=o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j()("https://itunes.apple.com/".concat(n,"?lang=").concat(s,"&entity=").concat(c,"&country=").concat(i).concat("search"==n?"&term=".concat(l,"&attribute=").concat(u):"&sort=".concat(d),"&limit=").concat(m).concat(v));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){x(i,r,o,a,s,"next",t)}function s(t){x(i,r,o,a,s,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return{iTunesAPIfetch:y}},w=n(7516);const N=i.createContext({});function k({baseColor:t,highlightColor:e,width:n,height:r,borderRadius:o,circle:i,direction:a,duration:s,enableAnimation:c=true}){const u={};return"rtl"===a&&(u["--animation-direction"]="reverse"),"number"==typeof s&&(u["--animation-duration"]=`${s}s`),c||(u["--pseudo-element-display"]="none"),"string"!=typeof n&&"number"!=typeof n||(u.width=n),"string"!=typeof r&&"number"!=typeof r||(u.height=r),"string"!=typeof o&&"number"!=typeof o||(u.borderRadius=o),i&&(u.borderRadius="50%"),void 0!==t&&(u["--base-color"]=t),void 0!==e&&(u["--highlight-color"]=e),u}function C({count:t=1,wrapper:e,className:n,containerClassName:r,containerTestId:o,circle:a=!1,style:s,...c}){var u,l;const f=i.useContext(N),d={...c};for(const[t,e]of Object.entries(c))void 0===e&&delete d[t];const h={...f,...d,circle:a},m={...s,...k(h)};let p="react-loading-skeleton";n&&(p+=` ${n}`);const g=null!==(u=h.inline)&&void 0!==u&&u,v=[];for(let e=0;e<t;e++){const t=i.createElement("span",{className:p,style:m,key:e},"‌");g?v.push(t):v.push(i.createElement(i.Fragment,{key:e},t,i.createElement("br",null)))}return i.createElement("span",{className:r,"data-testid":o,"aria-live":"polite","aria-busy":null===(l=h.enableAnimation)||void 0===l||l},e?v.map(((t,n)=>i.createElement(e,{key:n},t))):v)}var I=n(8872);const A=function(){function t(e){this._value=NaN,this._seed="string"==typeof e?this.hashCode(e):"number"==typeof e?this.getSafeSeed(e):this.getSafeSeed(t.MIN+Math.floor((t.MAX-t.MIN)*Math.random())),this.reset()}return t.prototype.next=function(e,n){return void 0===e&&(e=0),void 0===n&&(n=1),this.recalculate(),this.map(this._value,t.MIN,t.MAX,e,n)},t.prototype.nextInt=function(e,n){return void 0===e&&(e=10),void 0===n&&(n=100),this.recalculate(),Math.floor(this.map(this._value,t.MIN,t.MAX,e,n+1))},t.prototype.nextString=function(t,e){void 0===t&&(t=16),void 0===e&&(e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");for(var n="";n.length<t;)n+=this.nextChar(e);return n},t.prototype.nextChar=function(t){return void 0===t&&(t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),t.substr(this.nextInt(0,t.length-1),1)},t.prototype.nextArrayItem=function(t){return t[this.nextInt(0,t.length-1)]},t.prototype.nextBoolean=function(){return this.recalculate(),this._value>.5},t.prototype.skip=function(t){for(void 0===t&&(t=1);t-- >0;)this.recalculate()},t.prototype.reset=function(){this._value=this._seed},t.prototype.recalculate=function(){this._value=this.xorshift(this._value)},t.prototype.xorshift=function(t){return t^=t<<13,t^=t>>17,t^=t<<5},t.prototype.map=function(t,e,n,r,o){return(t-e)/(n-e)*(o-r)+r},t.prototype.hashCode=function(t){var e=0;if(t)for(var n=t.length,r=0;r<n;r++)e=(e<<5)-e+t.charCodeAt(r),e|=0,e=this.xorshift(e);return this.getSafeSeed(e)},t.prototype.getSafeSeed=function(t){return 0===t?1:t},t.MIN=-2147483648,t.MAX=2147483647,t}();var E,O,P;function M(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){T(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function L(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return R(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const _=function(){var t,e=(0,a.y)(),n=e.singArtistName,r=e.setArtistName,o=e.singArtistId,c=e.setArtistId,u=e.setSongName,f=e.singSongName,d=e.setJacketImage,h=e.setKey,m=e.user,p=(0,g.T)(),b=p.artistLog,j=p.songLog,x=(t=(0,a.y)().allRecords,{getPreviousKey:function(e,n){var r=t.filter((function(t){return e==t.songName&&n==t.artistId}));return r.sort((function(t,e){return t[singDate]>e[singDate]?1:-1})),r.length>0?r[0].singKey:0}}).getPreviousKey,N=L((0,i.useState)([]),2),k=N[0],F=N[1],R=L((0,i.useState)(!1),2),_=R[0],K=R[1],B=L((0,i.useState)(""),2),Z=B[0],J=B[1],U=L((0,i.useState)(!1),2),X=U[0],q=U[1],z=L((0,i.useState)(""),2),Q=z[0],V=z[1],W=L((0,i.useState)(!1),2),$=W[0],G=W[1],H=L((0,i.useState)(!1),2),Y=H[0],tt=H[1],et=L((0,i.useState)(!1),2),nt=et[0],rt=et[1],ot=L((0,i.useState)([]),2),it=ot[0],at=ot[1],st=L((0,i.useState)([]),2),ct=st[0],ut=st[1],lt=L((0,i.useState)(""),2),ft=lt[0],dt=lt[1],ht=L((0,i.useState)(!1),2),mt=ht[0],pt=ht[1],gt=L((0,i.useState)([]),2),vt=gt[0],yt=gt[1],bt=L((0,i.useState)(!1),2),jt=bt[0],xt=bt[1],St=L((0,i.useState)(!1),2),wt=St[0],Nt=St[1],kt=L((0,i.useState)(!1),2),Ct=kt[0],It=kt[1];(0,i.useEffect)((function(){!nt&&f.length>0&&n.length>0&&(rt(!0),dt(f))}),[]),(0,i.useEffect)((function(){b.length>0&&F(b)}),[b,_]);var At=function(){X||K(!0)},Et=function(t){return k.filter((function(e){return-1!==e.artistName.toLowerCase().indexOf(t.toLowerCase())}))},Ot=function(t){console.log(t.data),It(!1),F(Et(t.data))},Pt=S({mode:"lookup",entity:"song",attribute:"songTerm",options:{id:o}}).iTunesAPIfetch,Mt=(0,s.useQuery)("songSearch",Pt,{enabled:!1,retry:0,onSuccess:function(t){var e=[];t.results.map((function(t){var n=t.wrapperType,r=t.trackName,o=t.artistName,i=t.artworkUrl30;"track"===n&&e.push({song:r,artist:o,thumbnail:i})})),yt(e),ut(e)},onError:function(t){return console.log(t)}}),Ft=Mt.refetch,Dt=Mt.isLoading,Tt=function(t){var e,n=(e=t.artistId,j.filter((function(t){return t.artistId==e})));at(n),xt(!0),ut(n)},Lt=function(){xt(!0)};(0,i.useEffect)((function(){ut(it)}),[jt]);var Rt=function(){F([])},_t=function(t){var e=t.artistId,n=t.artistName;c(e),r(n)},Kt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NotFound";if(Rt(),q(!0),K(!1),"NotFound"!==t)J(t.artistName),_t(t),Tt(t);else{var e=-1*Math.floor(new A(m.id+"-"+Z).next(2,99999));tt(!0),_t({artistId:e,artistName:Z})}rt(!0)};(0,i.useEffect)((function(){o>-1&&Ft()}),[o]);var Bt=S({entity:"musicArtist",attribute:"artistTerm",term:Q}).iTunesAPIfetch,Zt=(0,s.useQuery)("artistSearch",Bt,{enabled:!1,retry:0,onSuccess:function(t){var e=[];t.results.map((function(t){var n=t.artistName,r=t.artistId;e.push({artistName:n,artistId:r})})),F(e),G(!0)},onError:function(t){return console.log(t)}}).refetch,Jt=!X&&0===k.length&&Z.length>0;(0,i.useEffect)((function(){Jt&&V(encodeURIComponent(Z))}),[k]),(0,i.useEffect)((function(){Q.length>0&&Zt()}),[Q]);var Ut=function(t){var e=t.target.value;dt(e),e.length>0&&ut(function(t){return ct.filter((function(e){return-1!==e.song.toLowerCase().indexOf(t.toLowerCase())}))}(e))},Xt=function(){ut([])},qt=function(t){var e=t.song,n=t.artist,o=t.thumbnail,i=t.key;u(e),r(n),d(o),h(i)},zt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NotFound";Xt(),pt(!0),xt(!1);var e=0;"NotFound"!==t?(dt(t.song),$||(e=x(t.song,o)),qt(D(D({},t),{},{key:e}))):($||(e=x(ft,o)),qt({song:ft,artist:n,thumbnail:"",key:e}))};(0,i.useEffect)((function(){!mt&&0===ct.length&&ft.length>0&&o>0&&(Nt(!0),ut(vt))}),[ct]);var Qt=function(){ut([]),dt(""),pt(!1),Nt(!1),xt(!1)};(0,i.useEffect)((function(){0===Z.length&&0===n.length&&rt(!1)}),[Z]);var Vt=function(){u(""),d("")},Wt=function(){F([]),J(""),q(!1),V(""),K(!1),G(!1),Qt(),r(""),c(-1),Vt()},$t=["rgba(227, 163, 171, .3)","rgba(202, 226, 230, .3)","rgba(204, 223, 181, .3)","rgba(194, 199, 225, .3)"],Gt=(0,I.iv)(E||(E=M(["\n    text-align: right;\n    font-size: 0.7rem;\n    font-family: 'TsukushiBMaruGothic';\n    color: antiquewhite;\n    padding-top: 1em;\n  "])));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{children:[Dt?(0,l.jsx)(C,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:Gt,children:"ローマ字名は楽曲入力時に正式な名称に変換されます"}),(0,l.jsx)(v.oi,{value:Z,onChange:function(t){return function(t){var e=t.target.value;J(e),e.length>0&&!Ct&&F(Et(e))}(t)},onCompositionStart:function(){return It(!0)},onCompositionEnd:function(t){return Ot(t)},placeholder:"search artists",onFocus:function(){return At()},onTouchEnd:function(){return At()},icon:Z.length>0?(0,l.jsx)(y.WB9,{onClick:function(t){return Wt()}}):""})]}),_?(0,l.jsx)(v.FE,{children:(0,l.jsxs)(l.Fragment,{children:[$?(0,l.jsx)(v.j8,{onClick:function(t){return Kt()},children:(0,l.jsx)("span",{className:"title",children:"候補にない"})}):"",k.map((function(t,e){return(0,l.jsx)(v.j8,{onClick:function(e){return Kt(t)},className:(0,I.iv)(O||(O=M(["\n                    --pastel: ",";\n                  "])),$t[e%$t.length]),children:(0,l.jsx)("span",{className:"title",children:t.artistName})},"artist-".concat(e))}))]})}):""]}),(0,l.jsxs)("div",{children:[Dt?(0,l.jsx)(C,{}):(0,l.jsxs)(l.Fragment,{children:[!nt&&(0,l.jsx)("div",{className:Gt,children:"まずは上の欄にアーティスト名を記入してください"}),(0,l.jsx)(v.oi,{value:ft,onChange:function(t){return Ut(t)},onFocus:function(){return Lt()},onTouchEnd:function(){return Lt()},onCompositionEnd:function(){Y&&zt()},icon:ft.length>0?(0,l.jsx)(y.WB9,{onClick:function(t){return Qt(),void Vt()}}):"",disabled:!nt,placeholder:"search song"})]}),jt&&!Dt?(0,l.jsx)(v.FE,{children:(0,l.jsxs)(l.Fragment,{children:[wt?(0,l.jsx)(v.j8,{onClick:function(t){return zt()},children:(0,l.jsx)("span",{className:"title",children:"候補にない"})}):"",ct.map((function(t,e){var n;return(0,l.jsxs)(v.j8,(T(n={className:"avatar",onClick:function(e){return zt(t)}},"className",(0,I.iv)(P||(P=M(["\n                    --pastel: ",";\n                  "])),$t[e%$t.length])),T(n,"children",[t.thumbnail.length>0?(0,l.jsx)("img",{className:"circle",src:t.thumbnail}):"",(0,l.jsx)("span",{className:"title",children:t.song}),(0,l.jsxs)("p",{children:[(0,l.jsx)(w.DLv,{}),t.artist]})]),n),"song-".concat(e))}))]})}):""]})]})};var K=n(1201);const B=function(){var t=(0,a.y)(),e=t.singMemo,n=t.setMemo;return(0,l.jsx)("div",{children:(0,l.jsx)(K.Z,{value:e,setValue:n})})};var Z=n(5255);const J=function(){var t=(0,a.y)(),e=t.singScore,n=t.setScore;return(0,l.jsx)("div",{children:(0,l.jsx)(Z.Z,{score:e,setScore:n})})};var U=n(5817);const X=function(){var t=(0,a.y)(),e=t.setProblem,n=t.singProblem;return(0,l.jsx)("div",{children:(0,l.jsx)(U.Z,{value:n,setValue:e})})};var q=n(5871),z=n(8420);function Q(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function V(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return W(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const $=function(){var t=V((0,i.useState)(!1),2),e=t[0],n=t[1],r=V((0,i.useState)(""),2),u=r[0],d=r[1],m=(0,c.b)().api,g=(0,a.y)(),v=g.user,y=g.singDate,b=g.singArtistId,j=g.singArtistName,x=g.singSongName,S=g.singJacketImage,w=g.singKey,N=g.singRate,k=g.singScore,C=g.singProblem,I=g.singMemo,A=g.resetRecordBuilder,E=g.addRecord,O=g.setInitComplete;!function(){var t=(0,a.y)(),e=t.allRecords,n=t.setDate;(0,i.useEffect)((function(){if(e.length>0){var t=e[0];n(t.singDate)}}),[e.length])}();var P=function(){var t,e=(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.post("/api/ohako/setlist/store",{json:{userId:v.id,singDate:y?y.toLocaleDateString("ja-JP"):(new Date).toLocaleDateString("ja-JP"),artistId:b,artistName:j,songName:x,jacketImage:S,singKey:w,rating:N,score:k,memo:I,problems:C.map((function(t){return t.id}))}}).json();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){Q(i,r,o,a,s,"next",t)}function s(t){Q(i,r,o,a,s,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}(),M=(0,s.useQuery)("newSetlistSubmit",P,{enabled:!1,retry:0,onSuccess:function(t){if(!t.status)return console.log(t.message),void setError(t.message);E({id:t.id,singDate:y,artistId:b,artistName:j,songName:x,jacketImage:S,singKey:w,rating:N,score:k,memo:I,problemsData:C,problems:C.map((function(t){return t.content})),registDate:(0,z.default)(t.created_at)}),A(),d(""),n(!1)},onError:function(t){console.log(t),d("エラーが発生しました。もう一度送信してください。"),n(!0)},onSettled:function(){O(!0)}}),F=M.refetch,D=M.isLoading;return(0,l.jsx)(q.Z,{isLoading:D,header:"Add a new history",id:"ohakoAddSetlistFormModal",isModalOpen:e,errorMsg:u,SingDateForm:(0,l.jsx)(f,{}),MusicForm:(0,l.jsx)(_,{}),SingKeyForm:(0,l.jsx)(p,{}),RatingForm:(0,l.jsx)(h,{}),ScoreForm:(0,l.jsx)(J,{}),ProblemsForm:(0,l.jsx)(X,{}),MemoForm:(0,l.jsx)(B,{}),submitLabel:"Add",onSubmit:function(t){O(!1),F()}})}},6554:function(t,e){var n,r,o;r=[e,t],n=function(t,e){"use strict";var n={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function r(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function o(t){try{delete window[t]}catch(e){window[t]=void 0}}function i(t){var e=document.getElementById(t);e&&document.getElementsByTagName("head")[0].removeChild(e)}function a(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=t,s=e.timeout||n.timeout,c=e.jsonpCallback||n.jsonpCallback,u=void 0;return new Promise((function(n,l){var f=e.jsonpCallbackFunction||r(),d=c+"_"+f;window[f]=function(t){n({ok:!0,json:function(){return Promise.resolve(t)}}),u&&clearTimeout(u),i(d),o(f)},a+=-1===a.indexOf("?")?"?":"&";var h=document.createElement("script");h.setAttribute("src",""+a+c+"="+f),e.charset&&h.setAttribute("charset",e.charset),e.nonce&&h.setAttribute("nonce",e.nonce),e.referrerPolicy&&h.setAttribute("referrerPolicy",e.referrerPolicy),h.id=d,document.getElementsByTagName("head")[0].appendChild(h),u=setTimeout((function(){l(new Error("JSONP request to "+t+" timed out")),o(f),i(d),window[f]=function(){o(f)}}),s),h.onerror=function(){l(new Error("JSONP request to "+t+" failed")),o(f),i(d),u&&clearTimeout(u)}}))}e.exports=a},void 0===(o="function"==typeof n?n.apply(e,r):n)||(t.exports=o)}}]);
//# sourceMappingURL=386.js.map