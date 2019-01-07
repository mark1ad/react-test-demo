import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

it('render without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<MyComponent />, div);
  shallow(<MyComponent />);
})

it('renders Hi', () => {
  const wrapper = shallow(<MyComponent />);
  const hi = <h1>Hi</h1>;
  expect(wrapper.contains(hi)).toEqual(true);
})

it('prop test', () => {
  const name = "Mark";
  const wrapper = shallow(<MyComponent name={name}/>);
  const p = <p>{name}</p>
  expect(wrapper.contains(p)).toEqual(true);
})
