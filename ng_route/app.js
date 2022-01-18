
var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider

		.when('/about', {
			templateUrl: 'pages/about.html',
			controller: 'about'
		})

		.when('/resume', {
			templateUrl: 'pages/resume.html',
			controller: 'resume'
		})

		.when('/project', {
			templateUrl: 'pages/project.html',
			controller: 'project'
		})

		.when('/contact', {
			templateUrl: 'pages/contact.html',
			controller: 'contact'
		})

		.otherwise({ redirectTo: '/' });

});

app.controller('about', function ($scope) {
	$scope.name = "Yash Katariya";
	$scope.dob = "24th December";
	$scope.number = "7568552872";
	$scope.mail = "yash.katariya31@nmims.edu.in";
	$scope.hobby = "Web Development";
});

app.controller('resume', function ($scope) {
	$scope.resume = [
		{ "quali": 'MBA Tech', "ins": 'MPSTME', "board": 'NMIMS Mumbai', "year": 'Currently Pursuing', "cgpa": '3.76/4' },
		{ "quali": 'XII', "ins": 'Seedling Modern High School, Jaipur', "board": 'CBSE', "year": '2018', "cgpa": '83.4%' },
		{ "quali": 'X', "ins": 'Seedling Modern High School, Jaipur', "board": 'CBSE', "year": '2016', "cgpa": '9.6/10' },
	];
	$scope.courses = [
		{ "course": 'Front End Web Development with React', "uni": 'The Hong Kong University of Science and Technology', "platform": 'Coursera' },
		{ "course": 'Python for Everybody', "uni": 'University of Michigan', "platform": 'Coursera' },
		{ "course": 'HTML, CSS, and Javascript for Web Developers', "uni": 'Johns Hopkins University', "platform": 'Coursera' },
	];
});

app.controller('project', function ($scope) {
	$scope.project = [
		{ "proj": 'OCR WEB APPLICATION', "desc": 'A web application made using python and flask that allows users to upload any image within the application for OCR and download the output as a .txt file (Using Python, Flask, PyTesseract, HTML)' },

		{ "proj": 'PORTFOLIO WEBSITE FOR A MULTIMEDIA COMPANY', "desc": 'A simple HTML,CSS and JS website for a multimedia company wanting to showcase its work in an aesthetic and pleasing way and connecting it with a database using APACHE server. (Using HML, Javascript, CSS, PHP)' },

		{ "proj": 'DATA MINING PROJECT ON VALUE INVESTING STRATEGY', "desc": 'Building a quantitative investing strategy using sandbox API and the concept of algorithmic trading using python. (Using Python, MCDM, Unsupervised Data Mining Techniques)' },
	];
});

app.controller('contact', function ($scope) {
	
});
