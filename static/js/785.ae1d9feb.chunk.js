"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{1687:function(e,r,t){t.d(r,{Df:function(){return s},fh:function(){return o},gs:function(){return i},i_:function(){return f}});var n=t(5861),a=t(4687),u=t.n(a),c=t(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"472a7d35f0d46df70840d9ca53a79985",language:"en-US",include_adult:!1};var s=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(r,"&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r,t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()},6785:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(5861),a=t(9439),u=t(4687),c=t.n(u),s=t(1687),i=t(7658),o=t(2791),f=t(5218),p=t(7689),d=t(184);function h(){var e=(0,o.useState)(null),r=(0,a.Z)(e,2),t=r[0],u=r[1],h=(0,o.useState)(!1),l=(0,a.Z)(h,2),v=l[0],x=l[1],m=(0,o.useState)(!1),w=(0,a.Z)(m,2),Z=w[0],k=w[1],g=(0,p.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),x(!1),e.next=5,(0,s.i_)(g,"reviews");case 5:r=e.sent,u(r.results),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),x(!0),f.ZP.error("Please, try to reload this page");case 13:return e.prev=13,k(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]),(0,d.jsxs)("div",{children:[Z&&(0,d.jsx)(i.a,{}),t&&0===t.length&&(0,d.jsx)("p",{children:(0,d.jsx)("b",{children:"There are no reviews"})}),t&&(0,d.jsx)("ul",{children:!v&&t.map((function(e){var r=e.author,t=e.id,n=e.content;return(0,d.jsxs)("li",{children:[(0,d.jsx)("h2",{children:r}),(0,d.jsx)("p",{children:n})]},t)}))})]})}}}]);
//# sourceMappingURL=785.ae1d9feb.chunk.js.map