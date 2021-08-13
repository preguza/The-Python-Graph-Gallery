"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[6039],{7408:function(e,t,a){var n=a(7462),l=a(3366),r=a(5900),c=a.n(r),i=a(7294),o=a(9541),s=["bsPrefix","className","as"],m=["xl","lg","md","sm","xs"],u=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,u=e.as,d=void 0===u?"div":u,h=(0,l.Z)(e,s),p=(0,o.vE)(a,"col"),f=[],E=[];return m.forEach((function(e){var t,a,n,l=h[e];if(delete h[e],"object"==typeof l&&null!=l){var r=l.span;t=void 0===r||r,a=l.offset,n=l.order}else t=l;var c="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+p+c:""+p+c+"-"+t),null!=n&&E.push("order"+c+"-"+n),null!=a&&E.push("offset"+c+"-"+a)})),f.length||f.push(p),i.createElement(d,(0,n.Z)({},h,{ref:t,className:c().apply(void 0,[r].concat(f,E))}))}));u.displayName="Col",t.Z=u},994:function(e,t,a){var n=a(7462),l=a(3366),r=a(5900),c=a.n(r),i=a(7294),o=a(9541),s=["bsPrefix","className","noGutters","as"],m=["xl","lg","md","sm","xs"],u=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,u=e.noGutters,d=e.as,h=void 0===d?"div":d,p=(0,l.Z)(e,s),f=(0,o.vE)(a,"row"),E=f+"-cols",b=[];return m.forEach((function(e){var t,a=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&b.push(""+E+n+"-"+t)})),i.createElement(h,(0,n.Z)({ref:t},p,{className:c().apply(void 0,[r,f,u&&"no-gutters"].concat(b))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},9869:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(994),r=a(7408),c=a(1831),i=a(8544),o=a(9474),s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){var t=e.chartFamily,a=i.c.filter((function(e){return e.family===t})).map((function(e,t){var a=(0,o.y)(e.pythonURL);return n.createElement(r.Z,{key:t,xs:4,md:2},n.createElement(c.Z,{link:a,chartType:e.logo,caption:e.label}))}));return n.createElement("div",null,n.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==s?void 0:s[t]),n.createElement(l.Z,null,a))}},9935:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(5444),r=a(1496),c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){var t=e.imgName,a=e.caption;if(c.includes(t))return n.createElement("p",null,"TODO");var i=(0,l.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return i?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.Z,{alt:a,fluid:i.node.childImageSharp.fluid,className:"chartImageImg"}),n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},1831:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(5444),l=a(7294),r=a(583),c=a(8544).c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function i(e){var t=e.chartType,a=e.caption,i=e.link,o=c.includes(t);return l.createElement(l.Fragment,null,o?l.createElement(l.Fragment,null,l.createElement(n.Link,{to:i},l.createElement(r.Z,{chartType:t})),l.createElement("p",{className:"distributionSection sectionLogoCaption"},a)):l.createElement(l.Fragment,null,l.createElement("div",{className:"sectionLogoContainer"},l.createElement(n.Link,{to:i},l.createElement(r.Z,{chartType:t}),l.createElement("div",{className:"sectionLogoOverlay"},l.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.createElement("p",{className:"distributionSection sectionLogoCaption"},a)))}},1006:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=a(4839),r=a(6594),c=a(5444),i=a(8544),o=a(9474);function s(e){var t=e.title,a=e.description,s=e.chartType,m=i.c.filter((function(e){return e.id===s}))[0];return n.createElement(n.Fragment,null,n.createElement("div",{className:"titleAndDescription"},n.createElement("h1",{className:"mainTitle"},t),n.createElement("hr",{className:"smallHr"}),n.createElement(l.Z,null),n.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}),s&&n.createElement("div",{style:{marginTop:"10px"}},n.createElement(c.Link,{to:(0,o.y)(m.pythonURL)},n.createElement(r.Z,{size:"sm"},m.label+" section")),n.createElement("a",{href:m.dataToVizURL},n.createElement(r.Z,{size:"sm"},"About this chart")))))}},3268:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),l=a(1006),r=a(3203),c=a(6187),i=a(7567),o=a(9869),s=a(458),m=a(9935),u=a(3727),d=a(5444),h=a(994),p=a(7408);function f(){return n.createElement(r.Z,{title:"Cheat sheets",isTocEnabled:!0,seoDescription:"A collection of cheat sheets related with Python and data visualization"},n.createElement(l.Z,{title:"Cheat Sheets",description:"<p>This section provides a few cheat sheets related with <code>python</code>, data wrangling and data visualization. Even with a perfect understanding of <code>python</code> and its libraries, it's almost impossible to remember the syntax of each function of the ecosystem. That's where cheatsheets are useful 🔥!</p>"}),n.createElement(s.Z,null),n.createElement(c.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(u.rS,null),"Matplotlib cheatsheet"),n.createElement("p",null,n.createElement("a",{href:"https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650",title:"Datacamp",onClick:"trackOutboundLink('https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650'); return false;",target:"_blank"},"Datacamp")," provides a cheatsheet describing the basics of ",n.createElement("code",null,"matplotlib"),". Matplotlib is the most widely used library for datavisualization with python. You can read more about it on its ",n.createElement(d.Link,{href:"/matplotlib"},"dedicated page"),"."),n.createElement(h.Z,null,n.createElement(p.Z,{xs:12,md:12},n.createElement("a",{href:"https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Python_Matplotlib_Cheat_Sheet.pdf"},n.createElement(m.Z,{imgName:"matplotlib_cheat_sheet",caption:"Matplotlib cheatsheet by Datacamp."})))),n.createElement("br",null),n.createElement("br",null),n.createElement("p",null,"The following 2 cheatsheets from the ",n.createElement("a",{href:"https://github.com/matplotlib/cheatsheets"},"official matplotlib repository")," are also very handy:"),n.createElement(h.Z,null,n.createElement(p.Z,{xs:12,md:12},n.createElement(m.Z,{imgName:"matplotlib-python-official-cheatsheet1",caption:"Matplotlib cheatsheet by matplotlib (page 1)."})),n.createElement(p.Z,{xs:12,md:12},n.createElement(m.Z,{imgName:"matplotlib-python-official-cheatsheet2",caption:"Matplotlib cheatsheet by matplotlib (page 2)."})))),n.createElement(s.Z,null),n.createElement(c.Z,null,n.createElement("h2",{id:"Seaborn"},n.createElement(u._I,null),"Seaborn cheatsheet"),n.createElement("p",null,n.createElement("a",{href:"https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650",title:"Datacamp",onClick:"trackOutboundLink('https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650'); return false;",target:"_blank"},"Datacamp")," provides a cheatsheet describing the basics of ",n.createElement("code",null,"seaborn"),". Seaborn is also a widely used library for datavisualization with python. It allows to get very clean chart with less code. You can read more about it on its ",n.createElement(d.Link,{href:"/seaborn"},"dedicated page"),"."),n.createElement(h.Z,null,n.createElement(p.Z,{xs:12,md:12},n.createElement("a",{href:"https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Python_Seaborn_Cheat_Sheet.pdf"},n.createElement(m.Z,{imgName:"seaborn_cheat_sheet",caption:"Seaborn cheatsheet by Datacamp."}))))),n.createElement(s.Z,null),n.createElement(c.Z,null,n.createElement("h2",{id:"Pandas"},n.createElement(u.JK,null),"Pandas cheatsheet"),n.createElement("p",null,n.createElement("a",{href:"https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650",title:"Datacamp",onClick:"trackOutboundLink('https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650'); return false;",target:"_blank"},"Datacamp")," provides a cheatsheet describing the basics of ",n.createElement("code",null,"pandas"),". Pandas is mainly used for data manipulation with Python, but also offers some dataviz helpers."),n.createElement(h.Z,null,n.createElement(p.Z,{xs:12,md:12},n.createElement("a",{href:"http://datacamp-community-prod.s3.amazonaws.com/dbed353d-2757-4617-8206-8767ab379ab3"},n.createElement(m.Z,{imgName:"pandas_cheat_sheet",caption:"Pandas cheatsheet by Datacamp."}))))),n.createElement(s.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(c.Z,null,n.createElement(o.Z,{chartFamily:"general"}))),n.createElement(s.Z,null),n.createElement(c.Z,null,n.createElement(i.Z,null)),n.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-cheat-sheets-js-b46e28e9f726f441a0b2.js.map