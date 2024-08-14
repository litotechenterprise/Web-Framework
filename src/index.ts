import { User } from "./model/User";

const user = new User({ id: 1 });

user.set({ name: "Lito", age: 27 });

user.save();
