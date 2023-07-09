import AbsClone from "./abstract";

export default class Clone extends AbsClone {
  constructor() {
    super();
  }

  static clonner<T extends {}>(
    initialValue: T,
    draft: (callbackValue: T) => void
  ): T {
    // clone initial value
    const dataCloning = structuredClone(initialValue);

    // function to handle mutable action and return clone value
    function mutableAction(params: T) {
      draft(params);
      return params;
    }

    // return clone value
    return mutableAction(dataCloning);
  }
}
