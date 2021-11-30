import React from 'react';
import { render, screen } from '@testing-library/react';
import Framework from './framework';
import RoutesNanny from '../../routes/routes';

describe('Header', () => {
  render(
    <RoutesNanny>
      <Framework />
    </RoutesNanny>
  )
  it('should render an item of framework section', () => {
    expect(screen.getByText('A framework built for', {exact: false})).toBeInTheDocument();
  }) 
})