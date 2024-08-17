import { Model } from "../model/Model";
import { HasId } from "../types";

export abstract class View<T extends Model<K>, K extends HasId> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  regionMap(): { [key: string]: string } {
    return {};
  }

  onRender(): void {}

  bindModel(): void {
    this.model.on("change", () => this.render());
  }

  bindEvents(fragement: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragement.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionMap = this.regionMap();
    for (let key in regionMap) {
      const selector = regionMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  render(): void {
    this.parent.innerHTML = ``;
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();
    this.parent.append(templateElement.content);
  }
}
