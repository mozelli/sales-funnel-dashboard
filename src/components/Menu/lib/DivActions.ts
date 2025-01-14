import { RefObject } from "react";

export class DivActions {
  private refObj: RefObject<HTMLDivElement>;

  constructor(reference: RefObject<HTMLDivElement>) {
    this.refObj = reference;
  }

  showClassName() {
    console.log(this.refObj.current?.className);
  }
}
