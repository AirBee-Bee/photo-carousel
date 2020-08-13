import React from 'react';
import ReactModal from 'react-modal';
import Carousel from '../client/src/components/Carousel.jsx';
import { shallow, mount } from 'enzyme';
import App from '../client/src/components/App.jsx';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('Initial component state is appropriate', () => {

  var wrapper;
  var expected;
  var actual;

  test('App component state is correct when initially rendered', () => {
    wrapper = shallow(<App />);
    expected = {
      photos: [],
      showModal: false,
      currentPhoto: 1
    };
    actual = wrapper.state();
    expect(actual).toMatchObject(expected);
  });

  test('Carousel component state is correct when initially rendered', () => {
    var props = {
      photos: [{ 'photo_url': '', 'photo_description': '' }],
      currentPhoto: 1
    };
    wrapper = shallow(<Carousel {...props} />);
    expected = {
      currentPhoto: 1,
      animate: false,
      initialRender: true
    };
    actual = wrapper.state();
    expect(actual).toMatchObject(expected);
  });

});
