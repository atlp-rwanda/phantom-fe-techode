import React from 'react';
import ReactDom from 'react-dom';
import Navbar from '../Navbar';
import { render } from '@testing-library/react';

import "@testing-library/jest-dom/extend-expect";


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<li></li>, div);
  });

