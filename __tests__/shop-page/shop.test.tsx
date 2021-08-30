/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import Shop from '../../components/shop-page/shop';

describe('Shop Component', () => {
  test('renders "Shop Page - Under Construction"', () => {
    render(<Shop />);

    const headingH1El = screen.getByRole('heading', { level: 1 });
    const headingH2El = screen.getByRole('heading', { level: 2 });
    expect(headingH1El.textContent).toMatch('Shop Page - under construction');
    expect(headingH2El).toBeInTheDocument();
  });
});
