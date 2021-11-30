import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';
import RoutesNanny from '../../routes/routes';

describe('Header', () => {
  render(
    <RoutesNanny>
      <Header />
    </RoutesNanny>
  )
  it('should render an item of navbar', () => {
    expect(screen.getByText('Create Your Nanny Share')).toBeInTheDocument();
  }) 
})


