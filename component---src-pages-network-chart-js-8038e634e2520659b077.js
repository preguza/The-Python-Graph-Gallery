(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"2Bqf":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));t("AK/e");var n=t("Wbzz"),r=t("q1tI"),o=t.n(r),l=t("NDdm"),c=t("qXiB").a.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function i(e){var a=e.chartType,t=e.caption,r=e.link,i=c.includes(a);return o.a.createElement(o.a.Fragment,null,i?o.a.createElement(o.a.Fragment,null,o.a.createElement(n.Link,{to:r},o.a.createElement(l.a,{chartType:a})),o.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"sectionLogoContainer"},o.a.createElement(n.Link,{to:r},o.a.createElement(l.a,{chartType:a}),o.a.createElement("div",{className:"sectionLogoOverlay"},o.a.createElement("div",{className:"sectionLogoOverlayText"},"+")))),o.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)))}},"2mCb":function(e,a,t){},"3Z9Z":function(e,a,t){"use strict";var n=t("k1TG"),r=t("8o2o"),o=t("TSYQ"),l=t.n(o),c=t("q1tI"),i=t.n(c),m=t("vUet"),s=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,o=e.className,c=e.noGutters,u=e.as,d=void 0===u?"div":u,h=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(m.a)(t,"row"),f=p+"-cols",E=[];return s.forEach((function(e){var a,t=h[e];delete h[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&E.push(""+f+n+"-"+a)})),i.a.createElement(d,Object(n.a)({ref:a},h,{className:l.a.apply(void 0,[o,p,c&&"no-gutters"].concat(E))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},"4/Vk":function(e,a,t){"use strict";t.d(a,"a",(function(){return w}));t("a4DA");var n=t("q1tI"),r=t.n(n),o=t("AkXV"),l=t("cWnB"),c=t("Wbzz"),i=t("qXiB"),m=t("jhdv"),s=(t("mnr7"),t("7vrA")),u=t("3Z9Z"),d=t("JI6e"),h=(t("2mCb"),t("9eSz")),p=t.n(h);function f(e){var a=e.imgName,t=e.caption,n=Object(c.useStaticQuery)("2246482915").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chartImageContainer"},r.a.createElement(p.a,{alt:a,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),r.a.createElement("div",{className:"chartImageOverlay"},r.a.createElement("div",{className:"chartImageOverlayText"},r.a.createElement("p",null,t))))):null}var E=t("gMBH");function g(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sponsorsBanner"},r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement(d.a,{md:3},r.a.createElement("a",{href:"https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650",title:"Datacamp",onClick:"trackOutboundLink('https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650'); return false;"},r.a.createElement(f,{imgName:"datacamp",caption:"Datacamp"}))),r.a.createElement(d.a,{md:3},r.a.createElement("a",{href:"https://365datascience.pxf.io/qRPNb",title:"365DataScience",onClick:"trackOutboundLink('https://365datascience.pxf.io/qRPNb'); return false;"},r.a.createElement(f,{imgName:"365_data_science",caption:"365 Data Science"}))),r.a.createElement(d.a,{md:3},r.a.createElement("a",{href:"https://www.dataquest.io/course/storytelling-data-visualization?utm_source=python%20graph%20gallery&utm_medium=banner&utm_content=storytelling%20with%20data",onClick:"trackOutboundLink('https://www.dataquest.io/course/storytelling-data-visualization?utm_source=python%20graph%20gallery&utm_medium=banner&utm_content=storytelling%20with%20data'); return false;"},r.a.createElement(f,{imgName:"data-vis-ad",caption:"Dataquest"}))),r.a.createElement(d.a,{md:3},r.a.createElement("a",{href:"https://gumroad.com/a/280032371/uTxEFw",title:"StackAbuse",onClick:"trackOutboundLink('https://gumroad.com/a/280032371/uTxEFw'); return false;"},r.a.createElement(f,{imgName:"stackabuse",caption:"Stack Abuse book"})))))),r.a.createElement(E.a,null))}function w(e){var a=e.title,t=e.description,n=e.chartType,s=i.a.filter((function(e){return e.id===n}))[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"titleAndDescription"},r.a.createElement("h1",{className:"mainTitle"},a),r.a.createElement("hr",{className:"smallHr"}),r.a.createElement(o.a,null),r.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),n&&r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement(c.Link,{to:Object(m.a)(s.pythonURL)},r.a.createElement(l.a,{size:"sm"},s.label+" section")),r.a.createElement("a",{href:s.dataToVizURL},r.a.createElement(l.a,{size:"sm"},"About this chart")))),r.a.createElement(g,null))}},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),r=t.n(n),o=t("eynx"),l=t("JI6e"),c=t("Wbzz");function i(e){var a=e.imgName,t=e.caption,n=e.linkTo;return r.a.createElement(l.a,{xs:12,md:4},r.a.createElement(c.Link,{to:n},r.a.createElement(o.a,{imgName:a,caption:t})))}},"9d5C":function(e,a,t){},"AK/e":function(e,a,t){},JI6e:function(e,a,t){"use strict";var n=t("k1TG"),r=t("8o2o"),o=t("TSYQ"),l=t.n(o),c=t("q1tI"),i=t.n(c),m=t("vUet"),s=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,o=e.className,c=e.as,u=void 0===c?"div":c,d=Object(r.a)(e,["bsPrefix","className","as"]),h=Object(m.a)(t,"col"),p=[],f=[];return s.forEach((function(e){var a,t,n,r=d[e];if(delete d[e],"object"==typeof r&&null!=r){var o=r.span;a=void 0===o||o,t=r.offset,n=r.order}else a=r;var l="xs"!==e?"-"+e:"";a&&p.push(!0===a?""+h+l:""+h+l+"-"+a),null!=n&&f.push("order"+l+"-"+n),null!=t&&f.push("offset"+l+"-"+t)})),p.length||p.push(h),i.a.createElement(u,Object(n.a)({},d,{ref:a,className:l.a.apply(void 0,[o].concat(p,f))}))}));u.displayName="Col",a.a=u},a4DA:function(e,a,t){},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("2mCb");var n=t("q1tI"),r=t.n(n),o=t("Wbzz"),l=t("9eSz"),c=t.n(l),i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){var a=e.imgName,t=e.caption;if(i.includes(a))return r.a.createElement("p",null,"TODO");var n=Object(o.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chartImageContainer"},r.a.createElement(c.a,{alt:a,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),r.a.createElement("div",{className:"chartImageOverlay"},r.a.createElement("div",{className:"chartImageOverlayText"},r.a.createElement("p",null,t))))):null}},mnr7:function(e,a,t){},pJaR:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t("9d5C");var n=t("q1tI"),r=t.n(n),o=t("3Z9Z"),l=t("JI6e"),c=t("2Bqf"),i=t("qXiB"),m=t("jhdv"),s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(e){var a=e.chartFamily,t=i.a.filter((function(e){return e.family===a})).map((function(e,a){var t=Object(m.a)(e.pythonURL);return r.a.createElement(l.a,{key:a,xs:4,md:2},r.a.createElement(c.a,{link:t,chartType:e.logo,caption:e.label}))}));return r.a.createElement("div",null,r.a.createElement("h2",{id:"Related charts",className:"sectionTitle "+a},null==s?void 0:s[a]),r.a.createElement(o.a,null,t))}},z5jZ:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t("q1tI"),r=t.n(n),o=t("4/Vk"),l=t("7oih"),c=t("7vrA"),i=t("6+GL"),m=t("3Z9Z"),s=t("59G+"),u=t("pJaR"),d=t("Wbzz"),h=t("gMBH"),p=t("cWnB");function f(){return r.a.createElement(l.a,{title:"Network chart",isTocEnabled:!0,seoDescription:"A collection of network chart examples made with Python, coming with explanation and reproducible code"},r.a.createElement(o.a,{title:"Network chart",description:"<p>A <a href='https://www.data-to-viz.com/graph/network.html'>Network diagram</a> (or chart, or graph) show interconnections between a set of entities. Each entity is represented by a node (or vertices). Connection between nodes are represented through links (or edges). This section mainly focuses on <code>NetworkX</code>, probably the best library for this kind of chart with <code>python</code>."}),r.a.createElement(c.a,null,r.a.createElement("h2",{id:"NetworkX"},"Network diagram with the ",r.a.createElement("code",null,"NetworkX")," library"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://networkx.org"},"NetworkX")," is a Python package for the creation, manipulation, and study of the structure, dynamics, and functions of complex networks.."),r.a.createElement("p",null,"The examples below will guide you through a migration dataset already discussed in ",r.a.createElement("a",{href:"https://www.data-to-viz.com/graph/chord.html"},"data-to-viz.com"),". It starts by describing the input dataset and the basic usage of the ",r.a.createElement("code",null,"Chord()")," function."),r.a.createElement("a",{href:"https://networkx.org"},r.a.createElement(p.a,{size:"sm"},"Official doc")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,null,r.a.createElement(s.a,{imgName:"320_Network_start_simple",caption:"Most basic network chart with Python and NetworkX",linkTo:"/320-basic-network-from-pandas-data-frame"}),r.a.createElement(s.a,{imgName:"321_Network_custom_look4",caption:"Custom network appearance: color, shape, size, links",linkTo:"/321-custom-networkx-graph-appearance"}),r.a.createElement(s.a,{imgName:"322_Network_layout4",caption:"Control the layout used for the node location",linkTo:"/322-network-layout-possibilities"}),r.a.createElement(s.a,{imgName:"323_Network_direction1",caption:"Manage directed and undirected networks by adding arrows",linkTo:"/323-directed-or-undirected-network"}),r.a.createElement(s.a,{imgName:"326_Network_background_color",caption:"Control the background color of a network chart",linkTo:"/326-background-colour-of-network-chart"})),r.a.createElement("br",null),r.a.createElement("p",null,"A common need when dealing with network charts is to map a numeric or categorical variable to the nodes or edges appearance. This is totally doable and adds some insight to the figure."),r.a.createElement(m.a,null,r.a.createElement(s.a,{imgName:"324_Network_mapcolor1",caption:"Map a continuous or categoric variable to nodes",linkTo:"/324-map-a-color-to-network-nodes"}),r.a.createElement(s.a,{imgName:"325_Network_mapcolorttoedge1",caption:"Map a color to edges",linkTo:"/325-map-colour-to-the-edges-of-a-network"}))),r.a.createElement(h.a,null),r.a.createElement(c.a,null,r.a.createElement("h2",{id:"Similarity matrix"},"Network chart from similarity matrix"),r.a.createElement("p",null,"Another commin task is to build a network chart from a correlation matrix. Let's say you have several numeric variables describing some items in a dataset. You can compute a similarity matrix and display it as a network chart. This process is described in the",r.a.createElement(d.Link,{to:"/327-network-from-correlation-matrix"},"post #327")," below."),r.a.createElement(m.a,null,r.a.createElement(s.a,{imgName:"327_Network_from_correlation",caption:"Network chart from correlation matrix with Python and NetworkX",linkTo:"/327-network-from-correlation-matrix"}))),r.a.createElement(h.a,null),r.a.createElement(c.a,null,r.a.createElement("h2",{id:"Graph-tool"},"Network diagram with ",r.a.createElement("code",null,"graph-tool")),r.a.createElement("p",null,"The ",r.a.createElement("a",{href:"https://graph-tool.skewed.de"},"graph tool")," library is a python library implemented in C++. It makes it highly efficient to draw networks containing many nodes. Graphics to come."),r.a.createElement("a",{href:"https://graph-tool.skewed.de"},r.a.createElement(p.a,{size:"sm"},"Official doc"))),r.a.createElement(h.a,null),r.a.createElement("div",{className:"greySection",id:"related"},r.a.createElement(c.a,null,r.a.createElement(u.a,{chartFamily:"flow"}))),r.a.createElement(h.a,null),r.a.createElement(c.a,null,r.a.createElement(i.a,null)),r.a.createElement(h.a,null))}}}]);
//# sourceMappingURL=component---src-pages-network-chart-js-8038e634e2520659b077.js.map