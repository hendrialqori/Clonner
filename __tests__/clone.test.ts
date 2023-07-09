import C from "../src/main";
import { describe, expect, it } from "vitest";

describe("Clone", () => {

  const profile = {
    name: "Hendri",
    department: "IT",
    role: "Frontend Developer",
    email: ["hendri@email.co.id", "alqori@yahoo.co.id"],
  };

  it("Should be work mutable array action", () => {
    const profileState = C.clonner(profile, (draft) => {
      draft.email.pop();

      draft.email.unshift("een@email.co.id");
    });

    expect(profileState.email).toEqual(['een@email.co.id','hendri@email.co.id'])

  });

  it("Should be same value", () => {
    const profileState = C.clonner(profile, (draft) => {
      draft.name = "Hendri Alqori";
      draft.department = "Information Technology";
      draft.role = "Frontend Engineer";
    });

    expect(profileState).toEqual({
      name: "Hendri Alqori",
      department: "Information Technology",
      role: "Frontend Engineer",
      email: ["hendri@email.co.id", "alqori@yahoo.co.id"],
    });
  });
});
