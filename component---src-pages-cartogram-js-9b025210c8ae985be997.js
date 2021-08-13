"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[6077],{7408:function(e,t,a){var n=a(7462),l=a(3366),r=a(5900),o=a.n(r),c=a(7294),i=a(9541),m=["bsPrefix","className","as"],s=["xl","lg","md","sm","xs"],u=c.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,u=e.as,d=void 0===u?"div":u,p=(0,l.Z)(e,m),h=(0,i.vE)(a,"col"),f=[],E=[];return s.forEach((function(e){var t,a,n,l=p[e];if(delete p[e],"object"==typeof l&&null!=l){var r=l.span;t=void 0===r||r,a=l.offset,n=l.order}else t=l;var o="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+h+o:""+h+o+"-"+t),null!=n&&E.push("order"+o+"-"+n),null!=a&&E.push("offset"+o+"-"+a)})),f.length||f.push(h),c.createElement(d,(0,n.Z)({},p,{ref:t,className:o().apply(void 0,[r].concat(f,E))}))}));u.displayName="Col",t.Z=u},994:function(e,t,a){var n=a(7462),l=a(3366),r=a(5900),o=a.n(r),c=a(7294),i=a(9541),m=["bsPrefix","className","noGutters","as"],s=["xl","lg","md","sm","xs"],u=c.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,u=e.noGutters,d=e.as,p=void 0===d?"div":d,h=(0,l.Z)(e,m),f=(0,i.vE)(a,"row"),E=f+"-cols",g=[];return s.forEach((function(e){var t,a=h[e];delete h[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&g.push(""+E+n+"-"+t)})),c.createElement(p,(0,n.Z)({ref:t},h,{className:o().apply(void 0,[r,f,u&&"no-gutters"].concat(g))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},9869:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=a(994),r=a(7408),o=a(1831),c=a(8544),i=a(9474),m={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function s(e){var t=e.chartFamily,a=c.c.filter((function(e){return e.family===t})).map((function(e,t){var a=(0,i.y)(e.pythonURL);return n.createElement(r.Z,{key:t,xs:4,md:2},n.createElement(o.Z,{link:a,chartType:e.logo,caption:e.label}))}));return n.createElement("div",null,n.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==m?void 0:m[t]),n.createElement(l.Z,null,a))}},9935:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(5444),r=a(1496),o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function c(e){var t=e.imgName,a=e.caption;if(o.includes(t))return n.createElement("p",null,"TODO");var c=(0,l.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return c?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.Z,{alt:a,fluid:c.node.childImageSharp.fluid,className:"chartImageImg"}),n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},1831:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(5444),l=a(7294),r=a(583),o=a(8544).c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function c(e){var t=e.chartType,a=e.caption,c=e.link,i=o.includes(t);return l.createElement(l.Fragment,null,i?l.createElement(l.Fragment,null,l.createElement(n.Link,{to:c},l.createElement(r.Z,{chartType:t})),l.createElement("p",{className:"distributionSection sectionLogoCaption"},a)):l.createElement(l.Fragment,null,l.createElement("div",{className:"sectionLogoContainer"},l.createElement(n.Link,{to:c},l.createElement(r.Z,{chartType:t}),l.createElement("div",{className:"sectionLogoOverlay"},l.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.createElement("p",{className:"distributionSection sectionLogoCaption"},a)))}},1006:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(4839),r=a(6594),o=a(5444),c=a(8544),i=a(9474);function m(e){var t=e.title,a=e.description,m=e.chartType,s=c.c.filter((function(e){return e.id===m}))[0];return n.createElement(n.Fragment,null,n.createElement("div",{className:"titleAndDescription"},n.createElement("h1",{className:"mainTitle"},t),n.createElement("hr",{className:"smallHr"}),n.createElement(l.Z,null),n.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}),m&&n.createElement("div",{style:{marginTop:"10px"}},n.createElement(o.Link,{to:(0,i.y)(s.pythonURL)},n.createElement(r.Z,{size:"sm"},s.label+" section")),n.createElement("a",{href:s.dataToVizURL},n.createElement(r.Z,{size:"sm"},"About this chart")))))}},4787:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(7294),l=a(1006),r=a(3203),o=a(6187),c=a(7567),i=a(9869),m=a(5444),s=a(9935),u=a(458),d=a(6594);function p(){return n.createElement(r.Z,{title:"Cartogram",isTocEnabled:!0,seoDescription:"A collection of cartogram examples made with Python, coming with explanation and reproducible code"},n.createElement(l.Z,{title:"Cartogram",description:"<p>A <a href='https://www.data-to-viz.com/graph/cartogram.html'>cartogram</a> is a map in which each region size is distorded according to a numeric variable. Python allows to draw this kind of map thanks to the <code>Geopandas</code> and <code>Geoplot</code> libraries</p>"}),n.createElement(o.Z,null,n.createElement("h2",{id:"Geoplot"},"Cartogram with ",n.createElement("code",null,"GeoPlot")),n.createElement("p",null,"Oh no 😞, there is no example in this section yet 😞."),n.createElement("div",{style:{margin:"0 auto",padding:0}},n.createElement(m.Link,{to:"/choropleth-map-geopandas-python"},n.createElement(s.Z,{imgName:"choropleth-map-geopandas-python",caption:"Choropleth map of US counties with Python, Geopandas and Geoplot"}))),n.createElement(m.Link,{to:"/choropleth-map-geopandas-python"},n.createElement(d.Z,{size:"xl"},"Read post"))),n.createElement(u.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(o.Z,null,n.createElement(i.Z,{chartFamily:"map"}))),n.createElement(u.Z,null),n.createElement(o.Z,null,n.createElement(c.Z,null)),n.createElement(u.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-cartogram-js-9b025210c8ae985be997.js.map