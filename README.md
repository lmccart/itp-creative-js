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

2. [Notes: Intro to DOM manipulation and events](https://github.com/lmccart/p5.js/wiki/Intro-to-DOM-manipulation-and-events) - Use JS to manipulate the HTML page and make it react to events (mouse, keyboard, touch, page load). 

3. [Tutorial: p5.dom library](https://github.com/lmccart/p5.js/wiki/Beyond-the-canvas) - You can also use the p5.dom library to handle HTML manipulation and events.

4. (Optional) [Notes: Intro to CSS and layouts](https://github.com/lmccart/p5.js/wiki/Intro-to-HTML-and-CSS#css) - Create an external stylesheet and layout an HTML page.


**[Assignment 3 (DUE 11/12)](https://github.com/lmccart/itp-creative-js/wiki/Assignments#assignment-3-due-1112)**


###Week 4 (11/12): APIs, AJAX, JSON

* HTML forms
* Web services: AJAX and JSON

###Week 5 (11/19): Server-side JS

* Server-side JavaScript writing basic HTTP servers with Servi and Node.js
* Data storage
* Query strings, GET vs. POST

###Week 6 (12/3): WebSockets, Arduino _Note the date change!_

* WebSockets realtime interaction in the browser
* Serial interfacing with the Arduino 

###Week 7 (12/10) _Note the date change!_

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
