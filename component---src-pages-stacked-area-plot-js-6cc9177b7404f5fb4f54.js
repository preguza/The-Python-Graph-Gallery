"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[3302],{9935:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(5444),r=a(1496),c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){var t=e.imgName,a=e.caption;if(c.includes(t))return n.createElement("p",null,"TODO");var o=(0,l.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return o?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.Z,{alt:a,fluid:o.node.childImageSharp.fluid,className:"chartImageImg"}),n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},7834:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(9935),r=a(7408),c=a(5444);function o(e){var t=e.imgName,a=e.caption,o=e.linkTo;return n.createElement(r.Z,{xs:12,md:4},n.createElement(c.Link,{to:o},n.createElement(l.Z,{imgName:t,caption:a})))}},8375:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var n=a(7294),l=a(1006),r=a(3203),c=a(6187),o=a(7567),i=a(994),s=a(7834),m=a(9869),h=a(5444),d=a(3727),u=a(7408),p=a(3026),E=a(9935),g=a(458),k=a(6594);function y(){return n.createElement(r.Z,{title:"Stacked area chart",isTocEnabled:!0,seoDescription:"A collection of stacked area chart examples made with Python, coming with explanation and reproducible code"},n.createElement(l.Z,{title:"Stacked area Chart",description:"<p>A <a href='https://www.data-to-viz.com/graph/stackedarea.html'>stacked area chart</a> displays the evolution of a numeric variable for several groups of a dataset. Each group is displayed on top of each other, making it easy to read the evolution of the total, but hard to read each group value accurately. In python, stacked area charts are mainly done thanks to the <code>stackplot()</code> function</p>"}),n.createElement(c.Z,null,n.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.createElement(i.Z,{className:"align-items-center"},n.createElement(u.Z,{md:6},n.createElement("p",null,"Here is a quick start code snippet to demo how the ",n.createElement("code",null,"stackplot()")," function of ",n.createElement("code",null,"matplotlib")," works."),n.createElement("p",null,"Note that here each groups are provided in its own vector of values. The ",n.createElement(h.Link,{to:"/250-basic-stacked-area-chart"},"basic stacked area")," blog post explains how to use the function from any type of data format.")),n.createElement(u.Z,{md:6},n.createElement(h.Link,{to:"/250-basic-stacked-area-chart"},n.createElement(E.Z,{imgName:"250_basic_stacked_area_chart",caption:"The most basic stacked area chart one can make with python and matplotlib"})))),n.createElement(p.Z,null,"# library\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Create data\nx=range(1,6)\ny1=[1,4,6,8,9]\ny2=[2,2,7,10,12]\ny3=[2,8,5,10,6]\n\n# Basic stacked area chart.\nplt.stackplot(x,y1, y2, y3, labels=['A','B','C'])\nplt.legend(loc='upper left')\n")),n.createElement(g.Z,null),n.createElement("div",{className:"greySection",id:"warning"},n.createElement(c.Z,null,n.createElement("h2",{id:"Warning"},"⚠️ The issue with stacking"),n.createElement("p",null,"Stacked area charts must be used with care since they suffer a number of caveats. They are appropriate to study the evolution of the whole and the relative proportions of each group, but not to study the evolution of each individual group."),n.createElement("p",null,"For instance, it is pretty hard to understand how the green group evolves on the chart below. Can you spot if its value is increasing, decreasing or stable?"),n.createElement("a",{href:"https://www.data-to-viz.com/caveat/stacking.html"},n.createElement(k.Z,{size:"sm"},"Read more")),n.createElement("div",{style:{maxWidth:"400px",margin:"0 auto",padding:30}},n.createElement("a",{href:"https://www.data-to-viz.com/caveat/stacking.html"},n.createElement(E.Z,{imgName:"issue-with-stacking",caption:"It is hard to see how the green group evolves."}))))),n.createElement(g.Z,null),n.createElement(c.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(d.rS,null),"Stacked Area chart with ",n.createElement("code",null,"Matplotlib")),n.createElement("p",null,n.createElement("code",null,"Matplotlib")," is the most common way to build a stacked area chart with Python. The examples below start by explaining to basics of the ",n.createElement("code",null,"stackplot()")," function. The also describe the most common type of customization like changing colors, controling group order and more."),n.createElement(i.Z,null,n.createElement(s.Z,{imgName:"250_basic_stacked_area_chart",caption:"Most basic stacked area chart",linkTo:"/250-basic-stacked-area-chart"}),n.createElement(s.Z,{imgName:"251_seaborn_style_on_stacked_area_chart",caption:"Apply seaborn style on the matplotlib stacked area chart",linkTo:"/251-stacked-area-chart-with-seaborn-style"}),n.createElement(s.Z,{imgName:"253_color_and_stacked_area_chart2",caption:"Control area colors",linkTo:"/253-control-the-color-in-stacked-area-chart"}),n.createElement(s.Z,{imgName:"242_area_chart_and_faceting",caption:"Area chart and small multiple",linkTo:"/242-area-chart-and-faceting"}))),n.createElement(g.Z,null),n.createElement("div",{className:"greySection",id:"tip"},n.createElement(c.Z,null,n.createElement("h2",{id:"Workaround"},"💡 The ",n.createElement("code",null,"baseline")," parameter"),n.createElement("p",null,"It is important to note that the ",n.createElement("code",null,"stackplot()")," function of ",n.createElement("code",null,"matplotlib")," has a",n.createElement("code",null,"baseline")," parameter. This parameter controls how groups are displayed around the x axis, what allows to mimic a ",n.createElement(h.Link,{to:"/streamchart"},"streamgraph"),"."),n.createElement(h.Link,{to:"/252-baseline-options-for-stacked-area-chart"},n.createElement(k.Z,{size:"sm"},"Read more")),n.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},n.createElement(h.Link,{to:"/252-baseline-options-for-stacked-area-chart"},n.createElement(E.Z,{imgName:"252_baseline_and_stacked_area_chart",caption:"It is hard to see how the green group evolves."}))))),n.createElement(g.Z,null),n.createElement(c.Z,null,n.createElement("h2",{id:"Percent stacked"},n.createElement(d.rS,null),"Percent Stacked Area chart with ",n.createElement("code",null,"Matplotlib")),n.createElement("p",null,"A variation of the stacked area graph is the percent stacked area graph where the value of every groups are normalized at each time stamp. It allows to study the percentage of each group in the whole more efficiently."),n.createElement("p",null,"Fortunately, the ",n.createElement("code",null,"pandas")," library has a ",n.createElement("code",null,"divide()")," function that allows to apply this normalization easily."),n.createElement(i.Z,null,n.createElement(s.Z,{imgName:"255_percent_stacked_area_chart",caption:"Basic percent stacked area chart",linkTo:"/255-percentage-stacked-area-chart"}))),n.createElement(g.Z,null),n.createElement(c.Z,null,n.createElement("h2",{id:"Pandas"},n.createElement(d.JK,null),"Stacked Area chart with ",n.createElement("code",null,"Pandas")),n.createElement("p",null,n.createElement("code",null,"Pandas")," is mainly useful to normalize your dataset and build a stacked area chart. Surprisingly, it also provides a ",n.createElement("code",null,"plot.area()"),"that can be handy to build a stacked area chart."),n.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},n.createElement(h.Link,{to:"/254-pandas-stacked-area-chart"},n.createElement(E.Z,{imgName:"254_pandas_stacked_area_chart2",caption:"Stacked area chart with Pandas"})))),n.createElement(g.Z,null),n.createElement(c.Z,null,n.createElement("h2",{id:"From the web"},n.createElement(d.rS,null),"From the web"),n.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",n.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The ",n.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a ",n.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),n.createElement(i.Z,null,n.createElement(u.Z,{xs:12,md:12},n.createElement(h.Link,{to:"/web-line-chart-with-labels-at-line-end"},n.createElement(E.Z,{imgName:"web-line-chart-with-labels-at-line-end",caption:"Not a stacked area but a line chart. But shows how to add labels at the end of each group with matplotlib. Definitely better than using a legend!"}))))),n.createElement(g.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(c.Z,null,n.createElement(m.Z,{chartFamily:"evolution"}))),n.createElement(g.Z,null),n.createElement(c.Z,null,n.createElement(o.Z,null)),n.createElement(g.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-stacked-area-plot-js-6cc9177b7404f5fb4f54.js.map