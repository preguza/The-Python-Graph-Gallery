"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[4198],{9935:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(5444),r=a(1496),c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){var t=e.imgName,a=e.caption;if(c.includes(t))return n.createElement("p",null,"TODO");var i=(0,l.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return i?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.Z,{alt:a,fluid:i.node.childImageSharp.fluid,className:"chartImageImg"}),n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},7834:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(9935),r=a(7408),c=a(5444);function i(e){var t=e.imgName,a=e.caption,i=e.linkTo;return n.createElement(r.Z,{xs:12,md:4},n.createElement(c.Link,{to:i},n.createElement(l.Z,{imgName:t,caption:a})))}},8253:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),l=a(1006),r=a(3203),c=a(6187),i=a(7567),o=a(994),m=a(7834),h=a(9869),s=a(5444),u=a(3727),p=a(7408),d=a(3026),E=a(9935),g=a(458);function f(){return n.createElement(r.Z,{title:"Area chart",isTocEnabled:!0,seoDescription:"A collection of area chart examples made with Python, coming with explanation and reproducible code"},n.createElement(l.Z,{title:"Area Chart",description:"<p>An <a href='https://www.data-to-viz.com/graph/area.html'>area chart</a> is really similar to a <a href='http://python-graph-gallery.com/line-chart/'>line chart</a>, except that the area between the x axis and the line is filled in with color or shading. It represents the evolution of a numeric variable. This section starts by considering <code>matplotlib</code> and <code>seaborn</code> as tools to build area charts. It then shows a few other options for timeseries.</p>"}),n.createElement(c.Z,null,n.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.createElement(o.Z,{className:"align-items-center"},n.createElement(p.Z,{md:6},n.createElement("p",null,"There are 2 main ways to build an area chart with Matplotlib. In both case it requires 2 numeric vectors of values as input."),n.createElement("ul",null,n.createElement("li",null,"The ",n.createElement("code",null,"fill_between()")," function"),n.createElement("li",null,"The ",n.createElement("code",null,"stackplot()")," function that is more useful for ",n.createElement(s.Link,{to:"/stacked-area-plot"},"stacked area")," charts"))),n.createElement(p.Z,{md:6},n.createElement(s.Link,{to:"/240-basic-area-chart"},n.createElement(E.Z,{imgName:"240_basic_area_chart",caption:"The most basic area chart one can make with python and matplotlib"})))),n.createElement(d.Z,null,"# library\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Create data\nx=range(1,6)\ny=[1,4,6,8,4]\n\n# Area plot\nplt.fill_between(x, y)\nplot.show()\n")),n.createElement(g.Z,null),n.createElement(c.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(u.rS,null),"Area chart with ",n.createElement("code",null,"Matplotlib")),n.createElement("p",null,n.createElement("code",null,"Matplotlib")," is a great fit to build an area chart thanks to its ",n.createElement("code",null,"fill_between()")," function. Here are a few examples explaining its basics and how to apply some common customization."),n.createElement(o.Z,null,n.createElement(m.Z,{imgName:"240_basic_area_chart",caption:"The most basic area chart one can make with python and matplotlib",linkTo:"/240-basic-area-chart"}),n.createElement(m.Z,{imgName:"241_custom_area_chart1",caption:"Control chart color (Matplotlib)",linkTo:"/241-improve-area-chart"}),n.createElement(m.Z,{imgName:"241_custom_area_chart2",caption:"Control line color",linkTo:"/241-improve-area-chart"})),n.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},n.createElement(s.Link,{to:"/243-area-chart-with-white-grid"},n.createElement(E.Z,{imgName:"243_another_area_chart",caption:"Area chart with custom grid"})))),n.createElement(g.Z,null),n.createElement(c.Z,null,n.createElement("h2",{id:"Seaborn"},n.createElement(u._I,null),"Area chart with ",n.createElement("code",null,"Seaborn")),n.createElement("p",null,n.createElement("code",null,"Seaborn")," is another great alternative to build an area chart with ",n.createElement("code",null,"python"),". The below examples show how to start basic, apply usual customization, and use the small multiple technique for when you have several groups to compare."),n.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},n.createElement(s.Link,{to:"/242-area-chart-and-faceting"},n.createElement(E.Z,{imgName:"242_area_chart_and_faceting",caption:"Area chart with small multiple, seaborn"})))),n.createElement(g.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(c.Z,null,n.createElement(h.Z,{chartFamily:"evolution"}))),n.createElement(g.Z,null),n.createElement(c.Z,null,n.createElement(i.Z,null)),n.createElement(g.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-area-plot-js-efc88f3055046000b7f2.js.map