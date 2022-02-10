import React from 'react';
import ReactDom from 'react-dom';
import Switch from '../../App';

it('renders without crashing', () => {
  const Router = document.createElement('Router');
  ReactDom.render(<Switch></Switch>, Router);
});