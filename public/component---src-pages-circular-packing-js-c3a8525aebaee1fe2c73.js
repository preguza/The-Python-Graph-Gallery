(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"2Bqf":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));t("AK/e");var n=t("Wbzz"),l=t("q1tI"),r=t.n(l),c=t("NDdm"),i=t("qXiB").a.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function o(e){var a=e.chartType,t=e.caption,l=e.link,o=i.includes(a);return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(r.a.Fragment,null,r.a.createElement(n.Link,{to:l},r.a.createElement(c.a,{chartType:a})),r.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sectionLogoContainer"},r.a.createElement(n.Link,{to:l},r.a.createElement(c.a,{chartType:a}),r.a.createElement("div",{className:"sectionLogoOverlay"},r.a.createElement("div",{className:"sectionLogoOverlayText"},"+")))),r.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)))}},"2mCb":function(e,a,t){},"3Z9Z":function(e,a,t){"use strict";var n=t("k1TG"),l=t("8o2o"),r=t("TSYQ"),c=t.n(r),i=t("q1tI"),o=t.n(i),m=t("vUet"),s=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.noGutters,u=e.as,d=void 0===u?"div":u,h=Object(l.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(m.a)(t,"row"),f=p+"-cols",E=[];return s.forEach((function(e){var a,t=h[e];delete h[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&E.push(""+f+n+"-"+a)})),o.a.createElement(d,Object(n.a)({ref:a},h,{className:c.a.apply(void 0,[r,p,i&&"no-gutters"].concat(E))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},"4/Vk":function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));t("a4DA");var n=t("q1tI"),l=t.n(n),r=t("AkXV"),c=t("cWnB"),i=t("Wbzz"),o=t("qXiB"),m=t("jhdv"),s=(t("mnr7"),t("7vrA")),u=t("3Z9Z"),d=t("JI6e"),h=(t("2mCb"),t("9eSz")),p=t.n(h);function f(e){var a=e.imgName,t=e.caption,n=Object(i.useStaticQuery)("2246482915").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"chartImageContainer"},l.a.createElement(p.a,{alt:a,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),l.a.createElement("div",{className:"chartImageOverlay"},l.a.createElement("div",{className:"chartImageOverlayText"},l.a.createElement("p",null,t))))):null}var E=t("gMBH");function g(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sponsorsBanner"},l.a.createElement(s.a,null,l.a.createElement(u.a,null,l.a.createElement(d.a,{md:3},l.a.createElement("a",{href:"https://www.dataquest.io/course/storytelling-data-visualization?utm_source=python%20graph%20gallery&utm_medium=banner&utm_content=storytelling%20with%20data",onClick:"trackOutboundLink('https://www.dataquest.io/course/storytelling-data-visualization?utm_source=python%20graph%20gallery&utm_medium=banner&utm_content=storytelling%20with%20data'); return false;"},l.a.createElement(f,{imgName:"data-vis-ad",caption:"Dataquest"}))),l.a.createElement(d.a,{md:3},l.a.createElement("a",{href:"https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650",title:"Datacamp",onClick:"trackOutboundLink('https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650'); return false;"},l.a.createElement(f,{imgName:"datacamp",caption:"Datacamp"}))),l.a.createElement(d.a,{md:3},l.a.createElement("a",{href:"https://365datascience.pxf.io/qRPNb",title:"365DataScience",onClick:"trackOutboundLink('https://365datascience.pxf.io/qRPNb'); return false;"},l.a.createElement(f,{imgName:"365_data_science",caption:"365 Data Science"}))),l.a.createElement(d.a,{md:3},l.a.createElement("a",{href:"https://gumroad.com/a/280032371/uTxEFw",title:"StackAbuse",onClick:"trackOutboundLink('https://gumroad.com/a/280032371/uTxEFw'); return false;"},l.a.createElement(f,{imgName:"stackabuse",caption:"Stack Abuse book"})))))),l.a.createElement(E.a,null))}function v(e){var a=e.title,t=e.description,n=e.chartType,s=o.a.filter((function(e){return e.id===n}))[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"titleAndDescription"},l.a.createElement("h1",{className:"mainTitle"},a),l.a.createElement("hr",{className:"smallHr"}),l.a.createElement(r.a,null),l.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),n&&l.a.createElement("div",{style:{marginTop:"10px"}},l.a.createElement(i.Link,{to:Object(m.a)(s.pythonURL)},l.a.createElement(c.a,{size:"sm"},s.label+" section")),l.a.createElement("a",{href:s.dataToVizURL},l.a.createElement(c.a,{size:"sm"},"About this chart")))),l.a.createElement(g,null))}},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),l=t.n(n),r=t("eynx"),c=t("JI6e"),i=t("Wbzz");function o(e){var a=e.imgName,t=e.caption,n=e.linkTo;return l.a.createElement(c.a,{xs:12,md:4},l.a.createElement(i.Link,{to:n},l.a.createElement(r.a,{imgName:a,caption:t})))}},"9d5C":function(e,a,t){},"AK/e":function(e,a,t){},JI6e:function(e,a,t){"use strict";var n=t("k1TG"),l=t("8o2o"),r=t("TSYQ"),c=t.n(r),i=t("q1tI"),o=t.n(i),m=t("vUet"),s=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.as,u=void 0===i?"div":i,d=Object(l.a)(e,["bsPrefix","className","as"]),h=Object(m.a)(t,"col"),p=[],f=[];return s.forEach((function(e){var a,t,n,l=d[e];if(delete d[e],"object"==typeof l&&null!=l){var r=l.span;a=void 0===r||r,t=l.offset,n=l.order}else a=l;var c="xs"!==e?"-"+e:"";a&&p.push(!0===a?""+h+c:""+h+c+"-"+a),null!=n&&f.push("order"+c+"-"+n),null!=t&&f.push("offset"+c+"-"+t)})),p.length||p.push(h),o.a.createElement(u,Object(n.a)({},d,{ref:a,className:c.a.apply(void 0,[r].concat(p,f))}))}));u.displayName="Col",a.a=u},a4DA:function(e,a,t){},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("2mCb");var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=t("9eSz"),i=t.n(c),o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){var a=e.imgName,t=e.caption;if(o.includes(a))return l.a.createElement("p",null,"TODO");var n=Object(r.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"chartImageContainer"},l.a.createElement(i.a,{alt:a,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),l.a.createElement("div",{className:"chartImageOverlay"},l.a.createElement("div",{className:"chartImageOverlayText"},l.a.createElement("p",null,t))))):null}},mnr7:function(e,a,t){},pJaR:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t("9d5C");var n=t("q1tI"),l=t.n(n),r=t("3Z9Z"),c=t("JI6e"),i=t("2Bqf"),o=t("qXiB"),m=t("jhdv"),s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(e){var a=e.chartFamily,t=o.a.filter((function(e){return e.family===a})).map((function(e,a){var t=Object(m.a)(e.pythonURL);return l.a.createElement(c.a,{key:a,xs:4,md:2},l.a.createElement(i.a,{link:t,chartType:e.logo,caption:e.label}))}));return l.a.createElement("div",null,l.a.createElement("h2",{id:"Related charts",className:"sectionTitle "+a},null==s?void 0:s[a]),l.a.createElement(r.a,null,t))}},tc0Y:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var n=t("q1tI"),l=t.n(n),r=t("4/Vk"),c=t("7oih"),i=t("7vrA"),o=t("6+GL"),m=t("3Z9Z"),s=t("59G+"),u=t("pJaR"),d=t("Wbzz"),h=t("Hrqu"),p=t("eynx"),f=t("cWnB"),E=t("gMBH");function g(){return l.a.createElement(c.a,{title:"Circular Packing",isTocEnabled:!0,seoDescription:"A collection of circular packing examples made with Python, coming with explanation and reproducible code"},l.a.createElement(r.a,{title:"Circular Packing",description:"<p>A <a href='https://www.data-to-viz.com/graph/treemap.html'>treemap</a> displays hierarchical data as a set of nested rectangles. Each group is represented by a rectangle, which area is proportional to its value. In <code>Python</code>, the <code>squarify</code> library allows to compute the rectangle positions and plot it.</p>"}),l.a.createElement("div",{className:"greySection",id:"related"},l.a.createElement(i.a,null,l.a.createElement("h2",{id:"Circlify"},"ℹ ️ A note on the ",l.a.createElement("code",null,"Circlify")," package"),l.a.createElement("p",null,"The ",l.a.createElement("code",null,"circlify")," package is a pure Python implementation of a circle packing layout algorithm. It has been developped by ",l.a.createElement("a",{href:"https://github.com/elmotec"},"Jerome Lecomte")," and lives on ",l.a.createElement("a",{href:"https://github.com/elmotec/circlify"},"github"),". 🙏🙏 "),l.a.createElement("p",null,"You can install it with ",l.a.createElement("code",null,"pip install circlify"),"."),l.a.createElement("a",{href:"https://github.com/elmotec/circlify"},l.a.createElement(f.a,{size:"sm"},"Circlify documentation")))),l.a.createElement(E.a,null),l.a.createElement(i.a,null,l.a.createElement("h2",{id:"One level of hierarchy"},l.a.createElement(h.b,null),"One level of hierarchy"),l.a.createElement("p",null,l.a.createElement("code",null,"Circlify")," can work without a hierarchical structure, i.e. with just a set of numeric varialbles that will be each displayed as a bubble. Note that the package just compute the position and size of each bubble. Once tha\"t's done, ",l.a.createElement("code",null,"matplotlib")," is used to make the chart itself with usual functions."),l.a.createElement(m.a,null,l.a.createElement(s.a,{imgName:"circular-packing-1-level-hierarchy1",caption:"Most basic circle packing",linkTo:"/circular-packing-1-level-hierarchy"}),l.a.createElement(s.a,{imgName:"circular-packing-1-level-hierarchy2",caption:"Add colors and labels",linkTo:"/circular-packing-1-level-hierarchy"}),l.a.createElement(s.a,{imgName:"circular-packing-1-level-hierarchy3",caption:"control space between bubbles",linkTo:"/circular-packing-1-level-hierarchy"}))),l.a.createElement(E.a,null),l.a.createElement(i.a,null,l.a.createElement("h2",{id:"Several levels"},l.a.createElement(h.b,null),"Several levels of hierarchy"),l.a.createElement("p",null,l.a.createElement("code",null,"Circlify")," also works from a hierarchical structure. Bubbles representing the bottom of the hierarchy are encapsulated into higher hierarchy bubbles and so on. Note that the process is a bit more tedious here, but still doable thanks to ",l.a.createElement("code",null,"matplotlib"),"."),l.a.createElement("div",{style:{maxWidth:"800px",margin:"0 auto",padding:30}},l.a.createElement(d.Link,{to:"/circular-packing-several-levels-of-hierarchy"},l.a.createElement(p.a,{imgName:"circular-packing-several-levels-of-hierarchy-large",caption:"Circular packing with several levels of hierarchy with Python and the circlize library"})))),l.a.createElement(E.a,null),l.a.createElement("div",{className:"greySection",id:"related"},l.a.createElement(i.a,null,l.a.createElement(u.a,{chartFamily:"partOfAWhole"}))),l.a.createElement(E.a,null),l.a.createElement(i.a,null,l.a.createElement(o.a,null)),l.a.createElement(E.a,null))}}}]);
//# sourceMappingURL=component---src-pages-circular-packing-js-c3a8525aebaee1fe2c73.js.map