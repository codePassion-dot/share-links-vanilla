import { BasePage } from "./BasePage";
import { FormDataBinder } from "./FormBinder";
import css from "./SignIn.css?inline";

export class SignInPage extends BasePage {
  private user = {
    email: "",
    password: "",
  };

  constructor() {
    super("sign-in-page-template", css);
  }

  // when the component is attached to the DOM
  connectedCallback() {
    super.connectedCallback();
    this.setTwoDataBinding();
  }

  setTwoDataBinding() {
    new FormDataBinder("form", this.user, async () => {
      console.log(this.user);
    });
  }
}
