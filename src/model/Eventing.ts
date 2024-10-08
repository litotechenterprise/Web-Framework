import { Callback } from "../types";

export class Eventing {
  events: { [key: string]: Callback[] } = {};
  on = (eventName: string, cb: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(cb);

    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((cb) => cb());
  };
}
