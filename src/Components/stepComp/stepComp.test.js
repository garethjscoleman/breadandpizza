import React from 'react';
import { shallow } from 'enzyme';
import StepComp from './stepComp';
describe("StepComp", () => {
  it("should render my recipe Step Component", () => {
    const wrapper = shallow(<StepComp />);
  });

  it("should render layout", () => {
    // when
    const component = shallow(<StepComp title="Step Title" stepdetail="this is the detail" temp="230"/>);
    // then
    expect(component.getElements()).toMatchSnapshot();
});
});

