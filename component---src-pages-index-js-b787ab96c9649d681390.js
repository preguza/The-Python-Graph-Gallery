(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"2Bqf":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));t("AK/e");var n=t("Wbzz"),r=t("q1tI"),l=t.n(r),c=t("NDdm"),i=t("qXiB").a.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function o(e){var a=e.chartType,t=e.caption,r=e.link,o=i.includes(a);return l.a.createElement(l.a.Fragment,null,o?l.a.createElement(l.a.Fragment,null,l.a.createElement(n.Link,{to:r},l.a.createElement(c.a,{chartType:a})),l.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sectionLogoContainer"},l.a.createElement(n.Link,{to:r},l.a.createElement(c.a,{chartType:a}),l.a.createElement("div",{className:"sectionLogoOverlay"},l.a.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)))}},"2mCb":function(e,a,t){},"3Z9Z":function(e,a,t){"use strict";var n=t("k1TG"),r=t("8o2o"),l=t("TSYQ"),c=t.n(l),i=t("q1tI"),o=t.n(i),m=t("vUet"),s=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.noGutters,u=e.as,d=void 0===u?"div":u,p=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),h=Object(m.a)(t,"row"),f=h+"-cols",E=[];return s.forEach((function(e){var a,t=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&E.push(""+f+n+"-"+a)})),o.a.createElement(d,Object(n.a)({ref:a},p,{className:c.a.apply(void 0,[l,h,i&&"no-gutters"].concat(E))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},"4/Vk":function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));t("a4DA");var n=t("q1tI"),r=t.n(n),l=t("AkXV"),c=t("cWnB"),i=t("Wbzz"),o=t("qXiB"),m=t("jhdv"),s=(t("mnr7"),t("7vrA")),u=t("3Z9Z"),d=t("JI6e"),p=(t("2mCb"),t("9eSz")),h=t.n(p);function f(e){var a=e.imgName,t=e.caption,n=Object(i.useStaticQuery)("2246482915").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chartImageContainer"},r.a.createElement(h.a,{alt:a,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),r.a.createElement("div",{className:"chartImageOverlay"},r.a.createElement("div",{className:"chartImageOverlayText"},r.a.createElement("p",null,t))))):null}var E=t("gMBH");function y(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sponsorsBanner"},r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement(d.a,{md:3},r.a.createElement("a",{href:"https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650",title:"Datacamp",onClick:"trackOutboundLink('https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650'); return false;"},r.a.createElement(f,{imgName:"datacamp",caption:"Datacamp"}))),r.a.createElement(d.a,{md:3},r.a.createElement("a",{href:"https://365datascience.pxf.io/qRPNb",title:"365DataScience",onClick:"trackOutboundLink('https://365datascience.pxf.io/qRPNb'); return false;"},r.a.createElement(f,{imgName:"365_data_science",caption:"365 Data Science"}))),r.a.createElement(d.a,{md:3},r.a.createElement("a",{href:"https://www.dataquest.io/course/storytelling-data-visualization?utm_source=python%20graph%20gallery&utm_medium=banner&utm_content=storytelling%20with%20data",onClick:"trackOutboundLink('https://www.dataquest.io/course/storytelling-data-visualization?utm_source=python%20graph%20gallery&utm_medium=banner&utm_content=storytelling%20with%20data'); return false;"},r.a.createElement(f,{imgName:"data-vis-ad",caption:"Dataquest"}))),r.a.createElement(d.a,{md:3},r.a.createElement("a",{href:"https://gumroad.com/a/280032371/uTxEFw",title:"StackAbuse",onClick:"trackOutboundLink('https://gumroad.com/a/280032371/uTxEFw'); return false;"},r.a.createElement(f,{imgName:"stackabuse",caption:"Stack Abuse book"})))))),r.a.createElement(E.a,null))}function v(e){var a=e.title,t=e.description,n=e.chartType,s=o.a.filter((function(e){return e.id===n}))[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"titleAndDescription"},r.a.createElement("h1",{className:"mainTitle"},a),r.a.createElement("hr",{className:"smallHr"}),r.a.createElement(l.a,null),r.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),n&&r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement(i.Link,{to:Object(m.a)(s.pythonURL)},r.a.createElement(c.a,{size:"sm"},s.label+" section")),r.a.createElement("a",{href:s.dataToVizURL},r.a.createElement(c.a,{size:"sm"},"About this chart")))),r.a.createElement(y,null))}},"9d5C":function(e,a,t){},"AK/e":function(e,a,t){},JI6e:function(e,a,t){"use strict";var n=t("k1TG"),r=t("8o2o"),l=t("TSYQ"),c=t.n(l),i=t("q1tI"),o=t.n(i),m=t("vUet"),s=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.as,u=void 0===i?"div":i,d=Object(r.a)(e,["bsPrefix","className","as"]),p=Object(m.a)(t,"col"),h=[],f=[];return s.forEach((function(e){var a,t,n,r=d[e];if(delete d[e],"object"==typeof r&&null!=r){var l=r.span;a=void 0===l||l,t=r.offset,n=r.order}else a=r;var c="xs"!==e?"-"+e:"";a&&h.push(!0===a?""+p+c:""+p+c+"-"+a),null!=n&&f.push("order"+c+"-"+n),null!=t&&f.push("offset"+c+"-"+t)})),h.length||h.push(p),o.a.createElement(u,Object(n.a)({},d,{ref:a,className:c.a.apply(void 0,[l].concat(h,f))}))}));u.displayName="Col",a.a=u},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var n=t("q1tI"),r=t.n(n),l=t("4/Vk"),c=t("7oih"),i=t("pJaR"),o=t("7vrA"),m=t("6+GL"),s=t("gMBH");function u(){return r.a.createElement(c.a,{title:"Python Graph Gallery",seoDescription:"The Python Graph Gallery displays hundreds of charts made with Python, always with explanation and reproduciible code"},r.a.createElement(l.a,{title:"The Python Graph Gallery",description:"<p>Welcome to the Python Graph Gallery, a collection of hundreds of charts made with <code>Python</code>. Charts are organized in about 40 sections and always come with their associated reproducible code. They are mostly made with <code>Matplotlib</code> and <code>Seaborn</code> but other library like <code>Plotly</code> are sometimes used.</p>"}),r.a.createElement(o.a,null,r.a.createElement(i.a,{chartFamily:"distribution"}),r.a.createElement(i.a,{chartFamily:"correlation"}),r.a.createElement(i.a,{chartFamily:"ranking"}),r.a.createElement(i.a,{chartFamily:"partOfAWhole"}),r.a.createElement(i.a,{chartFamily:"evolution"}),r.a.createElement(i.a,{chartFamily:"map"}),r.a.createElement(i.a,{chartFamily:"flow"}),r.a.createElement(i.a,{chartFamily:"general"}),r.a.createElement(s.a,null),r.a.createElement(m.a,null),r.a.createElement(s.a,null)))}},a4DA:function(e,a,t){},mnr7:function(e,a,t){},pJaR:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t("9d5C");var n=t("q1tI"),r=t.n(n),l=t("3Z9Z"),c=t("JI6e"),i=t("2Bqf"),o=t("qXiB"),m=t("jhdv"),s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(e){var a=e.chartFamily,t=o.a.filter((function(e){return e.family===a})).map((function(e,a){var t=Object(m.a)(e.pythonURL);return r.a.createElement(c.a,{key:a,xs:4,md:2},r.a.createElement(i.a,{link:t,chartType:e.logo,caption:e.label}))}));return r.a.createElement("div",null,r.a.createElement("h2",{id:"Related charts",className:"sectionTitle "+a},null==s?void 0:s[a]),r.a.createElement(l.a,null,t))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b787ab96c9649d681390.js.map