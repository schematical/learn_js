This article my guide to applying [Pareto's Law](http://en.wikipedia.org/wiki/Pareto_principle) to learning how to write JavaScript to build *browser apps, server apps, desktop apps, mobile apps,* even *command line* or *arduino apps*. 

This article it self is not a tutorial. Just a suggested list of resources orginized in a way that builds off of the previous resource.

This is not to say you should not learn other languages or that this is the only way. Other languages are great to learn. For example if you want to build Android apps using the techniques I describe below you can get an app up and running, but it wouldn't hurt to learn a little java and understand how Androids WebView system works to help you write a better app.

But dont just go learning a programming language for the sake of learning to program. I strongly suggest having a set goal in mind as you go through this article and start working twards it.

##Principals above methods:

Before learning  the nuances of any programming language it is far more important to understand the key principals. 

* Object Oriented Programing
* Model View Control Architeture
* Async/Observer Patterns


##What do you want to learn?

My cosin is a freshmen in college. Recently asked for my help with her intro to programming class. I have helped many studients over the years with this class and I am always appauled at the way they teach studients how to program. What they are really doing is teaching studients how to hate programming. Its tough to describe: 

Think of it like an art class where they teach you to paint by numbers. You are penilized for coloring out side of the lines their fore killing all creativity.

It is quite painful to watch. This is why I suggest you pick something you are passionate about. Then take that app idea you have, everyone has an app idea, and set your mind to building it.


###Front End Browser Web Apps:
JavaScript has evolved to the default frontend browser language. Sorry Flash and [all the other contenders](http://en.wikipedia.org/wiki/Client-side_scripting#List_of_Client-Side_Scripting_Languages). 

####Understan the DOM:
The number one concept I would recomend understanding before diving in to the Browser side of web apps, even before HTML, is the Document Object Model or 'DOM'. Everyone has heard of HTML. HTML is basically the **DNA** for the web page. Every time your browser refreshes it essentially creates a clone based off of the HTML. 


When your browser loads the HTML it creates a local copy of the webpage that you can interact with. The DOM is kinda like the **central nerviuous system** of the new page. Every element on the page, text inputs, links, images, are treated like **objects** that are part of the **Document**. 

Check out this [series of video tutorials that deal with the DOM](http://www.youtube.com/watch?v=aPW_wQEFvek&list=PL18600E7CA651B16B).

####Basic HTML:
Now that you understand the conept of how HTML is turned into a web page via the DOM you should be ready to learn how to write some basic HTML.

__NOTE: Learn some basic HTML before you bother jumping in to advanced HTML5__

HTML(Hyper Text Markup Language) is a specific type of XML or [Extensible Markup Language](http://en.wikipedia.org/wiki/XML). A while ago I would have suggested you learned more about XML before moving on but in recent times it seems that modern browsers are not sticking as tightly to XML standards.


#####Resources:

* [W3Schools](http://www.w3schools.com/html/default.asp) is the internets leading tutorial for the basics.

There are plenty of frameworks(libraries of code) that take all of the small and tedious or large and difficult tasks and make them a lot easier to do. 

####Basic Framework [jQuery](http://jquery.com/):
The defacto frontend javascript framework is [jQuery](http://jquery.com/). Some people would disagree, but if you look at the [numbers](http://www.similartech.com/categories/javascript) its obvious jQuery is on top. 

jQuery is great for bridging the gaps between the different browsers. If you have never done web dev then you have never had to deal with the agonizing pain of writing apps for multiple browsers. Its like every major borswer, Chrome, Safari, Mozilla all decided to kinda follow a standard, but not really. Then Internet Explorer came along and just said "Screw it" and went and did their own

jQuery has many tools that take tasks that would normally a dozen or more lines of code and condense them into less than one line.

#####Ajax:
One of the most important things that has happened to the modern internet is the uprise of [Asyncrious browser interatctions](http://en.wikipedia.org/wiki/Ajax_(programming)). This is the technique of sending and recving infromation with the server without reloading the page you are viewing. So anytime you do a search and the page doesnt reload they are most likely using Ajax. jQuery makes this crazy easy, exspecially across differnt browser types. 

Check out how it looks without jQuery
```
function loadXMLDoc()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","ajax_info.txt",true);
xmlhttp.send();
}
```
and using jQuery

```
$.get( "ajax/test.html", function( data ) { /* success */ });
```

#####Other Resources:

* [jQuery Cheat Sheet](http://oscarotero.com/jquery/)


####User Interface Framework [Bootstrap](http://getbootstrap.com/):
Since the massive increase in mobile browsing a new trend called [Responsive Browsing](http://en.wikipedia.org/wiki/Responsive_web_design). It is the pratice of making your web page designs adapt depending on the screen width. 

#####The Responsive Test:
When you are viewing a page on your desktop browser and you want to see how responsive the page is resize your browser window to 1/3 to simulate a mobile phone or 2/3 to simulate a tablet(this page should be responsive). The content in the page should adapt with out you needing to scroll left or right.

Several frameworks have been released to assist in desiging these types of pages. The most popular is the [Bootstrap Framework](http://getbootstrap.com/). 

This framework is a peace of cake. It basically breaks down your screen into a 12 column grid. Go to their section that explains [how their grid works](http://getbootstrap.com/css/#grid) and do the above mentioned responsive test. 

Bootstrap also ships with a whole bunch of nice little components that make desiging a web app easier.

#####Alternitivess:

* [jQuery Mobile](http://jquerymobile.com/) - Originally just for Mobile, but now responsive.
* [Ionic Framework](http://ionicframework.com/) - Madison based guys, I am really excited for what Max and the team have planned.

There are others but none I would recomend at this point.

####Advanced Framework Angular or Backbone:
If you want to add some real structure to your apps try either the [Angular Framework](http://angularjs.org/) or [Backbone JS](http://backbonejs.org/).

*Warning:* Both can be really overwhelming if you are just starting out. You should have a solid understanding of the concepts relating to [Model View Control](./) //TODO: Matt write an article on web application Architeture

#####Angular:
Angular is an extreamly popular framework relighs heavily on [Data Binding](http://en.wikipedia.org/wiki/Data_binding). Previously I was against all inline javascript(Writing JS code in your HTML) because it is kinda messy and data binding because of some bad expirences with [KendoUI](http://www.telerik.com/kendo-ui). But the [Ionic Framework](http://ionicframework.com/) has begun to change my mind.

Because it allows you to directly bind your Javascript objects with elements on the screen it makes developing an app quicker.

#####Backbone.js:
Backbone is a more ridged and robust set of tools for building a [Model View Control](./todo-matt-write-this) that is well architected. Unfortuntly their vocabulary doent match popular industury standard naming conventions, such as calling 'Controls' 'Views' but other then that there are some solid benifits.

You can define a front end data model then chose on the fly how to have them save. For example you can write a browser app that uses [Ajax](./todo-matt-write-this) to save the web app. Then 



###Back End Server Web Apps:
This miricul of modern scinence can be acomplished with [NodeJS](http://nodejs.org/). The bulk of learning resources for learning NodeJS can be found on their [community page](http://nodejs.org/community/). There is also an [amazing thread on Stack Overflow](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js) that covers this.

NodeJS is not just a web server. It is much much more. It can be easily used to script any programmatic tasks. Lots of major frameworks are using it to build command line utilities that assist their programs build primarily in other languages.

###Mobile Apps:
If you want to build a mobile app with out needing to learn Java, Objective C, and whatever windows and Blackberry are written in then you will want to check out [Cordova](http://cordova.apache.org/). Apple still makes publishing an app to their market place as much fun as sticking nails in your eyes, and Android still requires you to install the [Android SDK](http://developer.android.com/sdk/index.html) (Peace of cake). Overall its still a lot easier than learning all of the different languages. 

NOTE: This is not saying that it is not beneficial to eventually learn the other languages. Remember my goal is to get you the ability to learn 80% of the benefit with 20% of the time spent to learn any one other language.
