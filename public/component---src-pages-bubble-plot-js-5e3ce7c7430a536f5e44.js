(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"4l/g":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var l=a("q1tI"),n=a.n(l),o=a("4/Vk"),r=a("7oih"),i=a("7vrA"),c=a("6+GL"),m=a("3Z9Z"),b=a("59G+"),u=a("pJaR"),s=a("Wbzz"),p=a("Hrqu"),h=a("JI6e"),d=a("ZJrt"),E=a("eynx"),g=a("gMBH");function w(){return n.a.createElement(r.a,{title:"Bubble plot",isTocEnabled:!0,seoDescription:"A collection of bubble chart examples made with Python, coming with explanation and reproducible code"},n.a.createElement(o.a,{title:"Bubble plot",description:"<p>A <a href='https://www.data-to-viz.com/graph/bubble.html'>bubble plot</a> is a <a href='https://www.python-graph-gallery.com/scatter-plot'>scatterplot</a> where the circle size is mapped to the value of a third numeric variable. This section shows many bubble plots made with <code>Python</code>, using both the <code>Matplotlib</code> and <code>Seaborn</code> libraries.</p>"}),n.a.createElement(g.a,null),n.a.createElement(i.a,null,n.a.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.a.createElement(m.a,{className:"align-items-center"},n.a.createElement(h.a,{md:6},n.a.createElement("p",null,"The ",n.a.createElement("code",null,"scatterplot()")," function of ",n.a.createElement("code",null,"seaborn")," also allows to build bubble charts. Indeed, it has a ",n.a.createElement("code",null,"size")," parameter that controls circle size according to a numeric variable of the dataset.🔥")),n.a.createElement(h.a,{md:6},n.a.createElement(s.Link,{to:"/bubble-plot-with-seaborn"},n.a.createElement(E.a,{imgName:"bubble-plot-with-seaborn",caption:"Basic bubble chart with Python and Seaborn."})))),n.a.createElement(d.a,null,'# libraries\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nfrom gapminder import gapminder # data set\n\n# data\ndata = gapminder.loc[gapminder.year == 2007]\n\n# use the scatterplot function to build the bubble map\nsns.scatterplot(data=data, x="gdpPercap", y="lifeExp", size="pop", legend=False, sizes=(20, 2000))\n\n# show the graph\nplt.show()\n'),n.a.createElement("br",null)),n.a.createElement(g.a,null),n.a.createElement(i.a,null,n.a.createElement("h2",{id:"Seaborn"},n.a.createElement(p.e,null),"Bubble plot with ",n.a.createElement("code",null,"Seaborn")),n.a.createElement("p",null,n.a.createElement("code",null,"Seaborn")," is the best tool to quickly build a quality bubble chart. The example below are based on the famous ",n.a.createElement("code",null,"gapminder")," dataset that shows the relationship between gdp per capita, life expectancy and population of world countries."),n.a.createElement("p",null,"The examples below start simple by calling the ",n.a.createElement("code",null,"scatterplot()")," function with the minimum set of parameters. It then show how to change bubble colors to represent a fourth variable, improve general styling, tweak the legend and more."),n.a.createElement(m.a,null,n.a.createElement(b.a,{imgName:"bubble-plot-with-seaborn",caption:"Basic bubble chart with Python and Seaborn.",linkTo:"/bubble-plot-with-seaborn"}))),n.a.createElement(g.a,null),n.a.createElement(i.a,null,n.a.createElement("h2",{id:"Matplotlib"},n.a.createElement(p.b,null),"Bubble plot with ",n.a.createElement("code",null,"Matplotlib")),n.a.createElement("p",null,"As for ",n.a.createElement(s.Link,{to:"/scattter-plot"},"scatterplots"),", ",n.a.createElement("code",null,"Matplotlib")," will help us build a bubble plot thanks to the the ",n.a.createElement("code",null,"plt.scatter()")," function. This function provides a ",n.a.createElement("code",null,"s")," parameter allowing to pass a third variable that will be mapped to the markers size."),n.a.createElement(m.a,null,n.a.createElement(b.a,{imgName:"270_Basic_Bubble_plot",caption:"Most basic bubble plot with Python and Matplotlib",linkTo:"/270-basic-bubble-plot"}),n.a.createElement(b.a,{imgName:"271_Bubble_plot_customization1",caption:"Bubble plot customization: color",linkTo:"/271-custom-your-bubble-plot"}),n.a.createElement(b.a,{imgName:"271_Bubble_plot_customization2",caption:"Bubble plot customization: shape",linkTo:"/271-custom-your-bubble-plot"}),n.a.createElement(b.a,{imgName:"271_Bubble_plot_customization3",caption:"Bubble plot customization: size",linkTo:"/271-custom-your-bubble-plot"}),n.a.createElement(b.a,{imgName:"271_Bubble_plot_customization4",caption:"Bubble plot customization: stroke",linkTo:"/271-custom-your-bubble-plot"})),n.a.createElement("p",null,"Note that it is a common practice to map a fourth variable to the markers colors thanks to the ",n.a.createElement("code",null,"c")," parameter. This way, you're now looking a 4 variables in the same time, on the same chart 🎉."),n.a.createElement(m.a,null,n.a.createElement(b.a,{imgName:"272_Bubble_plot_with_mapped_color",caption:"A bubble chart width 4 dimensions: x, y, size & color",linkTo:"/272-map-a-color-to-bubble-plot"}),n.a.createElement(b.a,{imgName:"bubble-plot-gapminder",caption:"Bubble plot of the gapminder dataset",linkTo:"/341-python-gapminder-animation"}))),n.a.createElement(g.a,null),n.a.createElement("div",{className:"greySection",id:"related"},n.a.createElement(i.a,null,n.a.createElement(u.a,{chartFamily:"correlation"}))),n.a.createElement(g.a,null),n.a.createElement(i.a,null,n.a.createElement(c.a,null)),n.a.createElement(g.a,null))}},"59G+":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var l=a("q1tI"),n=a.n(l),o=a("eynx"),r=a("JI6e"),i=a("Wbzz");function c(e){var t=e.imgName,a=e.caption,l=e.linkTo;return n.a.createElement(r.a,{xs:12,md:4},n.a.createElement(i.Link,{to:l},n.a.createElement(o.a,{imgName:t,caption:a})))}},eynx:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a("2mCb");var l=a("q1tI"),n=a.n(l),o=a("Wbzz"),r=a("9eSz"),i=a.n(r),c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){var t=e.imgName,a=e.caption;if(c.includes(t))return n.a.createElement("p",null,"TODO");var l=Object(o.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return l?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"chartImageContainer"},n.a.createElement(i.a,{alt:t,fluid:l.node.childImageSharp.fluid,className:"chartImageImg"}),n.a.createElement("div",{className:"chartImageOverlay"},n.a.createElement("div",{className:"chartImageOverlayText"},n.a.createElement("p",null,a))))):null}}}]);
//# sourceMappingURL=component---src-pages-bubble-plot-js-5e3ce7c7430a536f5e44.js.map