(self.webpackChunk=self.webpackChunk||[]).push([[386],{9386:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>G});var r=n(7757),o=n.n(r),i=n(7294),a=n(7393),s=n(8767),c=n(6106),u=n(2740),l=n(5893);const f=function(){var t=(0,a.y)(),e=t.singDate,n=t.setDate;return(0,l.jsx)(u.Z,{selected:e,onChange:function(t){return n(t)}})};var d=n(7425);const h=function(){var t=(0,a.y)(),e=t.singRate,n=t.setRate;return(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{value:e,onClick:function(t){return n(t)}})})};var m=n(7332);const g=function(t){var e=t.rowId,n=(0,a.y)(),r=n.singKey,o=n.setKey;return(0,l.jsx)("div",{children:(0,l.jsx)(m.Z,{primaryKey:e,value:r,onClick:function(t){return o(t)}})})};var p=n(1538),v=n(3782),y=n(9327),b=n(6554),j=n.n(b);function x(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}var S=function(t){var e=t.mode,n=void 0===e?"search":e,r=t.country,i=void 0===r?"jp":r,a=t.lang,s=void 0===a?"ja_jp":a,c=t.entity,u=t.attribute,l=t.term,f=t.sort,d=void 0===f?"popular":f,h=t.limit,m=void 0===h?200:h,g=t.options,p=void 0===g?{}:g,v=Object.keys(p).map((function(t){return"&".concat(t,"=").concat(p[t])})),y=function(){var t,e=(t=o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j()("https://itunes.apple.com/".concat(n,"?lang=").concat(s,"&entity=").concat(c,"&country=").concat(i).concat("search"==n?"&term=".concat(l,"&attribute=").concat(u):"&sort=".concat(d),"&limit=").concat(m).concat(v));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){x(i,r,o,a,s,"next",t)}function s(t){x(i,r,o,a,s,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return{iTunesAPIfetch:y}},w=n(7516);const N=i.createContext({});function C({baseColor:t,highlightColor:e,width:n,height:r,borderRadius:o,circle:i,direction:a,duration:s,enableAnimation:c=true}){const u={};return"rtl"===a&&(u["--animation-direction"]="reverse"),"number"==typeof s&&(u["--animation-duration"]=`${s}s`),c||(u["--pseudo-element-display"]="none"),"string"!=typeof n&&"number"!=typeof n||(u.width=n),"string"!=typeof r&&"number"!=typeof r||(u.height=r),"string"!=typeof o&&"number"!=typeof o||(u.borderRadius=o),i&&(u.borderRadius="50%"),void 0!==t&&(u["--base-color"]=t),void 0!==e&&(u["--highlight-color"]=e),u}function k({count:t=1,wrapper:e,className:n,containerClassName:r,containerTestId:o,circle:a=!1,style:s,...c}){var u,l;const f=i.useContext(N),d={...c};for(const[t,e]of Object.entries(c))void 0===e&&delete d[t];const h={...f,...d,circle:a},m={...s,...C(h)};let g="react-loading-skeleton";n&&(g+=` ${n}`);const p=null!==(u=h.inline)&&void 0!==u&&u,v=[];for(let e=0;e<t;e++){const t=i.createElement("span",{className:g,style:m,key:e},"‌");p?v.push(t):v.push(i.createElement(i.Fragment,{key:e},t,i.createElement("br",null)))}return i.createElement("span",{className:r,"data-testid":o,"aria-live":"polite","aria-busy":null===(l=h.enableAnimation)||void 0===l||l},e?v.map(((t,n)=>i.createElement(e,{key:n},t))):v)}function I({children:t,...e}){return i.createElement(N.Provider,{value:e},t)}var A=n(8872);const E=function(){function t(e){this._value=NaN,this._seed="string"==typeof e?this.hashCode(e):"number"==typeof e?this.getSafeSeed(e):this.getSafeSeed(t.MIN+Math.floor((t.MAX-t.MIN)*Math.random())),this.reset()}return t.prototype.next=function(e,n){return void 0===e&&(e=0),void 0===n&&(n=1),this.recalculate(),this.map(this._value,t.MIN,t.MAX,e,n)},t.prototype.nextInt=function(e,n){return void 0===e&&(e=10),void 0===n&&(n=100),this.recalculate(),Math.floor(this.map(this._value,t.MIN,t.MAX,e,n+1))},t.prototype.nextString=function(t,e){void 0===t&&(t=16),void 0===e&&(e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");for(var n="";n.length<t;)n+=this.nextChar(e);return n},t.prototype.nextChar=function(t){return void 0===t&&(t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),t.substr(this.nextInt(0,t.length-1),1)},t.prototype.nextArrayItem=function(t){return t[this.nextInt(0,t.length-1)]},t.prototype.nextBoolean=function(){return this.recalculate(),this._value>.5},t.prototype.skip=function(t){for(void 0===t&&(t=1);t-- >0;)this.recalculate()},t.prototype.reset=function(){this._value=this._seed},t.prototype.recalculate=function(){this._value=this.xorshift(this._value)},t.prototype.xorshift=function(t){return t^=t<<13,t^=t>>17,t^=t<<5},t.prototype.map=function(t,e,n,r,o){return(t-e)/(n-e)*(o-r)+r},t.prototype.hashCode=function(t){var e=0;if(t)for(var n=t.length,r=0;r<n;r++)e=(e<<5)-e+t.charCodeAt(r),e|=0,e=this.xorshift(e);return this.getSafeSeed(e)},t.prototype.getSafeSeed=function(t){return 0===t?1:t},t.MIN=-2147483648,t.MAX=2147483647,t}();var O,P,M;function F(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){L(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function L(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const K=function(){var t,e=(0,a.y)(),n=e.singArtistName,r=e.setArtistName,o=e.singArtistId,c=e.setArtistId,u=e.setSongName,f=e.singSongName,d=e.setJacketImage,h=e.setKey,m=e.user,g=(0,p.T)(),b=g.artistLog,j=g.songLog,x=(t=(0,a.y)().allRecords,{getPreviousKey:function(e,n){var r=t.filter((function(t){return e==t.songName&&n==t.artistId}));return r.sort((function(t,e){return t[singDate]>e[singDate]?1:-1})),r.length>0?r[0].singKey:0}}).getPreviousKey,N=R((0,i.useState)([]),2),C=N[0],D=N[1],_=R((0,i.useState)(!1),2),K=_[0],B=_[1],Z=R((0,i.useState)(""),2),J=Z[0],U=Z[1],X=R((0,i.useState)(!1),2),q=X[0],z=X[1],Q=R((0,i.useState)(""),2),V=Q[0],W=Q[1],$=R((0,i.useState)(!1),2),G=$[0],H=$[1],Y=R((0,i.useState)(!1),2),tt=Y[0],et=Y[1],nt=R((0,i.useState)(!1),2),rt=nt[0],ot=nt[1],it=R((0,i.useState)([]),2),at=it[0],st=it[1],ct=R((0,i.useState)([]),2),ut=ct[0],lt=ct[1],ft=R((0,i.useState)(""),2),dt=ft[0],ht=ft[1],mt=R((0,i.useState)(!1),2),gt=mt[0],pt=mt[1],vt=R((0,i.useState)([]),2),yt=vt[0],bt=vt[1],jt=R((0,i.useState)(!1),2),xt=jt[0],St=jt[1],wt=R((0,i.useState)(!1),2),Nt=wt[0],Ct=wt[1],kt=R((0,i.useState)(!1),2),It=kt[0],At=kt[1];(0,i.useEffect)((function(){!rt&&f.length>0&&n.length>0&&(ot(!0),ht(f))}),[]),(0,i.useEffect)((function(){b.length>0&&D(b)}),[b,K]);var Et=function(){q||B(!0)},Ot=function(t){return C.filter((function(e){return-1!==e.artistName.toLowerCase().indexOf(t.toLowerCase())}))},Pt=function(t){console.log(t.data),At(!1),D(Ot(t.data))},Mt=S({mode:"lookup",entity:"song",attribute:"songTerm",options:{id:o}}).iTunesAPIfetch,Ft=(0,s.useQuery)("songSearch",Mt,{enabled:!1,retry:0,onSuccess:function(t){var e=[];t.results.map((function(t){var n=t.wrapperType,r=t.trackName,o=t.artistName,i=t.artworkUrl30;"track"===n&&e.push({song:r,artist:o,thumbnail:i})})),bt(e),lt(e)},onError:function(t){return console.log(t)}}),Dt=Ft.refetch,Tt=Ft.isLoading,Lt=function(t){var e,n=(e=t.artistId,j.filter((function(t){return t.artistId==e})));st(n),St(!0),lt(n)},Rt=function(){St(!0)};(0,i.useEffect)((function(){lt(at)}),[xt]);var _t=function(){D([])},Kt=function(t){var e=t.artistId,n=t.artistName;c(e),r(n)},Bt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NotFound";if(_t(),z(!0),B(!1),"NotFound"!==t)U(t.artistName),Kt(t),Lt(t);else{var e=-1*Math.floor(new E(m.id+"-"+J).next(2,99999));et(!0),Kt({artistId:e,artistName:J})}ot(!0)};(0,i.useEffect)((function(){o>-1&&Dt()}),[o]);var Zt=S({entity:"musicArtist",attribute:"artistTerm",term:V}).iTunesAPIfetch,Jt=(0,s.useQuery)("artistSearch",Zt,{enabled:!1,retry:0,onSuccess:function(t){var e=[];t.results.map((function(t){var n=t.artistName,r=t.artistId;e.push({artistName:n,artistId:r})})),D(e),H(!0)},onError:function(t){return console.log(t)}}).refetch,Ut=!q&&0===C.length&&J.length>0;(0,i.useEffect)((function(){Ut&&W(encodeURIComponent(J))}),[C]),(0,i.useEffect)((function(){V.length>0&&Jt()}),[V]);var Xt=function(t){var e=t.target.value;ht(e),e.length>0&&lt(function(t){return ut.filter((function(e){return-1!==e.song.toLowerCase().indexOf(t.toLowerCase())}))}(e))},qt=function(){lt([])},zt=function(t){var e=t.song,n=t.artist,o=t.thumbnail,i=t.key;u(e),r(n),d(o),h(i)},Qt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NotFound";qt(),pt(!0),St(!1);var e=0;"NotFound"!==t?(ht(t.song),G||(e=x(t.song,o)),zt(T(T({},t),{},{key:e}))):(G||(e=x(dt,o)),zt({song:dt,artist:n,thumbnail:"",key:e}))};(0,i.useEffect)((function(){!gt&&0===ut.length&&dt.length>0&&o>0&&(Ct(!0),lt(yt))}),[ut]);var Vt=function(){lt([]),ht(""),pt(!1),Ct(!1),St(!1)};(0,i.useEffect)((function(){0===J.length&&0===n.length&&ot(!1)}),[J]);var Wt=function(){u(""),d("")},$t=function(){D([]),U(""),z(!1),W(""),B(!1),H(!1),Vt(),r(""),c(-1),Wt()},Gt=["rgba(227, 163, 171, .3)","rgba(202, 226, 230, .3)","rgba(204, 223, 181, .3)","rgba(194, 199, 225, .3)"],Ht=(0,A.iv)(O||(O=F(["\n    text-align: right;\n    font-size: 0.7rem;\n    font-family: 'TsukushiBMaruGothic';\n    color: antiquewhite;\n    padding-top: 1em;\n  "])));return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{children:Tt?(0,l.jsx)(I,{baseColor:"#ebebeb10",highlightColor:"#f5f5f580",borderRadius:"30px",height:"4rem",children:(0,l.jsx)(k,{})}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:Ht,children:"ローマ字名は楽曲入力時に正式な名称に変換されます"}),(0,l.jsx)(v.oi,{value:J,onChange:function(t){return function(t){var e=t.target.value;U(e),e.length>0&&!It&&D(Ot(e))}(t)},onCompositionStart:function(){return At(!0)},onCompositionEnd:function(t){return Pt(t)},placeholder:"search artists",onFocus:function(){return Et()},onTouchEnd:function(){return Et()},icon:J.length>0&&(0,l.jsx)(y.WB9,{onClick:function(t){return $t()}})}),K&&(0,l.jsx)(v.FE,{children:(0,l.jsxs)(l.Fragment,{children:[G&&(0,l.jsx)(v.j8,{onClick:function(t){return Bt()},children:(0,l.jsx)("span",{className:"title",children:"候補にない"})}),C.map((function(t,e){return(0,l.jsx)(v.j8,{onClick:function(e){return Bt(t)},className:(0,A.iv)(P||(P=F(["\n                        --pastel: ",";\n                      "])),Gt[e%Gt.length]),children:(0,l.jsx)("span",{className:"title",children:t.artistName})},"artist-".concat(e))}))]})}),!rt&&(0,l.jsx)("div",{className:Ht,children:"まずは上の欄にアーティスト名を記入してください"}),(0,l.jsx)(v.oi,{value:dt,onChange:function(t){return Xt(t)},onFocus:function(){return Rt()},onTouchEnd:function(){return Rt()},onCompositionEnd:function(){tt&&Qt()},icon:dt.length>0&&(0,l.jsx)(y.WB9,{onClick:function(t){return Vt(),void Wt()}}),disabled:!rt,placeholder:"search song"}),xt&&!Tt&&(0,l.jsx)(v.FE,{children:(0,l.jsxs)(l.Fragment,{children:[Nt&&(0,l.jsx)(v.j8,{onClick:function(t){return Qt()},children:(0,l.jsx)("span",{className:"title",children:"候補にない"})}),ut.map((function(t,e){var n;return(0,l.jsxs)(v.j8,(L(n={className:"avatar",onClick:function(e){return Qt(t)}},"className",(0,A.iv)(M||(M=F(["\n                        --pastel: ",";\n                      "])),Gt[e%Gt.length])),L(n,"children",[t.thumbnail.length>0&&(0,l.jsx)("img",{className:"circle",src:t.thumbnail}),(0,l.jsx)("span",{className:"title",children:t.song}),(0,l.jsxs)("p",{children:[(0,l.jsx)(w.DLv,{}),t.artist]})]),n),"song-".concat(e))}))]})})]})})})};var B=n(1201);const Z=function(){var t=(0,a.y)(),e=t.singMemo,n=t.setMemo;return(0,l.jsx)("div",{children:(0,l.jsx)(B.Z,{value:e,setValue:n})})};var J=n(5255);const U=function(){var t=(0,a.y)(),e=t.singScore,n=t.setScore;return(0,l.jsx)("div",{children:(0,l.jsx)(J.Z,{score:e,setScore:n})})};var X=n(5817);const q=function(){var t=(0,a.y)(),e=t.setProblem,n=t.singProblem;return(0,l.jsx)("div",{children:(0,l.jsx)(X.Z,{value:n,setValue:e})})};var z=n(5871),Q=n(8420);function V(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function W(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const G=function(){var t=W((0,i.useState)(!1),2),e=t[0],n=t[1],r=W((0,i.useState)(""),2),u=r[0],d=r[1],m=(0,c.b)().api,p=(0,a.y)(),v=p.user,y=p.singDate,b=p.singArtistId,j=p.singArtistName,x=p.singSongName,S=p.singJacketImage,w=p.singKey,N=p.singRate,C=p.singScore,k=p.singProblem,I=p.singMemo,A=p.resetRecordBuilder,E=p.addRecord,O=p.setInitComplete;!function(){var t=(0,a.y)(),e=t.allRecords,n=t.setDate;(0,i.useEffect)((function(){if(e.length>0){var t=e[0];n(t.singDate)}}),[e.length])}(),(0,i.useEffect)((function(){console.log(e)}),[e]),(0,i.useEffect)((function(){console.log(j)}),[j]);var P=function(){var t,e=(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.post("/api/ohako/setlist/store",{json:{userId:v.id,singDate:y?y.toLocaleDateString("ja-JP"):(new Date).toLocaleDateString("ja-JP"),artistId:b,artistName:j,songName:x,jacketImage:S,singKey:w,rating:N,score:C,memo:I,problems:k.map((function(t){return t.id}))}}).json();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){V(i,r,o,a,s,"next",t)}function s(t){V(i,r,o,a,s,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}(),M=(0,s.useQuery)("newSetlistSubmit",P,{enabled:!1,retry:0,onSuccess:function(t){if(!t.status)return console.log(t.message),void setError(t.message);E({id:t.id,singDate:y,artistId:b,artistName:j,songName:x,jacketImage:S,singKey:w,rating:N,score:C,memo:I,problemsData:k,problems:k.map((function(t){return t.content})),registDate:(0,Q.default)(t.created_at)}),A(),d(""),n(!1)},onError:function(t){console.log(t),d("エラーが発生しました。もう一度送信してください。"),n(!0)},onSettled:function(){O(!0)}}),F=M.refetch,D=M.isLoading;return(0,l.jsx)(z.Z,{isLoading:D,header:"Add a new history",id:"ohakoAddSetlistFormModal",isModalOpen:e,setIsModalOpen:n,errorMsg:u,SingDateForm:(0,l.jsx)(f,{}),MusicForm:(0,l.jsx)(K,{}),SingKeyForm:(0,l.jsx)(g,{}),RatingForm:(0,l.jsx)(h,{}),ScoreForm:(0,l.jsx)(U,{}),ProblemsForm:(0,l.jsx)(q,{}),MemoForm:(0,l.jsx)(Z,{}),submitLabel:"Add",onSubmit:function(t){O(!1),F()}})}},6554:function(t,e){var n,r,o;r=[e,t],n=function(t,e){"use strict";var n={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function r(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function o(t){try{delete window[t]}catch(e){window[t]=void 0}}function i(t){var e=document.getElementById(t);e&&document.getElementsByTagName("head")[0].removeChild(e)}function a(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=t,s=e.timeout||n.timeout,c=e.jsonpCallback||n.jsonpCallback,u=void 0;return new Promise((function(n,l){var f=e.jsonpCallbackFunction||r(),d=c+"_"+f;window[f]=function(t){n({ok:!0,json:function(){return Promise.resolve(t)}}),u&&clearTimeout(u),i(d),o(f)},a+=-1===a.indexOf("?")?"?":"&";var h=document.createElement("script");h.setAttribute("src",""+a+c+"="+f),e.charset&&h.setAttribute("charset",e.charset),e.nonce&&h.setAttribute("nonce",e.nonce),e.referrerPolicy&&h.setAttribute("referrerPolicy",e.referrerPolicy),h.id=d,document.getElementsByTagName("head")[0].appendChild(h),u=setTimeout((function(){l(new Error("JSONP request to "+t+" timed out")),o(f),i(d),window[f]=function(){o(f)}}),s),h.onerror=function(){l(new Error("JSONP request to "+t+" failed")),o(f),i(d),u&&clearTimeout(u)}}))}e.exports=a},void 0===(o="function"==typeof n?n.apply(e,r):n)||(t.exports=o)}}]);
//# sourceMappingURL=386.js.map