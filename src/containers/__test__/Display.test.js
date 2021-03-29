import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';
import Display from '../Display';

const store = createStore(rootReducer, applyMiddleware(thunk));

describe('Display Dates.js', () => {
  it('renders correctly all dates', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Display />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});