import {ToastService} from "aurelia-materialize-css";

export class Dialogs {  
  
    public toast() {     
      ToastService.show("I am a toast", 4000);
    }
   
    public displayCustomHTMLToast() {       
      ToastService.show($('<span>I am toast content</span>'), 5000);
    }
    
    public toastWithCallback() {     
      ToastService.show("I am a toast", 4000).then(() => ToastService.show("Your toast was dismissed", 1000, "blue darken-3"));
    }
    
    public styledToast() {     
      ToastService.show("I am a toast", 4000, "rounded");
    }
}
