(this.webpackJsonpivancatacata=this.webpackJsonpivancatacata||[]).push([[4],{36:function(t,e,a){"use strict";var s=a(7),r=a(8),c=a(10),n=a(9),i=a(1),o=a.n(i),j=(a(37),a(40)),l=a(2),d=function(t){Object(c.a)(a,t);var e=Object(n.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"col-3",children:Object(l.jsx)(j.a,{to:"/artista?"+this.props.titulo,children:Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("img",{src:this.props.img,alt:"",className:"img-fluid pic"}),Object(l.jsx)("p",{className:"titulo",children:this.props.titulo})]})})})}}]),a}(o.a.Component);e.a=d},37:function(t,e,a){},38:function(t,e,a){"use strict";var s=a(1),r=a.n(s),c=(a(15),a(2));e.a=function(t){return Object(c.jsx)(r.a.Fragment,{children:Object(c.jsx)("div",{className:"upp",children:Object(c.jsx)("div",{className:"col-md-12 centrar",children:Object(c.jsxs)("h3",{children:["Error: ",t.errorMensaje]})})})})}},44:function(t,e,a){},47:function(t,e,a){"use strict";a.r(e);var s=a(33),r=a.n(s),c=a(35),n=a(43),i=a(7),o=a(8),j=a(10),l=a(9),d=a(1),u=a.n(d),h=a(40),m=a(36),b=a(2),x=function(t){Object(j.a)(a,t);var e=Object(l.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(u.a.Fragment,{children:[Object(b.jsxs)("div",{className:"row centrar",children:[Object(b.jsx)("h5",{children:"Similar"}),Object(b.jsx)("hr",{})]}),Object(b.jsx)("div",{className:"row centrar",children:this.props.data.slice(0,4).map((function(t,e){return Object(b.jsx)(m.a,{img:t.image[3]["#text"],titulo:t.name},e)}))})]})}}]),a}(u.a.Component),O=(a(44),a(11)),p=a(38),f=function(t){Object(j.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var s=arguments.length,o=new Array(s),j=0;j<s;j++)o[j]=arguments[j];return(t=e.call.apply(e,[this].concat(o))).state={data:{artist:{image:[{"#text":""},{"#text":""},{"#text":""},{"#text":""},{"#text":""}],bio:{summary:""},similar:{artist:[{name:"",url:"",image:[{"#text":""},{"#text":""},{"#text":""},{"#text":""},{"#text":""}]}]}}}},t.changeHandle=function(e){t.setState(Object(n.a)({},e.target.name,e.target.value))},t.fetchData=Object(c.a)(r.a.mark((function e(){var a,s,c,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props.history.location.search.substr(1),s="https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+a+"&api_key=78f2858e64a971956f890df11d891787&format=json",t.setState({loading:!0}),e.next=5,fetch(s);case 5:return c=e.sent,e.next=8,c.json();case 8:(n=e.sent).error?t.setState({loading:!1,error:!0,errorMensaje:n.message}):t.setState({error:!1,loading:!1,data:n});case 10:case"end":return e.stop()}}),e)}))),t}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(t){this.props.location!==t.location&&this.fetchData()}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return Object(b.jsxs)(u.a.Fragment,{children:[this.state.loading&&Object(b.jsx)(O.a,{}),this.state.error&&Object(b.jsx)(p.a,{errorMensaje:this.state.ErrorMensaje}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row centrar",children:[Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)(h.a,{to:"/Artistas/busqueda?"+this.state.data.artist.name,children:Object(b.jsx)("button",{className:"boton",children:"Volver"})})}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("img",{src:this.state.data.artist.image[3]["#text"],alt:"",className:"pic-artist margenes50"}),Object(b.jsx)("h2",{children:this.state.data.artist.name}),Object(b.jsx)("p",{children:this.state.data.artist.bio.summary})]})]}),Object(b.jsx)("div",{className:"row centrar",children:Object(b.jsx)(x,{data:this.state.data.artist.similar.artist})})]})]})}}]),a}(d.Component);e.default=f}}]);
//# sourceMappingURL=4.766ea93c.chunk.js.map