import { Callback } from "../types";

interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, cb: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(cb);

    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((cb) => cb());
  }

  async fetch(): Promise<void> {}
  async save(): Promise<void> {}
}
