import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature("prism")
    .plugin("aurelia-materialize-css");
  aurelia.start().then(() => aurelia.setRoot());
}
