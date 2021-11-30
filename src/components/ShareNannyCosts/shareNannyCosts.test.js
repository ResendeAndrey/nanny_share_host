import React from 'react';
import { render, screen } from '@testing-library/react';
import ShareNannyCosts from './shareNannyCosts';
import RoutesNanny from '../../routes/routes';

describe('Header', () => {
  render(
    <RoutesNanny>
      <ShareNannyCosts />
    </RoutesNanny>
  )
  it('should render an item of NannyCosts', () => {
    expect(screen.getByText('Ready to get started', {exact: false})).toBeInTheDocument();
  }) 
})