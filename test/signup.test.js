import React, { Component } from 'react'
//import chai from 'chai';
import {expect} from 'chai';
import { mount, shallow } from 'enzyme';
const sinon = require('sinon');
import Signup from '../client/components/Signup';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe('Signup Component', () => {
    it('should have email and password', () => {
        const wrapper = shallow(<Signup/>);
        expect(wrapper.find('Form').first().children()).to.have.length(4);
    });

    it('should have two buttons', () => {
        const wrapper = shallow(<Signup />);
        expect(wrapper.find('Button')).to.have.length(2);
    });

    // it('should have a valid finish button', () => {
    //     const wrapper = shallow(<Signup />);
    //     wrapper.find('Button').last().simulate('click');
    //     expect(wrapper.state('dimmer')).to.equal(false);
    // });


});
