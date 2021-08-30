/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import Comments from '../../components/comments/comments';

describe('<Comments />', () => {
  test('renders a list of comments', async () => {
    window.fetch = jest.fn();
    //@ts-ignore
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => {
        return {
          comments: [
            {
              _id: '1',
              name: 'Someone',
              email: 'me@example.com',
              text: 'some comment',
            },
          ],
        };
      },
    });
    render(<Comments destinationSlug="destination" countrySlug="country" />);

    const commentsElements = await screen.findAllByRole('listitem');
    expect(commentsElements).toHaveLength(1);
  });
});
