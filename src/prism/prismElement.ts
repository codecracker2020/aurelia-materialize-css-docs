import { bindable, inlineView, customElement } from 'aurelia-framework';
import * as PrismJS from "@eriklieben/prismjs";

@customElement('prism')
@inlineView("<template><pre class='line-numbers'><code ref='code' class='language-${language}'><content></content></code></pre></template>")
export class Prism {

  @bindable language;

  code;
  
  constructor(private element) {
  }

  attached() {   
    PrismJS.Prism.highlightElement(this.code, false);
  }
}
