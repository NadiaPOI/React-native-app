import React from "react";
import { shallow } from "enzyme";
import { Text, View } from "react-native";

import App from "./App";

describe("App", () => {
  it("renders View", () => {
    const component = shallow(<App />);
    expect(component.find(View)).toHaveLength(1);
  });
  it('renders Text with text "Aucun article"', () => {
    const component = shallow(<App />);
    expect(component.find(View).contains(<Text>Aucun Article</Text>));
  });
});
