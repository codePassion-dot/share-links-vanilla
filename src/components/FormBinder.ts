export class FormDataBinder {
  private formId: string;
  private data: { [key: string]: string };
  private onSubmitHandler: () => Promise<void>;

  constructor(
    formId: string,
    data: { [key: string]: string },
    onSubmitHandler: () => Promise<void>,
  ) {
    this.formId = formId;
    this.data = data;
    this.onSubmitHandler = onSubmitHandler;
    this.setupDataBinding();
  }

  private setupDataBinding() {
    const form = document.getElementById(this.formId) as HTMLFormElement | null;
    if (!form) {
      return;
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.onSubmitHandler();
      this.clearFormData(form);
    });

    Array.from(form.elements).forEach((formElement) => {
      formElement.addEventListener("change", (event) => {
        const inputName = (event.currentTarget as HTMLInputElement).name;
        const inputValue = (event.currentTarget as HTMLInputElement).value;
        this.data[inputName] = inputValue;
      });
    });
  }

  private clearFormData(form: HTMLFormElement) {
    Object.keys(this.data).forEach((key) => {
      this.data[key] = "";
      const inputElement = form.elements.namedItem(key) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = "";
      }
    });
  }
}
