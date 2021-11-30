import React from 'react';
import { render, screen } from '@testing-library/react';
import NannyDailyDiary from './nannyDailyDiary';
import RoutesNanny from '../../routes/routes';

describe('Header', () => {
  render(
    <RoutesNanny>
      <NannyDailyDiary />
    </RoutesNanny>
  )
  it('should render an item of Daily Diary', () => {
    expect(screen.getByText('Coming soon: Nanny', {exact: false})).toBeInTheDocument();
  }) 
})