import React from 'react';
import Home from "./Home";
import {mount} from "enzyme";

describe('renders Home page name', () => {
    const setBusy = jest.fn();
    const Spinner = (() => null);
    const useContextSpy = jest.spyOn(React, 'useContext')
    useContextSpy.mockImplementation(() => ( { isBusy: false, setBusy, Spinner }));

    it.skip('should render', ()=>{
        const wrapper = mount(<Home />);
        expect(wrapper).toMatchSnapshot();
    });
});
