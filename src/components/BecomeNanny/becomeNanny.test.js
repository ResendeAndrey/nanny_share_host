import React from 'react';
import { render, screen } from '@testing-library/react';
import BecomeNanny from './becomeNanny';
import RoutesNanny from '../../routes/routes';

describe('Header', () => {
  render(
    <RoutesNanny>
      <BecomeNanny />
    </RoutesNanny>
  )
  it('should render an item of Become Nanny', () => {
    expect(screen.getByText('Become a nanny share host')).toBeInTheDocument();
  }) 
})