"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[5868],{7408:function(e,t,n){var a=n(7462),l=n(3366),r=n(5900),o=n.n(r),c=n(7294),i=n(9541),s=["bsPrefix","className","as"],m=["xl","lg","md","sm","xs"],u=c.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,u=e.as,p=void 0===u?"div":u,d=(0,l.Z)(e,s),f=(0,i.vE)(n,"col"),h=[],E=[];return m.forEach((function(e){var t,n,a,l=d[e];if(delete d[e],"object"==typeof l&&null!=l){var r=l.span;t=void 0===r||r,n=l.offset,a=l.order}else t=l;var o="xs"!==e?"-"+e:"";t&&h.push(!0===t?""+f+o:""+f+o+"-"+t),null!=a&&E.push("order"+o+"-"+a),null!=n&&E.push("offset"+o+"-"+n)})),h.length||h.push(f),c.createElement(p,(0,a.Z)({},d,{ref:t,className:o().apply(void 0,[r].concat(h,E))}))}));u.displayName="Col",t.Z=u},994:function(e,t,n){var a=n(7462),l=n(3366),r=n(5900),o=n.n(r),c=n(7294),i=n(9541),s=["bsPrefix","className","noGutters","as"],m=["xl","lg","md","sm","xs"],u=c.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,u=e.noGutters,p=e.as,d=void 0===p?"div":p,f=(0,l.Z)(e,s),h=(0,i.vE)(n,"row"),E=h+"-cols",v=[];return m.forEach((function(e){var t,n=f[e];delete f[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&v.push(""+E+a+"-"+t)})),c.createElement(d,(0,a.Z)({ref:t},f,{className:o().apply(void 0,[r,h,u&&"no-gutters"].concat(v))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},9869:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),l=n(994),r=n(7408),o=n(1831),c=n(8544),i=n(9474),s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){var t=e.chartFamily,n=c.c.filter((function(e){return e.family===t})).map((function(e,t){var n=(0,i.y)(e.pythonURL);return a.createElement(r.Z,{key:t,xs:4,md:2},a.createElement(o.Z,{link:n,chartType:e.logo,caption:e.label}))}));return a.createElement("div",null,a.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==s?void 0:s[t]),a.createElement(l.Z,null,n))}},1831:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(5444),l=n(7294),r=n(583),o=n(8544).c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function c(e){var t=e.chartType,n=e.caption,c=e.link,i=o.includes(t);return l.createElement(l.Fragment,null,i?l.createElement(l.Fragment,null,l.createElement(a.Link,{to:c},l.createElement(r.Z,{chartType:t})),l.createElement("p",{className:"distributionSection sectionLogoCaption"},n)):l.createElement(l.Fragment,null,l.createElement("div",{className:"sectionLogoContainer"},l.createElement(a.Link,{to:c},l.createElement(r.Z,{chartType:t}),l.createElement("div",{className:"sectionLogoOverlay"},l.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.createElement("p",{className:"distributionSection sectionLogoCaption"},n)))}},1006:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(4839),r=n(6594),o=n(5444),c=n(8544),i=n(9474);function s(e){var t=e.title,n=e.description,s=e.chartType,m=c.c.filter((function(e){return e.id===s}))[0];return a.createElement(a.Fragment,null,a.createElement("div",{className:"titleAndDescription"},a.createElement("h1",{className:"mainTitle"},t),a.createElement("hr",{className:"smallHr"}),a.createElement(l.Z,null),a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:n}}),s&&a.createElement("div",{style:{marginTop:"10px"}},a.createElement(o.Link,{to:(0,i.y)(m.pythonURL)},a.createElement(r.Z,{size:"sm"},m.label+" section")),a.createElement("a",{href:m.dataToVizURL},a.createElement(r.Z,{size:"sm"},"About this chart")))))}},1776:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(7294),l=n(1006),r=n(3203),o=n(6187),c=n(7567),i=n(9869),s=n(458);function m(){return a.createElement(r.Z,{title:"Stacked",isTocEnabled:!0,seoDescription:"A collection of stacked barplot examples made with Python, coming with explanation and reproducible code"},a.createElement(l.Z,{title:"Stacked Barplot",description:"<p>This page has been moved to the <a href='https://www.python-graph-gallery.com/barplot'>barplot section</a> of the gallery. Have a look!"}),a.createElement(s.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(o.Z,null,a.createElement(i.Z,{chartFamily:"ranking"}))),a.createElement(s.Z,null),a.createElement(o.Z,null,a.createElement(c.Z,null)),a.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-stacked-barplot-js-a6461895a28a982de856.js.map