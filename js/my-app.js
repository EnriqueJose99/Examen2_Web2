// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'ios',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Floristeria',
	dialog: {
		title: 'Floristeria',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
		},
		{
		path: '/profile/',
    	url: 'profile.html',
    	name: 'profile',
  		},
		{
		path: '/categoriaFlor/',
    	url: 'categoriaFlor.html',
    	name: 'categoriaFlor',
  		}
	]
});
// Export selectors engine
var $$ = Dom7;

$$('#btnAlerta').on('click',function() {
	app.dialog.alert('Hola Diseño web 2');
});
