import { AxiosPromise } from "axios";

export type Callback = () => void;

export interface HasId {
  id?: number;
}

export interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface Events {
  on(eventName: string, cd: Callback): void;
  trigger(eventName: string): void;
}
