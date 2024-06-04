import { clone, isObject } from '../src/main'
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
  };


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
    });
  });


  it('Should be work when update nested object', () => {

    const profileState = clone(profile, (draft) => {
      draft.adrress.nationality = 'Indonesia'
      draft.adrress.street = 'Jalan Raya Mandor'
    })

    expect(profileState.adrress).toEqual({
      nationality: 'Indonesia',
      street: 'Jalan Raya Mandor'
    })
  })


  it("Throw an error when initial value isn't object", () => {

    const testObj = (obj: any) => {
      if(!isObject(obj))
        throw new Error('params should be an object')
    }
    expect(() => testObj('')).toThrowError(/object/)

  })

});
