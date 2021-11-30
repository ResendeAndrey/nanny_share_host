import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsLetterShare from './newsLetterShare';
import RoutesNanny from '../../routes/routes';

describe('Header', () => {
  render(
    <RoutesNanny>
      <NewsLetterShare />
    </RoutesNanny>
  )
  it('should render an item of newsLetter', () => {
    expect(screen.getByText('Are you a parent without', {exact: false})).toBeInTheDocument();
  }) 
})