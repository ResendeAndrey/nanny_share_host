import React from 'react';
import { render, screen } from '@testing-library/react';
import CareAvailable from './careAvailable';
import RoutesNanny from '../../routes/routes';

describe('Header', () => {
  render(
    <RoutesNanny>
      <CareAvailable />
    </RoutesNanny>
  )
  it('should render an item of Care Available', () => {
    expect(screen.getByText('Sarah’s day', {exact: false})).toBeInTheDocument();
  }) 
})