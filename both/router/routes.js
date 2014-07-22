/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase',
  yieldTemplates: {
    'Header': { to: 'Header' },
    'Sidebar': { to: 'Sidebar' }
  }

});

Router.map(function () {
  this.route('home', {path: '/'});
  this.route('dashboard', {path: '/dashboard', loginRequired: 'home'});
  this.route('keywords', {path: '/keywords', loginRequired: 'home'});
  this.route('streams', {path: '/streams', loginRequired: 'home'});
  this.route('graph', {path: '/graph/:_id', loginRequired: 'home'});
  this.route('admin', {path: '/admin', loginRequired: 'home'});
});
