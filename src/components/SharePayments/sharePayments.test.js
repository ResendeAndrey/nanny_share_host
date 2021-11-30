import React from 'react';
import { render, screen } from '@testing-library/react';
import SharePayments from './sharePayments';
import RoutesNanny from '../../routes/routes';

describe('Header', () => {
  render(
    <RoutesNanny>
      <SharePayments />
    </RoutesNanny>
  )
  it('should render an item of Share Payments', () => {
    expect(screen.getByText('Shared payments made', {exact: false})).toBeInTheDocument();
  }) 
})