import React from 'react';
import { shallow } from 'enzyme';
import BreadMenuItem from './breadMenuitem';
describe("BreadMenuItem", () => {
  it("should render  bread menu item Component", () => {
    const wrapper = shallow(<BreadMenuItem />);
  });

  it("should render layout", () => {
    // when
    const component = shallow( <BreadMenuItem placetogo="place" navigation="akey"  breadtitle="abread"/>);
    // then
    expect(component.getElements()).toMatchSnapshot();
});
});

