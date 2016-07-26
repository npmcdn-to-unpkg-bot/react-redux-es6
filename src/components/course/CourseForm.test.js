import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setUp() {
    let props = {
      course: {}, saving, false, errors: {}
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm/>);
    let output = renderer.getRenderOutput();

}

describe('CourseForm via React Test Utils', () => {
    it('renders form and h1', () => {

    });
});