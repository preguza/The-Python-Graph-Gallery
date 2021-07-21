(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"2Bqf":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));t("AK/e");var n=t("Wbzz"),r=t("q1tI"),l=t.n(r),i=t("NDdm"),c=t("qXiB").a.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function o(e){var a=e.chartType,t=e.caption,r=e.link,o=c.includes(a);return l.a.createElement(l.a.Fragment,null,o?l.a.createElement(l.a.Fragment,null,l.a.createElement(n.Link,{to:r},l.a.createElement(i.a,{chartType:a})),l.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sectionLogoContainer"},l.a.createElement(n.Link,{to:r},l.a.createElement(i.a,{chartType:a}),l.a.createElement("div",{className:"sectionLogoOverlay"},l.a.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)))}},"2mCb":function(e,a,t){},"3Z9Z":function(e,a,t){"use strict";var n=t("k1TG"),r=t("8o2o"),l=t("TSYQ"),i=t.n(l),c=t("q1tI"),o=t.n(c),s=t("vUet"),m=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.noGutters,u=e.as,h=void 0===u?"div":u,p=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),d=Object(s.a)(t,"row"),f=d+"-cols",E=[];return m.forEach((function(e){var a,t=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&E.push(""+f+n+"-"+a)})),o.a.createElement(h,Object(n.a)({ref:a},p,{className:i.a.apply(void 0,[l,d,c&&"no-gutters"].concat(E))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},"4/Vk":function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("a4DA");var n=t("q1tI"),r=t.n(n),l=t("AkXV"),i=t("cWnB"),c=t("Wbzz"),o=t("qXiB"),s=t("jhdv");function m(e){var a=e.title,t=e.description,n=e.chartType,m=o.a.filter((function(e){return e.id===n}))[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"titleAndDescription"},r.a.createElement("h1",{className:"mainTitle"},a),r.a.createElement("hr",{className:"smallHr"}),r.a.createElement(l.a,null),r.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),n&&r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement(c.Link,{to:Object(s.a)(m.pythonURL)},r.a.createElement(i.a,{size:"sm"},m.label+" section")),r.a.createElement("a",{href:m.dataToVizURL},r.a.createElement(i.a,{size:"sm"},"About this chart")))))}},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),r=t.n(n),l=t("eynx"),i=t("JI6e"),c=t("Wbzz");function o(e){var a=e.imgName,t=e.caption,n=e.linkTo;return r.a.createElement(i.a,{xs:12,md:4},r.a.createElement(c.Link,{to:n},r.a.createElement(l.a,{imgName:a,caption:t})))}},"9d5C":function(e,a,t){},"AK/e":function(e,a,t){},F44R:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var n=t("q1tI"),r=t.n(n),l=t("4/Vk"),i=t("7oih"),c=t("7vrA"),o=t("6+GL"),s=t("3Z9Z"),m=t("59G+"),u=t("pJaR"),h=t("Wbzz"),p=t("Hrqu"),d=t("JI6e"),f=t("eynx"),E=t("gMBH"),g=t("cWnB");function b(){return r.a.createElement(i.a,{title:"Streamgraph",isTocEnabled:!0,seoDescription:"A collection of streamgraph examples made with Python, coming with explanation and reproducible code"},r.a.createElement(l.a,{title:"Streamgraph",description:"<p>A <a href='https://www.data-to-viz.com/graph/streamgraph.html'>streamgraph</a> is a variation of the stacked area graph. It displays the evolution of a numeric value for several groups. Each group is displayed around a central axis and edges are rounded resulting in a flowing and organic shape.</p>"}),r.a.createElement(c.a,null,r.a.createElement("h2",{id:"Matplotlib"},r.a.createElement(p.b,null),"Streamgraph with ",r.a.createElement("code",null,"Matplotlib")),r.a.createElement("p",null,r.a.createElement("code",null,"Matplotlib")," can build streamgraphs but there isn't any prebuilt function for it so be ready for quite a lot of code. 🍿"),r.a.createElement("p",null,"The process starts pretty much like for a ",r.a.createElement(h.Link,{to:"/stacked-area-plot"},"stacked area graph"),". The ",r.a.createElement("code",null,"baseline")," parameter of the ",r.a.createElement("code",null,"stackplot()")," function is used to place groups around the X axis. The tricky part is to interpolate points between each value of the X axis to get the smooth visual. This is done thanks to the ",r.a.createElement("code",null,"scipy.interpolate")," library."),r.a.createElement(h.Link,{to:"/streamchart-basic-matplotlib"},r.a.createElement(g.a,{size:"sm"},"Read more")),r.a.createElement(s.a,null,r.a.createElement(m.a,{imgName:"streamchart-basic-matplotlib1",caption:"Everything starts with a stacked area chart with a custom baseline",linkTo:"/streamchart-basic-matplotlib"}),r.a.createElement(m.a,{imgName:"streamchart-basic-matplotlib2",caption:"Apply some smoothing to get a stream chart",linkTo:"/streamchart-basic-matplotlib"}),r.a.createElement(m.a,{imgName:"streamchart-basic-matplotlib3",caption:"Some more smoothing control using grids",linkTo:"/streamchart-basic-matplotlib"}),r.a.createElement(m.a,{imgName:"streamchart-basic-matplotlib4",caption:"Customize the color palette",linkTo:"/streamchart-basic-matplotlib"}))),r.a.createElement(E.a,null),r.a.createElement(c.a,null,r.a.createElement("h2",{id:"Altair"},"Streamgraph with ",r.a.createElement("code",null,"Altair")),r.a.createElement("p",null,"Altair is a lesser know python library for datavizualization."),r.a.createElement("p",null,"Fortunately, the ",r.a.createElement("code",null,"pandas")," library has a ",r.a.createElement("code",null,"divide()")," function that allows to apply this normalization easily."),r.a.createElement(s.a,null,r.a.createElement(m.a,{imgName:"streamchart-basic-altair",caption:"Basic streamgraph with Altair and Python",linkTo:"/255-percentage-stacked-area-chart"}))),r.a.createElement(E.a,null),r.a.createElement(c.a,null,r.a.createElement("h2",{id:"From the web"},r.a.createElement(p.b,null),"From the web"),r.a.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",r.a.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The ",r.a.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a ",r.a.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),r.a.createElement(s.a,null,r.a.createElement(d.a,{xs:12,md:12},r.a.createElement(h.Link,{to:"/web-streamchart-with-matplotlib"},r.a.createElement(f.a,{imgName:"web-streamchart-with-matplotlib",caption:"A streamchart made with Python, Matplotlib and the scipy.stats package."}))))),r.a.createElement(E.a,null),r.a.createElement("div",{className:"greySection",id:"related"},r.a.createElement(c.a,null,r.a.createElement(u.a,{chartFamily:"evolution"}))),r.a.createElement(E.a,null),r.a.createElement(c.a,null,r.a.createElement(o.a,null)),r.a.createElement(E.a,null))}},JI6e:function(e,a,t){"use strict";var n=t("k1TG"),r=t("8o2o"),l=t("TSYQ"),i=t.n(l),c=t("q1tI"),o=t.n(c),s=t("vUet"),m=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.as,u=void 0===c?"div":c,h=Object(r.a)(e,["bsPrefix","className","as"]),p=Object(s.a)(t,"col"),d=[],f=[];return m.forEach((function(e){var a,t,n,r=h[e];if(delete h[e],"object"==typeof r&&null!=r){var l=r.span;a=void 0===l||l,t=r.offset,n=r.order}else a=r;var i="xs"!==e?"-"+e:"";a&&d.push(!0===a?""+p+i:""+p+i+"-"+a),null!=n&&f.push("order"+i+"-"+n),null!=t&&f.push("offset"+i+"-"+t)})),d.length||d.push(p),o.a.createElement(u,Object(n.a)({},h,{ref:a,className:i.a.apply(void 0,[l].concat(d,f))}))}));u.displayName="Col",a.a=u},a4DA:function(e,a,t){},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));t("2mCb");var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),i=t("9eSz"),c=t.n(i),o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function s(e){var a=e.imgName,t=e.caption;if(o.includes(a))return r.a.createElement("p",null,"TODO");var n=Object(l.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chartImageContainer"},r.a.createElement(c.a,{alt:t,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),r.a.createElement("div",{className:"chartImageOverlay"},r.a.createElement("div",{className:"chartImageOverlayText"},r.a.createElement("p",null,t))))):null}},pJaR:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t("9d5C");var n=t("q1tI"),r=t.n(n),l=t("3Z9Z"),i=t("JI6e"),c=t("2Bqf"),o=t("qXiB"),s=t("jhdv"),m={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(e){var a=e.chartFamily,t=o.a.filter((function(e){return e.family===a})).map((function(e,a){var t=Object(s.a)(e.pythonURL);return r.a.createElement(i.a,{key:a,xs:4,md:2},r.a.createElement(c.a,{link:t,chartType:e.logo,caption:e.label}))}));return r.a.createElement("div",null,r.a.createElement("h2",{id:"Related charts",className:"sectionTitle "+a},null==m?void 0:m[a]),r.a.createElement(l.a,null,t))}}}]);
//# sourceMappingURL=component---src-pages-streamchart-js-817d9ae79264970b977e.js.map