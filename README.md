# Clonner
A utility function that allows you to change nested object values without spreading them out.

# Type
```ts
declare function clone<T>(initialValue:T, cb: (draft: T) => void): T
```
# How to use ?

### Object literal
```js

// ES6
import { clone } from 'clonner'
// Common JS
const clone = require('clonner')

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

### Extremely Nested Object
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
### React
```jsx
import { clone } from 'clonner' 

export default function App(){
      const [count, setCount] = React.useState({
        obj: {
            count1: 0,
            count2: {
                count3: 0
            }
        }
      })

      function handleClick(){
            // increase key count3
            setCount((prev) => clone(prev, (draft) => {
                  draft.obj.count2.count3++
            }))
      }

      return <Button onClick={handleClick}>{count.obj.count2.count3}</Button>
}
```

# Test
```
npm test
```

# License
MIT License

Copyright (c) 2023 Hendri Alqori

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


