"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[4426],{9935:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),o=a(5444),n=a(1496),i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function r(e){var t=e.imgName,a=e.caption;if(i.includes(t))return l.createElement("p",null,"TODO");var r=(0,o.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return r?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(n.Z,{alt:a,fluid:r.node.childImageSharp.fluid,className:"chartImageImg"}),l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},7834:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),o=a(9935),n=a(7408),i=a(5444);function r(e){var t=e.imgName,a=e.caption,r=e.linkTo;return l.createElement(n.Z,{xs:12,md:4},l.createElement(i.Link,{to:r},l.createElement(o.Z,{imgName:t,caption:a})))}},17:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var l=a(7294),o=a(1006),n=a(3203),i=a(6187),r=a(7567),c=a(994),m=a(7834),s=a(9869),u=a(5444),p=a(3727),d=a(7408),h=a(3026),b=a(9935),E=a(458),g=a(6594);function f(){return l.createElement(n.Z,{title:"Seaborn",isTocEnabled:!0,seoDescription:"A collection of chart examples made with Seaborn, coming with explanation and reproducible code"},l.createElement(o.Z,{title:"Seaborn",description:"<p><code>Seaborn</code> is a python graphic library built on top of <a href='https://www.python-graph-gallery.com/matplotlib'>matplotlib</a>. It allows to make your charts prettier with less code. This page provides general seaborn tips. Visit individual chart sections if you need a specific type of plot. Note that most of the <a href='https://www.python-graph-gallery.com/matplotlib'>matplotlib customization options</a> also work for <code>seaborn</code>.</p > "}),l.createElement(i.Z,null,l.createElement("h2",{id:"Quick start"},"⏱ Quick start"),l.createElement(c.Z,{className:"align-items-center"},l.createElement(d.Z,{md:6},l.createElement("p",null,l.createElement("code",null,"seaborn")," offers some specific functions for almost every kind of charts. For instance, ",l.createElement("code",null,"regplot()")," can be used to build a ",l.createElement(u.Link,{to:"/scatter-plot"},"scatterplot"),"."),l.createElement("p",null,"Note that no additional code is needed to get the nice grey background with grid and some good defaults for the dots 😍. That's 4 lines of code for a pretty decent chart 🔥!"),l.createElement(u.Link,{to:"/scatter-plot"},l.createElement(g.Z,{size:"sm"},"Scatterplot section"))),l.createElement(d.Z,{md:6},l.createElement(u.Link,{to:"/40-basic-scatterplot-seaborn"},l.createElement(b.Z,{imgName:"40_Basic_Scatterplot_seaborn",caption:"Basic boxplot with Python and Seaborn from various data input formats."})))),l.createElement(h.Z,null,'# library & dataset\nimport seaborn as sns\ndf = sns.load_dataset(\'iris\')\n\n# use the function regplot to make a scatterplot\nsns.regplot(x=df["sepal_length"], y=df["sepal_width"])\n'),l.createElement("br",null)),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Lexicon"},l.createElement(p.rS,null),"Basic vocabulary"),l.createElement("p",null,"Since ",l.createElement("code",null,"seaborn")," is built on top of ",l.createElement("code",null,"matplotlib"),", most of its concepts and vocabulary are still correct. The figure below describes the anatomy of a ",l.createElement("code",null,"matplotlib")," charts. It names all the main components, names that you need to know to understand the documentation properly."),l.createElement("p",null,"⚠️ ",l.createElement("u",null,"Disclaimer"),": this figure comes from the very complete ",l.createElement("a",{href:"https://matplotlib.org/faq/usage_faq.html#coding-styles"},"matplotlib documentation"),". Have a look at it for a thorough explanation on how this library works."),l.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},l.createElement(b.Z,{imgName:"matplotlib_vocabulary",caption:"Anatomy of a matplotlib chart: all the basic vocabulary you need to know to understand the documentation properly"})),l.createElement("a",{href:"https://matplotlib.org/faq/usage_faq.html#coding-styles"},l.createElement(g.Z,{size:"sm"},"Matplotlib doc"))),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Main functions"},"🧐 Main ",l.createElement("code",null,"seaborn")," functions"),l.createElement("p",null,"Here is an overview of the most common ",l.createElement("code",null,"seaborn")," functions. It provides a glimpse of they're made for, what are their parameters and links to their official doc."),l.createElement("p",null,l.createElement("code",null,"Todo")," 😞")),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Title"},l.createElement(p._I,null),"Customizing titles with Seaborn"),l.createElement("p",null,"Since ",l.createElement("code",null,"Seaborn")," is built on top of ",l.createElement("code",null,"Matplotlib"),", title customization works pretty much the same. A seaborn chart (like the one you get with ",l.createElement("code",null,"sns.boxplot()"),") actually returns a ",l.createElement("code",null,"matplotlib")," axes instance."),l.createElement("p",null,"This means that you will not be able to use the usual ",l.createElement("code",null,"pyplot")," method ",l.createElement("code",null,"plt.title()"),", but will have to use the corresponding argument for an ",l.createElement("code",null,"axes")," which is ",l.createElement("code",null,"ax.set_title()"),". This is described more in depth in this dedicated post:"),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"seaborn-title-customization",caption:"Add a title on a seaborn chart",linkTo:"/seaborn-title-customization"})),l.createElement("br",null),l.createElement("br",null),l.createElement("p",null,"Once you've understood how to add a title, customizing it should work the same as for ",l.createElement("code",null,"matplotlib"),":"),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"190_Custom_title6",caption:"Python chart with subtitle and custom color",linkTo:"/190-custom-matplotlib-title"}),l.createElement(m.Z,{imgName:"190_Custom_title7",caption:"Add a math formula in title with Matplotlib",linkTo:"/190-custom-matplotlib-title"}),l.createElement(m.Z,{imgName:"190_Custom_title5",caption:"Control the height of the matplotlib title",linkTo:"/190-custom-matplotlib-title"}))),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Axis"},l.createElement(p._I,null),"Customizing axis"),l.createElement("p",null,"The exact same concept than explained for titles above applies for axes. So please read the following blogpost about axis customization with matplotlib and apply it to your seaborn chart."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"191_Custom_axis1",caption:"Change the axis title and its appearance",linkTo:"/191-custom-axis-on-matplotlib-chart"}),l.createElement(m.Z,{imgName:"191_Custom_axis2",caption:"Control axis labels and ticks look",linkTo:"/191-custom-axis-on-matplotlib-chart"}),l.createElement(m.Z,{imgName:"191_Custom_axis6",caption:"Control axis limit with the xlim() function",linkTo:"/191-custom-axis-on-matplotlib-chart"}))),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Themes"},"🌈 Seaborn built-in themes"),l.createElement("p",null,"Seaborn comes with a few built-in themes. Those themes are available through the ",l.createElement("code",null,"set_style()")," function. Here is an overview of what is offered."),l.createElement("p",null,l.createElement("code",null,"Todo")," 😞")),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Gallery"},"⭐ Seaborn graph gallery"),l.createElement("p",null,"If you're interested in a specific type of chart like ",l.createElement(u.Link,{to:"/boxplot"},"boxplot")," or ",l.createElement(u.Link,{to:"heatmap"},"heatmap"),", I suggest to visit the ",l.createElement(u.Link,{to:"/"},"dedicated section")," of the gallery. In case you're interested in what ",l.createElement("code",null,"seaborn")," can do, here is a glimpse of what's offered in the gallery 🧐."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"82_seaborn_jointplot1",caption:"Histogram can be added around a scatterplot to show each variable distributions",linkTo:"/82-marginal-plot-with-seaborn"}),l.createElement(m.Z,{imgName:"74_density_plot_multi_variables",caption:"Density chart with several displayed groups",linkTo:"/74-density-plot-of-several-variables"}),l.createElement(m.Z,{imgName:"43_seaborn_map_color_to_a_avariable3",caption:"Color dots according to a group",linkTo:"/43-use-categorical-variable-to-color-scatterplot-seaborn"}),l.createElement(m.Z,{imgName:"58_Number_of_obs_on_violinplot_seaborn",caption:"Show the number of observations per group",linkTo:"/58-show-number-of-observation-on-violinplot"}),l.createElement(m.Z,{imgName:"73_Control_bandwidth_densityplot_Seaborn2",caption:"Changed the bandwidth used to compute the density",linkTo:"/73-control-bandwidth-of-seaborn-density-plot"}),l.createElement(m.Z,{imgName:"91_Custom_heat_annotate_cells",caption:"Seaborn heatmap customization: show numbers in cell",linkTo:"/91-customize-seaborn-heatmap"}),l.createElement(m.Z,{imgName:"25_Histogram_of_several_variables1",caption:"Compare the distribution of several groups on the same chart",linkTo:"/25-histogram-with-several-variables-seaborn"}),l.createElement(m.Z,{imgName:"80_bivariate_kernel_density_plot2",caption:"Basic contourplot with seaborn.",linkTo:"/80-contour-plot-with-seaborn"}),l.createElement(m.Z,{imgName:"111_Correlogram_custom4",caption:"Apply colors to each group and customized the scatterplot",linkTo:"/111-custom-correlogram"}),l.createElement(m.Z,{imgName:"85_2D_density_plot_matplotlib_1",caption:"Basic 2d density chart.",linkTo:"/85-density-plot-with-matplotlib"}),l.createElement(m.Z,{imgName:"25_Histogram_of_several_variables2",caption:"Use small multiple to compare the distribution of several groups",linkTo:"/25-histogram-with-several-variables-seaborn"}),l.createElement(m.Z,{imgName:"82_seaborn_jointplot6",caption:"Histogram can be added around a 2d density chart to show x and y variable distributions",linkTo:"/82-marginal-plot-with-seaborn"}),l.createElement(m.Z,{imgName:"51_Horizontal_violinplot_Seaborn",caption:"Make your violin chart horizontal to make labels more readable",linkTo:"/51-horizontal-violinplot"}),l.createElement(m.Z,{imgName:"132_Matplotlib-connected-scatterplot",caption:"Basic connected scatterplot with Python and Seaborn.",linkTo:"/132-basic-connected-scatterplot"}),l.createElement(m.Z,{imgName:"92_Control_color_heatmap1",caption:"Color customization: how to select other color palettes and more",linkTo:"/92-control-color-in-seaborn-heatmaps"}))),l.createElement(E.Z,null),l.createElement(E.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(i.Z,null,l.createElement(s.Z,{chartFamily:"evolution"}))),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement(r.Z,null)),l.createElement(E.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-seaborn-js-252e5c0fa5d835a08caa.js.map