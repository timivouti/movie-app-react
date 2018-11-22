webpackJsonp([2],{530:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(47),s=n(92),a=n(1),o=(n.n(a),n(169)),c=n(531),i=n(171),u=n(533),p=Object(s.q)({container:{margin:"8px"},loadingContainer:{display:"flex",justifyContent:"center",marginTop:15}}),l=function(e){function t(t){var n=e.call(this,t)||this;return n.fetch=function(e){e&&e.length>0?n.props.fetchMovies(e).then(function(){return n.props.fetchGenres()}):n.props.history.push("/topmovies")},n}return r.c(t,e),t.prototype.componentDidMount=function(){this.fetch(this.props.match.params.value)},t.prototype.shouldComponentUpdate=function(e){return this.props.match.params.value!=e.match.params.value&&this.fetch(e.match.params.value),this.props.match.params.value!=e.match.params.value||this.props.movies!=e.movies||this.props.genres!=e.genres},t.prototype.render=function(){var e=this;return console.log(this.props.match.params),a.createElement("div",{className:this.props.classes.container},this.props.loading&&a.createElement(i.a,null),a.createElement(s.g,{container:!0,spacing:16},!this.props.loading&&this.props.movies&&this.props.movies.length>0&&this.props.genres&&this.props.genres.length>0&&this.props.movies.map(function(t,n){return a.createElement(c.a,{key:n,movie:t,genres:e.props.genres})})))},t}(a.Component);t.default=Object(o.b)(function(e){return{genres:e.movie.genres,loading:e.movie.loading,movies:e.movie.movies}},function(e){return{fetchGenres:function(){return e(Object(u.a)())},fetchMovies:function(t){return e(Object(u.d)(t))}}})(Object(s.r)(p)(l))},531:function(e,t,n){"use strict";var r=n(47),s=n(92),a=n(170),o=n.n(a),c=n(1),i=(n.n(c),n(532)),u=Object(s.q)({starContent:{alignItems:"center",display:"flex",flexDirection:"row",height:"24px"},media:{}}),p=function(e){function t(t){return e.call(this,t)||this}return r.c(t,e),t.prototype.render=function(){return c.createElement(s.g,{xs:12,sm:6,item:!0},c.createElement(s.b,null,c.createElement(s.g,{container:!0},c.createElement(s.g,{xs:12,md:6,item:!0},c.createElement(s.d,{className:this.props.classes.media,component:"img",image:"https://image.tmdb.org/t/p/w185"+this.props.movie.poster_path,title:this.props.movie.title})),c.createElement(s.g,{xs:12,md:4,item:!0},c.createElement(s.c,null,c.createElement(s.p,{gutterBottom:!0,variant:"h5",component:"h2"},this.props.movie.title),c.createElement(s.p,{component:"p"},this.props.movie.overview)),c.createElement(s.c,null,c.createElement(s.p,{component:"p"},"Genres: ",this.findGenre(this.props.movie.genre_ids)),c.createElement(s.p,{component:"p"},"Language: ",this.props.movie.original_language),c.createElement(s.p,{component:"p"},"Released: ",Object(i.a)(this.props.movie.release_date)))),c.createElement(s.g,{xs:12,md:2,item:!0},c.createElement(s.c,{className:this.props.classes.starContent},c.createElement(o.a,null),c.createElement(s.p,{component:"p"},this.props.movie.vote_average))))))},t.prototype.findGenre=function(e){var t=this,n=[];return e.map(function(e){t.props.genres.forEach(function(t){t.id===e&&n.push(t.name)})}),n.join(", ")},t}(c.Component);t.a=Object(s.r)(u)(p)},532:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){return e.substring(8,10)+"."+e.substring(5,7)+"."+e.substring(0,4)}},533:function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"c",function(){return p}),n.d(t,"e",function(){return l}),n.d(t,"f",function(){return m}),n.d(t,"a",function(){return h}),n.d(t,"d",function(){return f});var r=n(47),s=(n(534),n(172)),a=this,o="?api_key=00297accea2395b7c2d46ca8feb72e99",c="https://api.themoviedb.org/3/",i="&language=en-US",u=function(){return function(e){return r.b(a,void 0,void 0,function(){var t,n,a;return r.d(this,function(r){switch(r.label){case 0:e({type:s.d}),r.label=1;case 1:return r.trys.push([1,6,,7]),[4,fetch(c+"movie/now_playing"+o+i+"&page=1")];case 2:return(t=r.sent()).ok?[4,t.json()]:[3,4];case 3:return n=r.sent(),a=n.results,e({type:s.c,payload:a}),[3,5];case 4:e({type:s.a}),r.label=5;case 5:return[3,7];case 6:return r.sent(),e({type:s.a}),[3,7];case 7:return[2]}})})}},p=function(){return function(e){return r.b(a,void 0,void 0,function(){var t,n,a;return r.d(this,function(r){switch(r.label){case 0:e({type:s.d}),r.label=1;case 1:return r.trys.push([1,6,,7]),[4,fetch(c+"movie/popular"+o+i+"&page=1")];case 2:return(t=r.sent()).ok?[4,t.json()]:[3,4];case 3:return n=r.sent(),a=n.results,e({type:s.c,payload:a}),[3,5];case 4:e({type:s.a}),r.label=5;case 5:return[3,7];case 6:return r.sent(),e({type:s.a}),[3,7];case 7:return[2]}})})}},l=function(){return function(e){return r.b(a,void 0,void 0,function(){var t,n,a;return r.d(this,function(r){switch(r.label){case 0:e({type:s.d}),r.label=1;case 1:return r.trys.push([1,6,,7]),[4,fetch(c+"movie/top_rated"+o+i+"&page=1")];case 2:return(t=r.sent()).ok?[4,t.json()]:[3,4];case 3:return n=r.sent(),a=n.results,e({type:s.c,payload:a}),[3,5];case 4:e({type:s.a}),r.label=5;case 5:return[3,7];case 6:return r.sent(),e({type:s.a}),[3,7];case 7:return[2]}})})}},m=function(){return function(e){return r.b(a,void 0,void 0,function(){var t,n,a;return r.d(this,function(r){switch(r.label){case 0:e({type:s.d}),r.label=1;case 1:return r.trys.push([1,6,,7]),[4,fetch(c+"movie/upcoming"+o+i+"&page=1")];case 2:return(t=r.sent()).ok?[4,t.json()]:[3,4];case 3:return n=r.sent(),a=n.results,e({type:s.c,payload:a}),[3,5];case 4:e({type:s.a}),r.label=5;case 5:return[3,7];case 6:return r.sent(),e({type:s.a}),[3,7];case 7:return[2]}})})}},h=function(){return function(e){return r.b(a,void 0,void 0,function(){var t,n,a;return r.d(this,function(r){switch(r.label){case 0:e({type:s.d}),r.label=1;case 1:return r.trys.push([1,6,,7]),[4,fetch(c+"genre/movie/list"+o+i)];case 2:return(t=r.sent()).ok?[4,t.json()]:[3,4];case 3:return n=r.sent(),a=n.genres,e({type:s.b,payload:a}),[3,5];case 4:e({type:s.a}),r.label=5;case 5:return[3,7];case 6:return r.sent(),e({type:s.a}),[3,7];case 7:return[2]}})})}},f=function(e){return function(t){return r.b(a,void 0,void 0,function(){var n,a,u;return r.d(this,function(r){switch(r.label){case 0:t({type:s.d}),r.label=1;case 1:return r.trys.push([1,6,,7]),[4,fetch(c+"search/movie"+o+i+"&query="+e)];case 2:return(n=r.sent()).ok?[4,n.json()]:[3,4];case 3:return a=r.sent(),u=a.results,t({type:s.c,payload:u}),[3,5];case 4:t({type:s.a}),r.label=5;case 5:return[3,7];case 6:return r.sent(),t({type:s.a}),[3,7];case 7:return[2]}})})}}},534:function(e,t,n){"use strict";t.a=function(e,t){return void 0===t?{type:e}:{type:e,payload:t}}}});
//# sourceMappingURL=2.f36ac916.chunk.js.map