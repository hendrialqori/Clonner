# Clonner
A utility function that allows you to change nested object values without spreading them out.

### type
```ts
declare function clone<T>(initialValue:T, cb: (draft: T) => void): T
```
### How to use ?

- Object Literal
```js

// ES6
import { clone } from 'clonner'
// Common JS
const clone = require('clonnner')

const profile = {
      name: 'Ishowspeed',
      address: {
          nationality: ''
      }
  }

const profileClone = clone(profile, (draft) => {
      draft.address.nationality = 'United States Of America'
  })

console.log.(profileClone)
// output :
// {
//    name: 'Ishowspeed',
//    address: {
//        nationality: 'United States Of America'
//    }
// }
```

- Extremely Nested Object
```js
// ES6
import { clone } from 'clonner'
// Common JS
const clone = require('clonner')

const deepObj = {
    obj1: {
      obj2: {
        obj3: {
          obj4: {
            obj5: {
              obj6: {
                obj7: {
                  obj8: {
                    obj9: {
                      obj10: {
                        message: ''
                      }
                    }
                  }
                } 
              }
            }
          }
        }
      }
    }
  }

const deep = clone(deepObj, (draft) => {
  draft.obj1.obj2.obj3.obj4.obj5.obj6.obj7.obj8.obj9.obj10.message = 'Hello World, Its works!'
})

console.log(deep)
// output :
//  obj1: {
//    obj2: {
//      obj3: {
//        obj4: {
//          obj5: {
//            obj6: {
//              obj7: {
//                obj8: {
//                 obj9: {
//                    obj10: {
//                      message: 'Hello World, Its works!'
//                    }
//                  }
//                }
//              } 
//            }
//          }
//        }
//      }
//    }
//  }

```
