(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(8),i=a.n(n),c=(a(15),a(1)),l=a(2),s=a(4),p=a(3),u=a(5),d=a(6),m=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).state={dislayTooltip:!1},e.hideTooltip=e.hideTooltip.bind(Object(d.a)(e)),e.showTooltip=e.showTooltip.bind(Object(d.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"hideTooltip",value:function(){this.setState({displayTooltip:!1})}},{key:"showTooltip",value:function(){this.setState({displayTooltip:!0})}},{key:"render",value:function(){return o.a.createElement("span",null,o.a.createElement("div",{className:"project-tooltip",onMouseLeave:this.hideTooltip},this.state.displayTooltip&&o.a.createElement("div",{className:"tooltip-bubble tooltip-right"},o.a.createElement("div",{className:"tooltip-message"},this.props.preview)),o.a.createElement("span",{onMouseEnter:this.showTooltip},this.props.children)))}}]),t}(r.Component);var h=function(e){return o.a.createElement("div",{className:"intro-box"},o.a.createElement("p",null," ",e.intro,"  "))},b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).handleClick=e.handleClick.bind(Object(d.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){window.open(this.props.project.url)}},{key:"render",value:function(){return o.a.createElement("div",{className:"outer"},o.a.createElement("div",{className:"bg"},o.a.createElement("div",{className:"inner"},o.a.createElement("div",{className:"project",onClick:this.handleClick},o.a.createElement("p",null,o.a.createElement(m,{preview:this.props.project.preview},this.props.project.title))))))}}]),t}(r.Component),v=[{id:1,category:"Work",title:"Earnings, Major, and Gender",url:"https://spark.adobe.com/page/PTTg4SAjbORKE/",preview:""},{id:2,category:"Work",title:"Data and Urban Discourses",url:"https://spark.adobe.com/page/9mbUa1Q3wxy8K/",preview:""},{id:3,category:"Work",title:"Kanban App",url:"https://github.com/namrata-haribal/kanban",preview:""},{id:4,category:"Work",title:"With Love from Berlin",url:"https://spark.adobe.com/page/2xZfZGpBcfVoq/",preview:""},{id:5,category:"Work",title:"Stories of Stolen Bikes",url:"https://spark.adobe.com/page/IjvKbe4pxcbdz/",preview:""},{id:6,category:"Work",title:"#19Meets20",url:"https://www.facebook.com/MinervaSchoolsatKGI/photos/?tab=album&album_id=1804102649811956",preview:""}],j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).state={projectdata:v},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.projectdata.filter(function(t){return t.category===e.props.title}).map(function(e){return o.a.createElement(b,{key:e.id,project:e})});return o.a.createElement("div",{className:"project-category"},o.a.createElement("h3",null," ",this.props.title," "),t)}}]),t}(r.Component),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).state={data:v},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=new Set,t=!0,a=!1,r=void 0;try{for(var n,i=this.state.data[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){var c=n.value;e.add(c.category)}}catch(s){a=!0,r=s}finally{try{t||null==i.return||i.return()}finally{if(a)throw r}}var l=Array.from(e).map(function(e){return o.a.createElement(j,{title:e})});return o.a.createElement("div",{className:"project-holder"},l)}}]),t}(r.Component),y=(a(16),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,{intro:"I'm Namrata \u2013 a recent Computer Science graduate passionate about the intersection of storytelling and technology. Innovation in the digital storytelling realm \u2014 be it using code, video, long-form prose, or mixed-media \u2014 is what I'm excited about. I use data and software to tell stories aimed at exploring novel perspectives and mitigating biases. Most recently, I've explored how storytellers can use choose-your-own-adventure-games as tools to build narratives that create positive social impact."}),o.a.createElement(f,null))}}]),t}(r.Component));i.a.render(o.a.createElement(y,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.4a6a8719.chunk.js.map