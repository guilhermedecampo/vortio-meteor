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
  this.route('dashboard', {path: '/'});
  this.route('keywords', {path: '/keywords'});
  this.route('streams', {path: '/streams'});
  this.route('graph', {path: '/graph'});
});
