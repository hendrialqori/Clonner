// src/utils.ts
function isObject(obj) {
  return typeof obj === "object" && !Array.isArray(obj);
}

// src/main.ts
function clone(initialValue, cb) {
  if (!isObject(initialValue)) {
    throw new Error("initial value should be an object");
  }
  const dataCloning = structuredClone(initialValue);
  function mutableAction(params) {
    cb(params);
    return params;
  }
  return mutableAction(dataCloning);
}
export {
  clone
};
