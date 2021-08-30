/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { commentData } from '../../lib/types';

import CommentsList from '../../components/comments/comments-list';

describe('<CommentsList />', () => {
  test('renders a spinner when loading prop is true', () => {
    const comments = [
      {
        _id: '1',
        name: 'Person1',
        email: 'person1@example.com',
        text: 'some comment...',
      },
      {
        _id: '2',
        name: 'Person2',
        email: 'person2@example.com',
        text: 'some comment...',
      },
    ];
    render(<CommentsList comments={comments} isLoading={true} />);
    const spinner = screen.getByRole('timer');
    const listItems = screen.queryAllByRole('listitem');
    expect(spinner).toBeInTheDocument();
    expect(listItems).toHaveLength(0);
  });
  test('renders nothing when loading prop is false but comment list has length of 0', () => {
    const comments: commentData[] = [];
    render(<CommentsList comments={comments} isLoading={false} />);

    const spinner = screen.queryByRole('timer');
    const listItems = screen.queryAllByRole('listitem');
    expect(spinner).toBeNull();
    expect(listItems).toHaveLength(0);
  });
  test('renders the received comments list when loading prop is false', () => {
    const comments = [
      {
        _id: '1',
        name: 'Person1',
        email: 'person1@example.com',
        text: 'some comment...',
      },
      {
        _id: '2',
        name: 'Person2',
        email: 'person2@example.com',
        text: 'some comment...',
      },
    ];
    render(<CommentsList comments={comments} isLoading={false} />);
    const spinner = screen.queryByRole('timer');
    const listItems = screen.queryAllByRole('listitem');
    const title = screen.getByRole('note');
    expect(spinner).toBeNull();
    expect(listItems).toHaveLength(2);
    expect(title.textContent).toMatch('Comments');
  });
});
