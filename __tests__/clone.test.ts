import { clone } from '../src/main'
import { describe, expect, it, test } from "vitest";

describe("Clonner testing functionality", () => {

  const profile = {
    name: "Hendri",
    department: "IT",
    role: "Frontend Developer",
    adrress: {
      nationality: '',
      street: ''
    },
    email: ["hendri@email.co.id", "alqori@yahoo.co.id"],
    func: null as null | (() => void)
  };

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


  it("Should be work mutable array action", () => {
    const profileState = clone(profile, (draft) => {
      draft.email.pop();

      draft.email.unshift("een@email.co.id");
    });

    expect(profileState.email).toEqual(['een@email.co.id', 'hendri@email.co.id'])

  });

  it("Should be same value", () => {
    const profileState = clone(profile, (draft) => {
      draft.name = "Hendri Alqori";
      draft.department = "Information Technology";
      draft.role = "Frontend Engineer";
    });

    expect(profileState).toEqual({
      name: "Hendri Alqori",
      department: "Information Technology",
      role: "Frontend Engineer",
      email: ["hendri@email.co.id", "alqori@yahoo.co.id"],
      adrress: {
        nationality: '',
        street: ''
      },
      func: null
    });
  });

  it('Should work with object property', () => {
    const profileState = clone(profile, function(draft) {
      draft.func = function() {
        return this.name
      }
    })

    expect(profileState.func?.()).toBe('Hendri')
    
  })


  it('Should be work when update nested object', () => {
    const deep = clone(deepObj, (draft) => {
      draft.obj1.obj2.obj3.obj4.obj5.obj6.obj7.obj8.obj9.obj10.message = 'Hello World, Its works!'
    })
    expect(deep.obj1.obj2.obj3.obj4.obj5.obj6.obj7.obj8.obj9.obj10.message).toBe('Hello World, Its works!')
  })
});
