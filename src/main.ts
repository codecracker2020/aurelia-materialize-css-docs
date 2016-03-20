import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    // .plugin('eriklieben/aurelia-ace', ace => {
    //     ace.setOptions({
    //         showPrintMargin:false,
    //         beautify: true,
    //         wrapBehavioursEnabled: true,
    //         mode:"javascript",
    //         theme: "chrome"
    //     })
    // })
    .plugin("eriklieben/aurelia-materialize-css");

  aurelia.start().then(() => aurelia.setRoot());
}
