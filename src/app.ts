import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia materialize-css plugin';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
      { route: 'javascript/collapsible', name: 'collapsible', moduleId: 'collapsible', nav: true, title: 'Collapsible' },
    ]);

    this.router = router;
  }
}
