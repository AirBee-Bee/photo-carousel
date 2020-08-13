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
    expect(wrapper.children().exists('img')).toEqual(true);
  });

  test('should fetch photos', () => {
    wrapper = mount(<App />);
    expected = {
      photos: [{ 'photo_url': '', 'photo_description': '' }],
      showModal: false,
      currentPhoto: 1
    };
    var actualBefore = wrapper.state();
    expect(actualBefore).toMatchObject(expected);
    var instance = wrapper.instance();
    instance.fetchPhotos('/listing/1/photos', (data) => {
      expect(data).exists().toBeTruthy();
      expect(data.length).toBeGreaterThan(4);
      expect(data.length).toBeLessThan(11);
      done();
    });
  });

  test('should open modal when prompted to', () => {
    wrapper = mount(<App />);
    expected = {
      photos: [{ 'photo_url': '', 'photo_description': '' }],
      showModal: false,
      currentPhoto: 1
    };
    var actualBefore = wrapper.state();
    expect(actualBefore).toMatchObject(expected);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('showModal')).toBe(true);
    wrapper.find('#close-btn').at(0).simulate('click');
    expect(wrapper.state('showModal')).toBe(false);
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
