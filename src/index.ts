import { User } from "./model/User";
import { UserForm } from "./view/UserForm";

const user = User.buildUser({ name: "Pablo", age: 20 });
const root = document.getElementById("root");

if (!root) {
  throw new Error("Unable to find root element");
}

const userForm = new UserForm(root, user);

userForm.render();
