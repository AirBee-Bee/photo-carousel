import React from 'react';
import ReactModal from 'react-modal';
import Carousel from '../client/src/components/Carousel.jsx';
import { shallow, mount } from 'enzyme';
import App from '../client/src/components/App.jsx';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

var wrapper;
var expected;
var actual;

describe('App component renders properly', () => {

  test('state is correct when initially rendered', () => {
    wrapper = mount(<App />);
    expected = {
      photos: [{ 'photo_url': '', 'photo_description': '' }],
      showModal: false,
      currentPhoto: 1
    };
    actual = wrapper.state();
    expect(actual).toMatchObject(expected);
  });

  test('should contain an image', () => {
    wrapper = mount(<App />);
    wrapper.setState({
      photos: [{ 'photo_url': '', 'photo_description': '' }],
      showModal: false,
      currentPhoto: 1
    });
    expect(wrapper.children().exists('img')).toEqual(true);
  });

});

describe('Carousel component renders properly', () => {

  test('state is correct when initially rendered', () => {
    var props = {
      photos: [{ 'photo_url': '', 'photo_description': '' }],
      currentPhoto: 1
    };
    wrapper = mount(<Carousel {...props} />);
    expected = {
      currentPhoto: 1,
      animate: false,
      initialRender: true
    };
    actual = wrapper.state();
    expect(actual).toMatchObject(expected);
  });

  test('should contain an image', () => {
    var props = {
      photos: [{ 'photo_url': '', 'photo_description': '' }],
      currentPhoto: 1
    };
    wrapper = mount(<Carousel {...props} />);
    expect(wrapper.children().exists('img')).toEqual(true);
  });

});
