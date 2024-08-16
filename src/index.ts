import { User } from "./model/User";

const user = new User({ name: "robert", age: 57 });

console.log(user.get("name"));
