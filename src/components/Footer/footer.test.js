import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './footer';
import RoutesNanny from '../../routes/routes';

describe('Header', () => {
  render(
    <RoutesNanny>
      <Footer />
    </RoutesNanny>
  )
  it('should render an item of footer navbar', () => {
    expect(screen.getByText('Share Your Nanny')).toBeInTheDocument();
  }) 
})