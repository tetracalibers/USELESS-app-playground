(self.webpackChunk=self.webpackChunk||[]).push([[386],{9386:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>et});var r=n(7757),o=n.n(r),i=n(7294),a=n(7393),s=n(1531),c=n(8767),u=n(6106),l=n(2740),f=n(5893);const d=function(){var t=(0,s.s)(),e=t.addTmpRecord,n=t.writeAddTmpData,r=e.singDate;return(0,f.jsx)(l.Z,{selected:r,onChange:function(t){return n("singDate",t)}})};var p=n(7425);const h=function(){var t=(0,s.s)(),e=t.addTmpRecord,n=t.writeAddTmpData,r=e.rating;return(0,f.jsx)("div",{children:(0,f.jsx)(p.Z,{value:r,onClick:function(t){return n("rating",t)}})})};var m=n(7332);const v=function(t){var e=t.rowId,n=(0,s.s)(),r=n.addTmpRecord,o=n.writeAddTmpData,i=r.singKey;return(0,f.jsx)("div",{children:(0,f.jsx)(m.Z,{primaryKey:e,value:i,onClick:function(t){return o("singKey",t)}})})};var g=n(1538),y=n(3782),b=n(9327),j=n(6554),x=n.n(j);function w(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}var S=function(t){var e=t.mode,n=void 0===e?"search":e,r=t.country,i=void 0===r?"jp":r,a=t.lang,s=void 0===a?"ja_jp":a,c=t.entity,u=t.attribute,l=t.term,f=t.sort,d=void 0===f?"popular":f,p=t.limit,h=void 0===p?200:p,m=t.options,v=void 0===m?{}:m,g=Object.keys(v).map((function(t){return"&".concat(t,"=").concat(v[t])})),y=function(){var t,e=(t=o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x()("https://itunes.apple.com/".concat(n,"?lang=").concat(s,"&entity=").concat(c,"&country=").concat(i).concat("search"==n?"&term=".concat(l,"&attribute=").concat(u):"&sort=".concat(d),"&limit=").concat(h).concat(g));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){w(i,r,o,a,s,"next",t)}function s(t){w(i,r,o,a,s,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return{iTunesAPIfetch:y}},O=n(7516);const N=i.createContext({});function C({baseColor:t,highlightColor:e,width:n,height:r,borderRadius:o,circle:i,direction:a,duration:s,enableAnimation:c=true}){const u={};return"rtl"===a&&(u["--animation-direction"]="reverse"),"number"==typeof s&&(u["--animation-duration"]=`${s}s`),c||(u["--pseudo-element-display"]="none"),"string"!=typeof n&&"number"!=typeof n||(u.width=n),"string"!=typeof r&&"number"!=typeof r||(u.height=r),"string"!=typeof o&&"number"!=typeof o||(u.borderRadius=o),i&&(u.borderRadius="50%"),void 0!==t&&(u["--base-color"]=t),void 0!==e&&(u["--highlight-color"]=e),u}function I({count:t=1,wrapper:e,className:n,containerClassName:r,containerTestId:o,circle:a=!1,style:s,...c}){var u,l;const f=i.useContext(N),d={...c};for(const[t,e]of Object.entries(c))void 0===e&&delete d[t];const p={...f,...d,circle:a},h={...s,...C(p)};let m="react-loading-skeleton";n&&(m+=` ${n}`);const v=null!==(u=p.inline)&&void 0!==u&&u,g=[];for(let e=0;e<t;e++){const t=i.createElement("span",{className:m,style:h,key:e},"‌");v?g.push(t):g.push(i.createElement(i.Fragment,{key:e},t,i.createElement("br",null)))}return i.createElement("span",{className:r,"data-testid":o,"aria-live":"polite","aria-busy":null===(l=p.enableAnimation)||void 0===l||l},e?g.map(((t,n)=>i.createElement(e,{key:n},t))):g)}function k({children:t,...e}){return i.createElement(N.Provider,{value:e},t)}var A=n(8872);const P=function(){function t(e){this._value=NaN,this._seed="string"==typeof e?this.hashCode(e):"number"==typeof e?this.getSafeSeed(e):this.getSafeSeed(t.MIN+Math.floor((t.MAX-t.MIN)*Math.random())),this.reset()}return t.prototype.next=function(e,n){return void 0===e&&(e=0),void 0===n&&(n=1),this.recalculate(),this.map(this._value,t.MIN,t.MAX,e,n)},t.prototype.nextInt=function(e,n){return void 0===e&&(e=10),void 0===n&&(n=100),this.recalculate(),Math.floor(this.map(this._value,t.MIN,t.MAX,e,n+1))},t.prototype.nextString=function(t,e){void 0===t&&(t=16),void 0===e&&(e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");for(var n="";n.length<t;)n+=this.nextChar(e);return n},t.prototype.nextChar=function(t){return void 0===t&&(t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),t.substr(this.nextInt(0,t.length-1),1)},t.prototype.nextArrayItem=function(t){return t[this.nextInt(0,t.length-1)]},t.prototype.nextBoolean=function(){return this.recalculate(),this._value>.5},t.prototype.skip=function(t){for(void 0===t&&(t=1);t-- >0;)this.recalculate()},t.prototype.reset=function(){this._value=this._seed},t.prototype.recalculate=function(){this._value=this.xorshift(this._value)},t.prototype.xorshift=function(t){return t^=t<<13,t^=t>>17,t^=t<<5},t.prototype.map=function(t,e,n,r,o){return(t-e)/(n-e)*(o-r)+r},t.prototype.hashCode=function(t){var e=0;if(t)for(var n=t.length,r=0;r<n;r++)e=(e<<5)-e+t.charCodeAt(r),e|=0,e=this.xorshift(e);return this.getSafeSeed(e)},t.prototype.getSafeSeed=function(t){return 0===t?1:t},t.MIN=-2147483648,t.MAX=2147483647,t}();var E,D,T;function M(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){L(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function L(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const B=function(){var t,e=(0,a.y)().user,n=(0,s.s)(),r=n.addTmpRecord,o=n.setAddTmpRecord,u=(0,g.T)(),l=u.artistLog,d=u.songLog,p=(t=(0,a.y)().allRecords,{getPreviousKey:function(e,n){var r=t.filter((function(t){return e==t.songName&&n==t.artistId}));return r.sort((function(t,e){return t[singDate]>e[singDate]?1:-1})),r.length>0?r[0].singKey:0}}).getPreviousKey,h=_((0,i.useState)([]),2),m=h[0],v=h[1],j=_((0,i.useState)(!1),2),x=j[0],w=j[1],N=_((0,i.useState)(""),2),C=N[0],F=N[1],K=_((0,i.useState)(!1),2),B=K[0],Z=K[1],J=_((0,i.useState)(""),2),U=J[0],X=J[1],q=_((0,i.useState)(!1),2),z=q[0],Q=q[1],V=_((0,i.useState)(!1),2),W=V[0],$=V[1],G=_((0,i.useState)(!1),2),H=G[0],Y=G[1],tt=_((0,i.useState)([]),2),et=tt[0],nt=tt[1],rt=_((0,i.useState)([]),2),ot=rt[0],it=rt[1],at=_((0,i.useState)(""),2),st=at[0],ct=at[1],ut=_((0,i.useState)(!1),2),lt=ut[0],ft=ut[1],dt=_((0,i.useState)([]),2),pt=dt[0],ht=dt[1],mt=_((0,i.useState)(!1),2),vt=mt[0],gt=mt[1],yt=_((0,i.useState)(!1),2),bt=yt[0],jt=yt[1],xt=_((0,i.useState)(!1),2),wt=xt[0],St=xt[1];(0,i.useEffect)((function(){!H&&r.songName.length>0&&r.artistName.length>0&&(Y(!0),ct(r.songName))}),[]),(0,i.useEffect)((function(){l.length>0&&v(l)}),[l,x]);var Ot=function(){B||w(!0)},Nt=function(t){return m.filter((function(e){return-1!==e.artistName.toLowerCase().indexOf(t.toLowerCase())}))},Ct=function(t){console.log(t.data),St(!1),v(Nt(t.data))},It=S({mode:"lookup",entity:"song",attribute:"songTerm",options:{id:r.artistId}}).iTunesAPIfetch,kt=(0,c.useQuery)("songSearch",It,{enabled:!1,retry:0,onSuccess:function(t){var e=[];t.results.map((function(t){var n=t.wrapperType,r=t.trackName,o=t.artistName,i=t.artworkUrl30;"track"===n&&e.push({song:r,artist:o,thumbnail:i})})),ht(e),it(e)},onError:function(t){return console.log(t)}}),At=kt.refetch,Pt=kt.isLoading,Et=function(t){var e,n=(e=t.artistId,d.filter((function(t){return t.artistId==e})));nt(n),gt(!0),it(n)},Dt=function(){gt(!0)};(0,i.useEffect)((function(){it(et)}),[vt]);var Tt=function(){v([])},Mt=function(t){var e=t.artistId,n=t.artistName;o(R(R({},r),{},{artistId:e,artistName:n}))},Ft=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NotFound";if(Tt(),Z(!0),w(!1),"NotFound"!==t)F(t.artistName),Mt(t),Et(t);else{var n=-1*Math.floor(new P(e.id+"-"+C).next(2,99999));$(!0),Mt({artistId:n,artistName:C})}Y(!0)};(0,i.useEffect)((function(){r.artistId>-1&&At()}),[r.artistId]);var Rt=S({entity:"musicArtist",attribute:"artistTerm",term:U}).iTunesAPIfetch,Lt=(0,c.useQuery)("artistSearch",Rt,{enabled:!1,retry:0,onSuccess:function(t){var e=[];t.results.map((function(t){var n=t.artistName,r=t.artistId;e.push({artistName:n,artistId:r})})),v(e),Q(!0)},onError:function(t){return console.log(t)}}).refetch,_t=!B&&0===m.length&&C.length>0;(0,i.useEffect)((function(){_t&&X(encodeURIComponent(C))}),[m]),(0,i.useEffect)((function(){U.length>0&&Lt()}),[U]);var Kt=function(t){var e=t.target.value;ct(e),e.length>0&&it(function(t){return ot.filter((function(e){return-1!==e.song.toLowerCase().indexOf(t.toLowerCase())}))}(e))},Bt=function(){it([])},Zt=function(t){var e=t.song,n=t.artist,i=t.thumbnail,a=t.key;o(R(R({},r),{},{songName:e,artistName:n,jacketImage:i,singKey:a}))},Jt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NotFound";Bt(),ft(!0),gt(!1);var e=0;"NotFound"!==t?(ct(t.song),z||(e=p(t.song,r.artistId)),Zt(R(R({},t),{},{key:e}))):(z||(e=p(st,r.artistId)),Zt({song:st,artist:r.artistName,thumbnail:"",key:e}))};(0,i.useEffect)((function(){!lt&&0===ot.length&&st.length>0&&r.artistId>0&&(jt(!0),it(pt))}),[ot]);var Ut=function(){it([]),ct(""),ft(!1),jt(!1),gt(!1)};(0,i.useEffect)((function(){0===C.length&&0===r.artistName.length&&Y(!1)}),[C]);var Xt=function(){o(R(R({},r),{},{songName:"",jacketImage:""}))},qt=function(){v([]),F(""),Z(!1),X(""),w(!1),Q(!1),Ut(),o(R(R({},r),{},{artistName:"",artistId:-1})),Xt()},zt=["rgba(227, 163, 171, .3)","rgba(202, 226, 230, .3)","rgba(204, 223, 181, .3)","rgba(194, 199, 225, .3)"],Qt=(0,A.iv)(E||(E=M(["\n    text-align: right;\n    font-size: 0.7rem;\n    font-family: 'TsukushiBMaruGothic';\n    color: antiquewhite;\n    padding-top: 1em;\n  "])));return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{children:Pt?(0,f.jsx)(k,{baseColor:"#ebebeb10",highlightColor:"#f5f5f580",borderRadius:"30px",height:"4rem",children:(0,f.jsx)(I,{})}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:Qt,children:"ローマ字名は楽曲入力時に正式な名称に変換されます"}),(0,f.jsx)(y.oi,{value:C,onChange:function(t){return function(t){var e=t.target.value;F(e),e.length>0&&!wt&&v(Nt(e))}(t)},onCompositionStart:function(){return St(!0)},onCompositionEnd:function(t){return Ct(t)},placeholder:"search artists",onFocus:function(){return Ot()},onTouchEnd:function(){return Ot()},icon:C.length>0&&(0,f.jsx)(b.WB9,{onClick:function(t){return qt()}})}),x&&(0,f.jsx)(y.FE,{children:(0,f.jsxs)(f.Fragment,{children:[z&&(0,f.jsx)(y.j8,{onClick:function(t){return Ft()},children:(0,f.jsx)("span",{className:"title",children:"候補にない"})}),m.map((function(t,e){return(0,f.jsx)(y.j8,{onClick:function(e){return Ft(t)},className:(0,A.iv)(D||(D=M(["\n                        --pastel: ",";\n                      "])),zt[e%zt.length]),children:(0,f.jsx)("span",{className:"title",children:t.artistName})},"artist-".concat(e))}))]})}),!H&&(0,f.jsx)("div",{className:Qt,children:"まずは上の欄にアーティスト名を記入してください"}),(0,f.jsx)(y.oi,{value:st,onChange:function(t){return Kt(t)},onFocus:function(){return Dt()},onTouchEnd:function(){return Dt()},onCompositionEnd:function(){W&&Jt()},icon:st.length>0&&(0,f.jsx)(b.WB9,{onClick:function(t){return Ut(),void Xt()}}),disabled:!H,placeholder:"search song"}),vt&&!Pt&&(0,f.jsx)(y.FE,{children:(0,f.jsxs)(f.Fragment,{children:[bt&&(0,f.jsx)(y.j8,{onClick:function(t){return Jt()},children:(0,f.jsx)("span",{className:"title",children:"候補にない"})}),ot.map((function(t,e){var n;return(0,f.jsxs)(y.j8,(L(n={className:"avatar",onClick:function(e){return Jt(t)}},"className",(0,A.iv)(T||(T=M(["\n                        --pastel: ",";\n                      "])),zt[e%zt.length])),L(n,"children",[t.thumbnail.length>0&&(0,f.jsx)("img",{className:"circle",src:t.thumbnail}),(0,f.jsx)("span",{className:"title",children:t.song}),(0,f.jsxs)("p",{children:[(0,f.jsx)(O.DLv,{}),t.artist]})]),n),"song-".concat(e))}))]})})]})})})};var Z=n(1201);const J=function(){var t=(0,s.s)(),e=t.addTmpRecord,n=t.writeAddTmpData,r=e.memo;return(0,f.jsx)("div",{children:(0,f.jsx)(Z.Z,{value:r,setValue:function(t){return n("memo",t)}})})};var U=n(5255);const X=function(){var t=(0,s.s)(),e=t.addTmpRecord,n=t.writeAddTmpData,r=e.score;return(0,f.jsx)("div",{children:(0,f.jsx)(U.Z,{score:r,setScore:function(t){return n("score",t)}})})};var q=n(5817);const z=function(){var t=(0,s.s)(),e=t.addTmpRecord,n=t.writeAddTmpData,r=e.problemsData;return(0,f.jsx)("div",{children:(0,f.jsx)(q.Z,{value:r,setValue:function(t){n("problemsData",t)}})})};var Q=n(5871),V=n(8420);function W(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?W(Object(n),!0).forEach((function(e){G(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function G(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function H(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function Y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return tt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function tt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const et=function(){var t,e,n=Y((0,i.useState)(!1),2),r=n[0],l=n[1],p=Y((0,i.useState)(""),2),m=p[0],g=p[1],y=(0,u.b)().api,b=(0,a.y)(),j=b.user,x=b.addRecord,w=b.setInitComplete,S=(0,s.s)(),O=S.addTmpRecord,N=S.resetAddTmpRecord;t=(0,a.y)().allRecords,e=(0,s.s)().writeAddTmpData,(0,i.useEffect)((function(){if(t.length>0){var n=t[0];e("singDate",n.singDate)}}),[t.length]),(0,i.useEffect)((function(){console.log(O)}),[O]);var C=function(){var t,e=(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.post("/api/ohako/setlist/store",{json:$($({},O),{},{userId:j.id,singDate:O.singDate?O.singDate.toLocaleDateString("ja-JP"):(new Date).toLocaleDateString("ja-JP"),problems:O.problemsData.map((function(t){return t.id}))})}).json();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){H(i,r,o,a,s,"next",t)}function s(t){H(i,r,o,a,s,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}(),I=(0,c.useQuery)("newSetlistSubmit",C,{enabled:!1,retry:0,onSuccess:function(t){if(!t.status)return console.log(t.message),void setError(t.message);x($($({},O),{},{id:t.id,problems:O.problemsData.map((function(t){return t.content})),registDate:(0,V.default)(t.created_at)})),N(),g(""),l(!1)},onError:function(t){console.log(t),g("エラーが発生しました。もう一度送信してください。"),l(!0)},onSettled:function(){w(!0)}}),k=I.refetch,A=I.isLoading;return(0,f.jsx)(Q.Z,{isLoading:A,header:"Add a new history",id:"ohakoAddSetlistFormModal",isModalOpen:r,setIsModalOpen:l,errorMsg:m,SingDateForm:(0,f.jsx)(d,{}),MusicForm:(0,f.jsx)(B,{}),SingKeyForm:(0,f.jsx)(v,{}),RatingForm:(0,f.jsx)(h,{}),ScoreForm:(0,f.jsx)(X,{}),ProblemsForm:(0,f.jsx)(z,{}),MemoForm:(0,f.jsx)(J,{}),submitLabel:"Add",onSubmit:function(t){w(!1),k()}})}},6554:function(t,e){var n,r,o;r=[e,t],n=function(t,e){"use strict";var n={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function r(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function o(t){try{delete window[t]}catch(e){window[t]=void 0}}function i(t){var e=document.getElementById(t);e&&document.getElementsByTagName("head")[0].removeChild(e)}function a(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=t,s=e.timeout||n.timeout,c=e.jsonpCallback||n.jsonpCallback,u=void 0;return new Promise((function(n,l){var f=e.jsonpCallbackFunction||r(),d=c+"_"+f;window[f]=function(t){n({ok:!0,json:function(){return Promise.resolve(t)}}),u&&clearTimeout(u),i(d),o(f)},a+=-1===a.indexOf("?")?"?":"&";var p=document.createElement("script");p.setAttribute("src",""+a+c+"="+f),e.charset&&p.setAttribute("charset",e.charset),e.nonce&&p.setAttribute("nonce",e.nonce),e.referrerPolicy&&p.setAttribute("referrerPolicy",e.referrerPolicy),p.id=d,document.getElementsByTagName("head")[0].appendChild(p),u=setTimeout((function(){l(new Error("JSONP request to "+t+" timed out")),o(f),i(d),window[f]=function(){o(f)}}),s),p.onerror=function(){l(new Error("JSONP request to "+t+" failed")),o(f),i(d),u&&clearTimeout(u)}}))}e.exports=a},void 0===(o="function"==typeof n?n.apply(e,r):n)||(t.exports=o)}}]);
//# sourceMappingURL=386.js.map