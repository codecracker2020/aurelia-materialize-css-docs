import "@eriklieben/prismjs";
import "@eriklieben/prismjs/themes/prism.css!";
import "@eriklieben/prismjs/plugins/line-numbers/prism-line-numbers";
import "@eriklieben/prismjs/plugins/line-numbers/prism-line-numbers.css!";

import "@eriklieben/prismjs/plugins/show-language/prism-show-language";
import "@eriklieben/prismjs/plugins/show-language/prism-show-language.css!";

export function configure(config) {
  config.globalResources('./prismElement');
}
