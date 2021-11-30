import React from 'react';
import { render, screen } from '@testing-library/react';
import BillingHistory from './billingHistory';
import RoutesNanny from '../../routes/routes';

describe('Header', () => {
  render(
    <RoutesNanny>
      <BillingHistory />
    </RoutesNanny>
  )
  it('should render an item of Billing History', () => {
    expect(screen.getByAltText('Section 4')).toBeInTheDocument();
  }) 
})