"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[1416],{9935:function(e,t,l){l.d(t,{Z:function(){return r}});var o=l(7294),a=l(5444),n=l(1496),i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function r(e){var t=e.imgName,l=e.caption;if(i.includes(t))return o.createElement("p",null,"TODO");var r=(0,a.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return r?o.createElement(o.Fragment,null,o.createElement("div",{className:"chartImageContainer"},o.createElement(n.Z,{alt:l,fluid:r.node.childImageSharp.fluid,className:"chartImageImg"}),o.createElement("div",{className:"chartImageOverlay"},o.createElement("div",{className:"chartImageOverlayText"},o.createElement("p",null,l))))):null}},7834:function(e,t,l){l.d(t,{Z:function(){return r}});var o=l(7294),a=l(9935),n=l(7408),i=l(5444);function r(e){var t=e.imgName,l=e.caption,r=e.linkTo;return o.createElement(n.Z,{xs:12,md:4},o.createElement(i.Link,{to:r},o.createElement(a.Z,{imgName:t,caption:l})))}},1987:function(e,t,l){l.r(t),l.d(t,{default:function(){return f}});var o=l(7294),a=l(1006),n=l(3203),i=l(6187),r=l(7567),c=l(994),p=l(7834),m=l(9869),s=l(5444),h=l(3727),d=l(9935),u=l(7408),g=l(3026),E=l(458);function f(){return o.createElement(n.Z,{title:"Lollipop chart",isTocEnabled:!0,seoDescription:"A collection of lollipop plot examples made with Python, coming with explanation and reproducible code"},o.createElement(a.Z,{title:"Lollipop plot",description:"<p>A <a href='https://www.data-to-viz.com/graph/lollipop.html'>lollipop chart</a> is an alernative to the more usual <a href='https://www.python-graph-gallery.com/barplot'>barplot</a>. <code>Python</code> allows to build lollipops thanks to the <code>matplotlib</code> library, as shown in the examples below. The strategy here is to use the <code>stem()</code> function or to hack the <code>vline()</code> function depending on your input format.</p>"}),o.createElement(i.Z,null,o.createElement("h2",{id:"Quick"},"⏱ Quick start"),o.createElement(c.Z,{className:"align-items-center"},o.createElement(u.Z,{md:6},o.createElement("p",null,"A ",o.createElement("code",null,"lollipop plot")," displays each element of a dataset as a segment and a circle."),o.createElement("p",null," This is doable with ",o.createElement("code",null,"python")," and ",o.createElement("code",null,"Matplotlib")," thanks to the ",o.createElement("code",null,"stem()")," function that accepts a data frame as input.🔥")),o.createElement(u.Z,{md:6},o.createElement(s.Link,{to:"/180-basic-lollipop-plot"},o.createElement(d.Z,{imgName:"180_Basic_lolipop_plot2",caption:"Most basic lollipop plot with Python & Matplotlib."})))),o.createElement(g.Z,null,"# Create a dataframe\nimport pandas as pd\ndf = pd.DataFrame({'group':list(map(chr, range(65, 85))), 'values':np.random.uniform(size=20) })\n\n# Reorder it following the values:\nordered_df = df.sort_values(by='values')\nmy_range=range(1,len(df.index)+1)\n\n# Make the plot\nplt.stem(ordered_df['values'])\nplt.xticks( my_range, ordered_df['group'])\n")),o.createElement(E.Z,null),o.createElement(i.Z,null,o.createElement("h2",{id:"Matplotlib"},o.createElement(h.rS,null),"Lollipop plot with ",o.createElement("code",null,"Matplotlib")),o.createElement("p",null,o.createElement("code",null,"Matplotlib")," is probably the most famous and flexible python library for data visualization. It is appropriate to build any kind of chart, including the lollipop plot thanks to its ",o.createElement("code",null,"stem()")," function."),o.createElement(c.Z,null,o.createElement(p.Z,{imgName:"180_Basic_lolipop_plot",caption:"Most basic lollipop. Will get you started with any kind of input format",linkTo:"/180-basic-lollipop-plot"}),o.createElement(p.Z,{imgName:"181_custom_lolliplot_2",caption:"Basic circle customizations: shape, size, color and more.",linkTo:"/181-custom-lollipop-plot"}),o.createElement(p.Z,{imgName:"181_custom_lolliplot_3",caption:"Change lollipop baseline position.",linkTo:"/181-custom-lollipop-plot"}),o.createElement(p.Z,{imgName:"182_vertical_lolipop_plot",caption:"Horizontal lollipop chart (more readable labels).",linkTo:"/182-vertical-lollipop-plot"}),o.createElement(p.Z,{imgName:"183_highlight_a_group_in_lolipop_plot",caption:"Highlight some specific groups in a lollipop.",linkTo:"/183-highlight-a-group-in-lollipop"}),o.createElement(p.Z,{imgName:"184_lolipop_plot_with_2_groups",caption:"Cleveland chart: a lollipop chart with 2 subgroups displayed under each row.",linkTo:"/184-lollipop-plot-with-2-groups"}),o.createElement(p.Z,{imgName:"185_lolipop_plot_with_conditional_color",caption:"Lollipop chart with conditional colors.",linkTo:"/185-lollipop-plot-with-conditional-color"}))),o.createElement(E.Z,null),o.createElement(i.Z,null,o.createElement("h2",{id:"From the web"},o.createElement(h.rS,null),"From the web"),o.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",o.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The ",o.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a ",o.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),o.createElement(c.Z,null,o.createElement(u.Z,{xs:12,md:6},o.createElement(s.Link,{to:"/web-lollipop-plot-with-python-mario-kart-64-world-records"},o.createElement(d.Z,{imgName:"web-lollipop-plot-with-python-mario-kart-64-world-records-square",caption:"A highly customized lollipop chart made with Python and Matplotlib. A work by Cédric Scherer to visualize some Mario Kart World records."}))),o.createElement(u.Z,{xs:12,md:6},o.createElement(s.Link,{to:"/web-lollipop-plot-with-python-the-office"},o.createElement(d.Z,{imgName:"web-lollipop-plot-with-python-the-office-square",caption:"A highly customized lollipop chart made with Python and Matplotlib to display a timeseries."}))),o.createElement(u.Z,{xs:12,md:6},o.createElement(s.Link,{to:"/web-circular-lollipop-plot-with-matplotlib"},o.createElement(d.Z,{imgName:"web-circular-lollipop-plot-with-matplotlib-square",caption:"A circular lollipop plot with customized layout, great color palette and in circle legend."}))))),o.createElement(E.Z,null),o.createElement("div",{className:"greySection",id:"related"},o.createElement(i.Z,null,o.createElement(m.Z,{chartFamily:"ranking"}))),o.createElement(E.Z,null),o.createElement(i.Z,null,o.createElement(r.Z,null)),o.createElement(E.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-lollipop-plot-js-3aaf31f674206cf9f0b3.js.map