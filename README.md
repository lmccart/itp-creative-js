ITP Creative JavaScript (Fall 2014)
===================================

__Repository for Creative JavaScript at NYU ITP, Fall 2014__

How do the tools and platforms we work with shape the things we create? How do creative and computational ideas transform across media, and what does it mean to create for the internet? In this course, students will utilize JavaScript as both a client and server side programming language to build creative network systems. Additionally, some HTML and CSS will be introduced to define the structure and look. This is a beginner level class, though students should have taken Introduction to Computational Media or have similar experience. This two-credit course will meet the last seven weeks of the semester.


* [Google group mailing list](https://groups.google.com/a/nyu.edu/forum/?hl=en#!forum/itp-creative-js-group)
* [Lauren office hours](https://itp.nyu.edu/inwiki/Signup/McCarthy)
* [Resident office hours](https://itp.nyu.edu/inwiki/)
* [Assignments page](https://github.com/lmccart/itp-creative-js/wiki/Assignments)

##Evaluation

Grades will be determined according to the following breakdown:
* Regular Assignments 40%
* Participation and Attendance 40%
* Final Project 20%

Please see ITP's statement on [Pass/Fail](http://help.itp.nyu.edu/academic-policies/pass-fail) which states that a "Pass" is equivalent to an "A" or a "B" while anything less would be considered a "Fail".

We will have weekly assignments that are relevant to material from the previous class. These assignments are required and you should be prepared to show/talk about them in class. It is expected that everyone in the class will create and maintain a blog for their assignments.

Attendance is mandatory. Please inform your teacher via email if you are going to miss a class. Habitually showing up late for class or an excessive number of absences will adversely affect your grade.

This class will be participatory, you are expected to participate in discussions and give feedback to other students both in class and participate with their projects. This (along with attendance) is 40% of your grade.

Class will culminate final projects. You are expected to push your abilities to produce something that utilizes what you have learned in the class that is useful in some manner to yourself or the world. This will comprise 20% of your grade.


##Syllabus


###Week 1 (10/22): Intro, JavaScript basics, p5.js

**Getting started**

1. Sign up for the [Github student developer pack](https://education.github.com/pack) - includes Digital Ocean $100 credit and more.

2. Download a code editor like [TextWrangler](http://www.barebones.com/products/textwrangler/) or [Sublime Text](http://www.sublimetext.com/).

3. Running a local server. If you are doing things like loading images, working with webcam, or interfacing with other external files or inputs, you will need to run a local server to view the HTML and JS files you are editing. Here are two methods:
  * [SimpleHTTPServer](https://github.com/lmccart/itp-creative-js/wiki/SimpleHTTPServer)
  * [node server with servi.js](https://github.com/antiboredom/servi.js/wiki/Setting-up-a-servi.js-project-without-the-servi-editor) - If you already have a folder with a servi project in it, you can skip to just put your HTML/JS/CSS files in the public/ folder and skip to step 5.


**Intro to JS**
* [Notes: JS basics](https://github.com/lmccart/p5.js/wiki/JavaScript-basics)

**Intro to p5.js and canvas**

1. [Download p5.js](http://p5js.org/download/). The download comes with a copy of p5.js, you can also use a statically hosted version from the [CDN](http://cdnjs.com/libraries/p5.js), more info on that [here](http://p5js.org/get-started/#file-setup).

2. [Tutorial: Getting started with p5.js](http://p5js.org/get-started/) - Set up your files for editing and viewing.

3. [Processing ~ p5.js transition](https://github.com/lmccart/p5.js/wiki/Processing-transition) - Learn to convert a sketch from Processing to p5.js.

4. [p5.js reference](http://p5js.org/reference/) and [examples](http://p5js.org/learn/#examples) - Look through and get comfortable with the p5.js functionality.

5. (Optional) [FYI: HTML5Canvas without p5.js](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) - See how canvas drawing is done in plain JS without using p5.js.

**[Assignment 1 (DUE 10/29)](https://github.com/lmccart/itp-creative-js/wiki/Assignments#assignment-1-due-1029)**


###Week 2 (10/29): HTML+CSS+JS, servers

**Intro to HTML and CSS**
 
* [Notes: Intro to HTML and CSS](https://github.com/lmccart/p5.js/wiki/Intro-to-HTML-and-CSS)

**Server setup**

1. Sign up for Digital Ocean, you can use this [referral code](https://www.digitalocean.com/?refcode=4d83915eeae0) or the code from the [Github student developer pack](https://education.github.com/pack).

2. Download an FTP client like [Cyberduck](https://cyberduck.io/?l=en), [Filezilla](https://filezilla-project.org/), [Fetch - mac only](http://fetchsoftworks.com/), etc.

3. Download [servi](https://github.com/antiboredom/servi.js/releases).

4. [Tutorial: Digital Ocean setup](https://github.com/robynitp/networkedmedia/wiki/Digital-Ocean-Set-up) - Follow the steps to create an account, a new droplet, and connect with Cyberduck.

5. [Tutorial: Setting up a web server with Servi](https://github.com/robynitp/networkedmedia/wiki/Web-Servers-with-Servi) - Create a basic file server using these instructions. Upload your files to your Digital Ocean account via Cyberduck.

6. [Tutorial: installing forever](http://www.hacksparrow.com/keep-node-js-script-running-after-logging-out-from-shell.html) - The default behavior of Node is to kill the script when you log out of ssh or quit Terminal. That's fine for short-term use, but to keep your web site up and persistent, install forever.

**[Assignment 2 (DUE 11/5)](https://github.com/lmccart/itp-creative-js/wiki/Assignments#assignment-2-due-115)**


###Week 3 (11/5): Events and media

1. [Notes: Intro to DOM manipulation and events](https://github.com/lmccart/p5.js/wiki/Intro-to-DOM-manipulation-and-events) - Use JS to manipulate the HTML page and make it react to events (mouse, keyboard, touch, page load). 
  * [Reference for all DOM events](https://developer.mozilla.org/en-US/docs/Web/Events)
  * [DOM manipulation with no libraries examples](https://github.com/lmccart/itp-creative-js/tree/master/week3/02_dom_pure_js)

2. [Tutorial: p5.dom library](https://github.com/lmccart/p5.js/wiki/Beyond-the-canvas) - You can also use the p5.dom library to handle HTML manipulation and events.
  * [p5.dom.js reference](http://p5js.org/reference/#/libraries/p5.dom)
  * [p5.dom.js examples](https://github.com/lmccart/itp-creative-js/tree/master/week3/04_dom_p5)

3. [JQuery](http://jquery.com/) is (probably the most) popular JS Library for client-side stuff.  We won't use it much in our examples, but it's work examining and thinking about.
  * [Quick and dirty hello world DOM manipulation with JQuery](https://github.com/lmccart/itp-creative-js/blob/master/week3/03_dom_jquery/sketch.js)

4. [Notes: Intro to CSS and layouts](https://github.com/lmccart/p5.js/wiki/Intro-to-HTML-and-CSS#css) - Create an external stylesheet and layout an HTML page.

**[Assignment 3 (DUE 11/12)](https://github.com/lmccart/itp-creative-js/wiki/Assignments#assignment-3-due-1112)**


###Week 4 (11/12): Servi, review

1. [Tutorial: setting up a servi.js project without the servi IDE](https://github.com/antiboredom/servi.js/wiki/Setting-up-a-servi.js-project-without-the-servi-editor)
  * [Servi server example](https://github.com/lmccart/itp-creative-js/tree/master/week4/servi_serve_static)

**[Assignment 4 (DUE 11/19)](https://github.com/lmccart/itp-creative-js/wiki/Assignments#assignment-4-due-1119)**

###Week 5 (11/19): APIs, AJAX, JSON 

1. [Notes: Web services, AJAX and JSON](https://github.com/lmccart/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON)
  * [p5.js AJAX examples](https://github.com/lmccart/itp-creative-js/tree/master/week5/01_p5_examples)
  * [jQuery AJAX examples](https://github.com/lmccart/itp-creative-js/tree/master/week5/02_jquery_examples)
2. [Tutorial: Instagram API how-to](https://github.com/robynitp/networkedmedia/wiki/Instagram-API-How-to)
3. [Chrome extension for viewing JSON](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
4. More resources:
  * [What is an API?](http://www.lynda.com/HTML-tutorials/What-API/619/61889-4.html) - video on Lynda.com (2m 43sec)
  * [Using APIs](https://gigaom.com/2010/10/29/using-apis-not-quite-as-hard-as-it-looks/)
  * [Sunlight Foundation example API](http://training.sunlightfoundation.com/module/unlocking-api/) - an overview of the info available through their API

**[Final Project (DUE 12/10)](https://github.com/lmccart/itp-creative-js/wiki/Assignments#final-project-due-1210)**

###Week 6 (12/3): Server-side JS

1. [Tutorial: creating a servi server](https://github.com/antiboredom/servi.js/wiki/Setting-up-a-servi.js-project-without-the-servi-editor)
2. [Notes: server-side with Servi](https://github.com/robynitp/networkedmedia/wiki/Week-5-Notes)
  * [Servi examples](https://github.com/lmccart/itp-creative-js/tree/master/week6/)
  * [Servi reference](https://github.com/antiboredom/servi.js/wiki)
  * [Notes: GET and POST request](https://github.com/shiffman/itp-networked-media/wiki/GET,-POST-with-p5)

###Week 7 (12/10)

Final project presentations



##Resources

###p5.js
* [p5.js reference](http://p5js.org/reference)
* [p5.js forum](http://forum.processing.org/two/)
* [p5.js on GitHub](https://github.com/lmccart/p5.js)
* [p5.js CDN](http://cdnjs.com/libraries/p5.js)

###Servi.js
* [servi.js documentation](https://github.com/antiboredom/servi.js/wiki)

###JS Learning / Intro
* [CodeAcademy: JavaScript](http://www.codecademy.com/tracks/javascript)
* [How to learn JavaScript properly](http://javascriptissexy.com/how-to-learn-javascript-properly/)
* [JavaScript the right way](http://www.jstherightway.org/)
* [Code School](https://www.codeschool.com/paths/javascript)
* [JavaScript garden](http://bonsaiden.github.io/JavaScript-Garden/)
* [A re-introduction to JS by Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
* [JavaScript 101 from JQuery](https://learn.jquery.com/javascript-101/)
* [JavaScript: The Definitive Guide](http://shop.oreilly.com/product/9780596000486.do)
* [Eloquent JavaScript](http://eloquentjavascript.net/contents.html), Marijn Haverbeke
* [Beginning JavaScript](http://www.amazon.com/Beginning-JavaScript-Paul-Wilton/dp/0470525932), Paul Wilton and Jeremy McPeak
* http://www.nyu.edu/lynda - lots of great tutorials here. Log in with your normal nyu net-id/password for full access.

###Tools
* Checking code: [JSLint](http://www.jslint.com/) / [JSHint](http://www.jshint.com)
* We'll be using the command line regularly in this class. Nothing too fancy; just the basics. Get familiar, at the very least, with the commands `ls`, `cd`, and `mkdir`. [Basic unix commands](http://www.webmonkey.com/2010/02/learn_enough_unix_for_your_resume/#Basic_Commands).
* Browser debugging: Chrome Developer Tools ([tutorial](https://developer.chrome.com/extensions/tut_debugging)) / Firebug ([tutorial](http://www.developerfusion.com/article/139949/debugging-javascript-with-firebug/))
* Mobile debugging [jsconsole.com](http://jsconsole.com)
* Sharing code snippets (useful for asking questions): [gist.github.com](http://gist.github.com)
