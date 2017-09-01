'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route');

Route.get('/', 'PostController.index');
Route.on('/about').render('about');
Route.on('/contact').render('contact');

Route.get('posts/create', 'PostController.create');
Route.post('posts', 'PostController.store');
Route.get('posts/:id', 'PostController.show');
