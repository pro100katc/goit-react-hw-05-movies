"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{1687:function(e,t,n){n.d(t,{Hq:function(){return f},Hx:function(){return h},Tg:function(){return p},Y5:function(){return d},xc:function(){return l}});var r=n(5861),a=n(7757),o=n.n(a),c=n(4569),i=n.n(c),u=n(1660);i().defaults.baseURL="https://api.themoviedb.org/3",i().defaults.params={api_key:"8fb08ce7c4baf0eda528d5cdd76e2668",include_adult:!1};var s="https://image.tmdb.org/t/p/w500",p=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i().get("/trending/all/day?").then((function(e){return e.data.results.map((function(e){var t=e.id,n=e.title,r=e.poster_path;return{id:t,title:n,poster:s+r}}))})).catch((function(e){console.log(e.message)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i().get("/search/movie?query=".concat(t)).then((function(e){return e.data.results.map((function(e){var t=e.id,n=e.title,r=e.poster_path;return{id:t,title:n,poster:s+r}}))})).catch((function(e){console.log(e.message)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){return i().get("/movie/".concat(e,"?")).then((function(e){var t=e.data,n=t.id,r=t.poster_path,a=t.title,o=t.release_date,c=t.vote_average,i=t.overview,u=t.genres;return{id:n,poster:s+r,title:a,releaseYear:new Date(o).getFullYear(),userScore:Math.round(10*c),overview:i,genres:u}})).catch((function(e){console.log(e.message)}))},l=function(e){return i().get("/movie/".concat(e,"/credits?")).then((function(e){return e.data.cast.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path;return{id:t,name:n,character:r,photo:a?s+a:u}}))})).catch((function(e){console.log(e.message)}))},h=function(e){return i().get("/movie/".concat(e,"/reviews?")).then((function(e){return e.data.results.map((function(e){return{id:e.id,author:e.author,content:e.content}}))})).catch((function(e){console.log(e.message)}))}},9779:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r,a=n(885),o=n(1687),c=n(6871),i=n(2791),u=n(168),s=n(6444).ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  padding: 30px;\n  background-color: #3f51b542;\n  margin: 20px 30px 30px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  flex-direction: column;\n  align-items: center;\n"]))),p=n(184),f=function(){var e=(0,c.UO)("movieId").movieId,t=(0,i.useState)([]),n=(0,a.Z)(t,2),r=n[0],u=n[1];return(0,i.useEffect)((function(){(0,o.Hx)(e).then(u)}),[e]),(0,p.jsx)(s,{children:r.length>0?(0,p.jsx)("ul",{children:r.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:n}),(0,p.jsx)("p",{children:r})]},t)}))}):(0,p.jsx)("p",{children:"We don`t have any reviews for this movie"})})}},1660:function(e,t,n){e.exports=n.p+"static/media/images.0876734f98afd98bb969.jpg"}}]);
//# sourceMappingURL=779.f0ec948f.chunk.js.map