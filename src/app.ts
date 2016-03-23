import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
 
    router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([    
        { route: ["", 'javascript/collapsible'],   name: 'collapsible',  moduleId: 'collapsible',    nav: true,   title: 'Collapsible' },
        { route: ['javascript/dialogs'],   name: 'dialogs',  moduleId: 'dialogs',    nav: true,   title: 'Dialogs' },
        { route: ['javascript/dropdown'],   name: 'dropdown',  moduleId: 'dropdown',    nav: true,   title: 'Dropdown' },
        { route: ['javascript/media'],   name: 'media',  moduleId: 'media',    nav: true,   title: 'Media' },
        { route: ['javascript/modals'],   name: 'modals',  moduleId: 'modals',    nav: true,   title: 'Modals' },      
        { route: ['javascript/pushpin'],   name: 'pushpin',  moduleId: 'pushpin',    nav: true,   title: 'Pushpin' },
        { route: ['javascript/scrollSpy'],   name: 'scrollSpy',  moduleId: 'scrollSpy',    nav: true,   title: 'Scrollspy' },   
        { route: ['components/forms'],   name: 'forms',  moduleId: 'forms',    nav: true,   title: 'Forms' },      
    ]);

    this.router = router;
  }
}
