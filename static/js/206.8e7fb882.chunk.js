"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[206],{1687:function(n,e,t){t.d(e,{Df:function(){return i},M1:function(){return p},fh:function(){return f},gs:function(){return o},tx:function(){return d}});var r=t(5861),a=t(4687),u=t.n(a),c=t(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="472a7d35f0d46df70840d9ca53a79985",i=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?language=en-US&api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1&api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?language=en-US&api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?language=en-US&api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?language=en-US&api_key=").concat(s,"}"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2321:function(n,e,t){t.d(e,{B:function(){return o}});var r,a=t(7689),u=t(1087),c=t(168),s=t(5867).ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  font-size: 26px;\n"]))),i=t(184),o=function(n){var e=n.data,t=(0,a.TH)();return(0,i.jsx)(s,{children:e.map((function(n){var e=n.id,r=n.title;return(0,i.jsx)("li",{children:(0,i.jsx)(u.rU,{to:"movies/".concat(e),state:{from:t},children:r})},e)}))})}},1206:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(5861),a=t(9439),u=t(4687),c=t.n(u),s=t(1687),i=t(7658),o=t(2321),f=t(2791),p=t(5218),d=t(184);function l(){var n=(0,f.useState)([]),e=(0,a.Z)(n,2),t=e[0],u=e[1],l=(0,f.useState)(!1),v=(0,a.Z)(l,2),h=v[0],x=v[1],g=(0,f.useState)(!1),m=(0,a.Z)(g,2),k=m[0],w=m[1];return(0,f.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w(!0),x(!1),n.next=5,(0,s.Df)();case 5:e=n.sent,u(e.results),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),x(!0),p.Am.error("Please, try to reload this page");case 13:return n.prev=13,w(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,d.jsx)(d.Fragment,{children:k?(0,d.jsx)(i.a,{}):(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:"Trending today"}),t.length>0&&!h&&(0,d.jsx)(o.B,{data:t})]})})}}}]);
//# sourceMappingURL=206.8e7fb882.chunk.js.map