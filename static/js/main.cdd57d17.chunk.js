(this.webpackJsonpmovie_app_2020_siwan=this.webpackJsonpmovie_app_2020_siwan||[]).push([[0],{45:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),i=s(15),r=s.n(i),c=s(6),o=s.n(c),l=s(16),m=s(17),d=s(18),j=s(21),u=s(20),v=s(19),p=s.n(v),h=(s(45),s(0));var b=function(e){e.id;var t=e.year,s=e.title,n=e.summary,a=e.poster,i=e.genres;return Object(h.jsxs)("div",{class:"movie",children:[Object(h.jsx)("img",{src:a,alt:s,title:s}),Object(h.jsxs)("div",{class:"movie_data",children:[Object(h.jsx)("h3",{class:"movie_title",children:s}),Object(h.jsx)("h5",{class:"movie_year",children:t}),Object(h.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(h.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(h.jsxs)("p",{class:"movie_summary",children:[n.slice(0,140),"..."]})]})]})},O=(s(47),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(m.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var s,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return Object(h.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component)),g=O;r.a.render(Object(h.jsx)(g,{}),document.getElementById("potato"))}},[[48,1,2]]]);
//# sourceMappingURL=main.cdd57d17.chunk.js.map