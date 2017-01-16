# Agrotech	
Javascript angular.

Steps to get this project:

Get Git, NodeJs, gulp & bower package manager globally (if you haven't already)

* download git -> install -> configure user, editor -> set ssh automatic login (optional)
* Install Node.js 
* npm install gulp -g
* npm install bower -g 

clone and move into project 

* git clone https://github.com/therkreddy/myAgrotech.git
* cd myAgrotech

Install npm and bower dependencies. Uses package.json and bower.json to create node modules and bower componenets directorys which contains deps. Bower.rrc dictates where to put the folder of bower componenets.

* npm install 
* bower install  (optional, as npm install is automated to run this bower install each time)

kickstart server (gulp it) 

* gulp  (or) gulp rk
* goto localhost:9090 (whatever the port number configured in gulpfile.js)   E.N.J.O.Y
