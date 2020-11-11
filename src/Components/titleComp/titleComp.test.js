import React from 'react';
import { shallow } from 'enzyme';
import TitleComp from './titleComp';
describe("TitleComp", () => {
  it("should render my title Component", () => {
    const wrapper = shallow(<TitleComp />);
  });

  it("should render layout", () => {
    // when
    const component = shallow(<TitleComp title="baguette" subtitle="a french bread"/>);
    // then
    expect(component.getElements()).toMatchSnapshot();
});
});

