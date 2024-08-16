import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { User } from "./User";

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public url: string, public deserialze: (json: K) => T) {}
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.url).then((response: AxiosResponse): void => {
      response.data.forEach((value: K) => {
        const obj = this.deserialze(value);
        this.models.push(obj);
      });

      this.trigger("change");
    });
  }
}
