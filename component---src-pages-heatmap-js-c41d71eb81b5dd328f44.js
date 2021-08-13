"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[1223],{9935:function(e,a,t){t.d(a,{Z:function(){return i}});var n=t(7294),o=t(5444),r=t(1496),l=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){var a=e.imgName,t=e.caption;if(l.includes(a))return n.createElement("p",null,"TODO");var i=(0,o.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return i?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.Z,{alt:t,fluid:i.node.childImageSharp.fluid,className:"chartImageImg"}),n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,t))))):null}},7834:function(e,a,t){t.d(a,{Z:function(){return i}});var n=t(7294),o=t(9935),r=t(7408),l=t(5444);function i(e){var a=e.imgName,t=e.caption,i=e.linkTo;return n.createElement(r.Z,{xs:12,md:4},n.createElement(l.Link,{to:i},n.createElement(o.Z,{imgName:a,caption:t})))}},5750:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var n=t(7294),o=t(1006),r=t(3203),l=t(6187),i=t(7567),m=t(994),c=t(7834),h=t(9869),s=t(5444),p=t(3727),d=t(7408),u=t(6594),E=t(3026),g=t(9935),f=t(458);function b(){return n.createElement(r.Z,{title:"Heatmap",isTocEnabled:!0,seoDescription:"A collection of heatmap examples made with Python, coming with explanation and reproducible code"},n.createElement(o.Z,{title:"Heatmap",description:"<p>A <a href='https://www.data-to-viz.com/graph/heatmap.html'>heatmap</a> is a graphical representation of data where each value of a matrix is represented as a color. This page explains how to build a heatmap with <code>Python</code>, with an emphasis on the <code>Seaborn</code> library.</p>"}),n.createElement(l.Z,null,n.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.createElement(m.Z,{className:"align-items-center"},n.createElement(d.Z,{md:6},n.createElement("p",null,"If you're in a rush and want to make a heatmap with ",n.createElement("code",null,"Python")," as quick as possible, have a look to this code snippet that uses the ",n.createElement("code",null,"heatmap()")," function of ",n.createElement("code",null,"Seaborn"),".🔥")),n.createElement(d.Z,{md:6},n.createElement(s.Link,{to:"/90-heatmaps-with-various-input-format"},n.createElement(g.Z,{imgName:"90_Input_format_for_heatmap1",caption:"Basic heatmap with Python and Seaborn from various data input formats."})))),n.createElement(E.Z,null,'# library\nimport seaborn as sns\nimport pandas as pd\nimport numpy as np\n\n# Create a dataset\ndf = pd.DataFrame(np.random.random((5,5)), columns=["a","b","c","d","e"])\n\n# Default heatmap\np1 = sns.heatmap(df)\n'),n.createElement("br",null)),n.createElement(f.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Seaborn"},n.createElement(p._I,null),"Heatmap with ",n.createElement("code",null,"Seaborn")),n.createElement("p",null,n.createElement("code",null,"Seaborn")," is a python library allowing to make better charts easily thanks to its ",n.createElement("code",null,"heatmap()")," function. This section starts with a post describing the basic usage of the function based on any kind of data input. Next it will guide you through the different ways to customize the chart, like ",n.createElement(s.Link,{to:""},"controling color")," and ",n.createElement(s.Link,{to:""},"data normalization"),"."),n.createElement(m.Z,null,n.createElement(c.Z,{imgName:"90_Input_format_for_heatmap1",caption:"The heatmap() function and how to apply it to any kind of data input",linkTo:"/90-heatmaps-with-various-input-format"}),n.createElement(c.Z,{imgName:"90_Input_format_for_heatmap2bis",caption:"Plotting only one half of the heatmap",linkTo:"/90-heatmaps-with-various-input-format"}),n.createElement(c.Z,{imgName:"91_Custom_heat_control_lines",caption:"Seaborn heatmap customization: grid",linkTo:"/91-customize-seaborn-heatmap"}),n.createElement(c.Z,{imgName:"91_Custom_heat_annotate_cells",caption:"Seaborn heatmap customization: show numbers in cell",linkTo:"/91-customize-seaborn-heatmap"}),n.createElement(c.Z,{imgName:"91_Custom_heat_hide_colorbar",caption:"Seaborn heatmap customization: hide the color bar",linkTo:"/91-customize-seaborn-heatmap"}),n.createElement(c.Z,{imgName:"92_Control_color_heatmap1",caption:"Color customization: how to select other color palettes and more",linkTo:"/92-control-color-in-seaborn-heatmaps"}))),n.createElement(f.Z,null),n.createElement("div",{className:"greySection"},n.createElement(l.Z,null,n.createElement("h2",{id:"Warning"},"⚠️ Python heatmap and normalization"),n.createElement("p",null,"Consider the left heatmap below. The second column from the left (",n.createElement("code",null,"variable 1"),") has very high values compared to others. As a result, the variation existing in other variables is hidden."),n.createElement("p",null,"Highlighting the ",n.createElement("code",null,"variable 1")," can be the main message of your chart. But if you're interested in other variable variations as well, you probably want to apply some normalization as shown on the right heatmap."),n.createElement("p",null,"If you want to no more about normalization, check ",n.createElement("a",{href:"https://www.data-to-viz.com/graph/heatmap.html"},"data-to-viz.com"),". If you want some python code to do it, ",n.createElement(s.Link,{to:"/94-use-normalization-on-seaborn-heatmap"},"it's here"),"."),n.createElement(m.Z,null,n.createElement(c.Z,{imgName:"94_Heatmap_Normalization_Seaborn1",caption:"A heatmap that probably needs to be normalized.",linkTo:"/94-use-normalization-on-seaborn-heatmap"}),n.createElement(c.Z,{imgName:"94_Heatmap_Normalization_Seaborn2",caption:"The exact same heatmap after normalization",linkTo:"/94-use-normalization-on-seaborn-heatmap"})),n.createElement(s.Link,{to:"/94-use-normalization-on-seaborn-heatmap"},n.createElement(u.Z,{size:"sm"},"Code and explanation")))),n.createElement(f.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Clustering"},"❄ Python, Heatmap and Clustering"),n.createElement("p",null,"It is very common to apply some ",n.createElement("code",null,"clustering")," techniques on a heatmap. The idea is to group items that have the same kind of pattern for their numeric variables. 💡"),n.createElement("p",null,"Usually, it is recommended to display a ",n.createElement("code",null,"dendrogram")," on top of the heatmap to explain how the clusterization has been performed. Last but not least, it can be useful to compare the grouping we got with an expected structure, shown as an additional color."),n.createElement(s.Link,{to:"/dendrogram"},n.createElement(u.Z,{size:"sm"},"Related: dendrogram section")),n.createElement(s.Link,{to:"/405-dendrogram-with-heatmap-and-coloured-leaves"},n.createElement(u.Z,{size:"sm"},"Code and explanation")),n.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},n.createElement(s.Link,{to:"/405-dendrogram-with-heatmap-and-coloured-leaves"},n.createElement(g.Z,{imgName:"405_Dendro_and_heatmap_and_rowcolor",caption:"A seaborn heatmap with clusterization and dendrogram applied"}))),n.createElement(m.Z,null,n.createElement(c.Z,{imgName:"404_Dendro_and_heatmap3",caption:"Most basic heatmap with dendrogram with seaborn",linkTo:"/404-dendrogram-with-heat-map"}),n.createElement(c.Z,{imgName:"404_Dendro_and_heatmap9",caption:"Change color palette",linkTo:"/404-dendrogram-with-heat-map"}),n.createElement(c.Z,{imgName:"404_Dendro_and_heatmap11",caption:"Learn how to normalize data in the heatmap, avoiding that kind of result",linkTo:"/404-dendrogram-with-heat-map"}))),n.createElement(f.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(l.Z,null,n.createElement(h.Z,{chartFamily:"correlation"}))),n.createElement(f.Z,null),n.createElement(l.Z,null,n.createElement(i.Z,null)),n.createElement(f.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-heatmap-js-c41d71eb81b5dd328f44.js.map