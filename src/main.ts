import { isObject } from "./utils"

export function clone<T extends {}>(initialValue: T, cb: (draft: T) => void): T {

  if (!isObject(initialValue)) {
    throw new Error('initial value should be an object')
  }

  // clone initial value
  const dataCloning = structuredClone(initialValue)

   // function to handle mutable action and return clone value
  function mutableAction(params: T) {
    cb(params)
    return params
  }

  // return cloning value
  return mutableAction(dataCloning)
}
