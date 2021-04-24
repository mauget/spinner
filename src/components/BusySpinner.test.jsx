import React from 'react';
import BusySpinner from './BusySpinner';
import { shallow } from 'enzyme';

describe('Spinner', ()=>{
    it('should render', ()=>{
        const wrapper = shallow(<BusySpinner />);
        expect(wrapper).toMatchSnapshot();
    });
});
