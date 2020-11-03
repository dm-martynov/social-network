import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="Dimes" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Dimes");
  });

  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="Dimes" />);
    const root = component.root;
    const span = root.findAllByType("span");
    expect(span.length).toBe(1);
  });

  // test("after creation <input> shouldn't be displayed", () => {
  //   const component = create(<ProfileStatus status="Dimes" />);
  //   const root = component.root;
  //   const input = root.findByType("input");
  //   expect(input).toBe("input");
  // });

  test("after creation <span> should contain correct status", () => {
    const component = create(<ProfileStatus status="Dimes" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("Dimes");
  });
});
