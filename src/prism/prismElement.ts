import {inject, bindable, inlineView, customElement } from 'aurelia-framework';
import {Prism} from "@eriklieben/prismjs";

@customElement('prism')
@inlineView("<template><pre class='line-numbers'><code class='language-${language}'><content></content></code></pre></template>")
@inject(Element)
export class Prism {

  @bindable language;

  constructor(private element) {
    this.element = element;
  }

  attached() {   
    Prism.highlightElement(this.element, false);
  }
}
