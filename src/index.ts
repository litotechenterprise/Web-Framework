import { User } from "./model/User";

const user = User.buildUser({ id: 1 });

user.on("change", () => {
  console.log(user);
});

user.fetch();

user.set({ age: 25 });

user.save();
