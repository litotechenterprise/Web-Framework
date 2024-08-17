import { User } from "./model/User";
import { UserEdit } from "./view/UserEdit";

const user = User.buildUser({ name: "Pablo", age: 20 });
const root = document.getElementById("root");

if (!root) {
  throw new Error("Unable to find root element");
}

const userEdit = new UserEdit(root, user);

userEdit.render();

console.log(userEdit);
