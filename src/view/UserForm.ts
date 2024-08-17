import { User, UserProps } from "../model/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (!input) {
      throw new Error("Unable to find input element");
    }
    const name = input.value;
    this.model.set({ name });
  };
  template(): string {
    return `
            <div>
                <input  placeholder="${this.model.get("name")}"/>
                <button class="set-name">Click me</button>
                <button class="set-age">Set Random age</button>
                <button class="save-model">save</button>
            </div
        `;
  }
}
