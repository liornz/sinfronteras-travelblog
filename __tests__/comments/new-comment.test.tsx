/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewComment from '../../components/comments/new-comment';

describe('<NewComment />', () => {
  test('renders a form with email address, name and message input fields and a "Submit" button', () => {
    render(<NewComment onAddComment={() => {}} />);

    const emailEl = screen.getByLabelText('Your Email');
    const nameEl = screen.getByLabelText('Your Name');
    const messageEl = screen.getByLabelText('Your Message');
    const buttonEl = screen.getByRole('button');
    expect(emailEl).toBeInTheDocument();
    expect(nameEl).toBeInTheDocument();
    expect(messageEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl.textContent).toMatch('Submit');
  });

  test('renders an error message after pressing the "Submit" button when all input fields are invalid', () => {
    render(<NewComment onAddComment={() => {}} />);

    const buttonEl = screen.getByRole('button');
    userEvent.click(buttonEl);

    const output = screen.getByText('Please enter valid inputs!');
    expect(output).toBeInTheDocument();
  });

  test('input error message is removed after 3 seconds', async () => {
    render(<NewComment onAddComment={() => {}} />);

    const buttonEl = screen.getByRole('button');
    userEvent.click(buttonEl);

    const output = screen.getByRole('alert');
    expect(output.textContent).toMatch('Please enter valid inputs!');

    await waitFor(() => expect(output.textContent).toMatch('.'), {
      timeout: 3000,
    });
  });

  test('renders an error message after pressing the "Submit" button when entered email has no @ symbol', () => {
    render(<NewComment onAddComment={() => {}} />);

    const buttonEl = screen.getByRole('button');

    const inputEmailEl = screen.getByLabelText('Your Email');
    userEvent.type(inputEmailEl, 'abcexample.com');
    const inputNameEl = screen.getByLabelText('Your Name');
    userEvent.type(inputNameEl, 'John Doe');
    const inputCommentEl = screen.getByLabelText('Your Message');
    userEvent.type(inputCommentEl, 'some comment');

    userEvent.click(buttonEl);
    const output = screen.getByRole('alert');
    expect(output.textContent).toMatch('Please enter valid inputs!');
  });

  test('renders an error message after pressing the "Submit" button when entered email has no . symbol', () => {
    render(<NewComment onAddComment={() => {}} />);

    const buttonEl = screen.getByRole('button');

    const inputEmailEl = screen.getByLabelText('Your Email');
    userEvent.type(inputEmailEl, 'abc@examplecom');
    const inputNameEl = screen.getByLabelText('Your Name');
    userEvent.type(inputNameEl, 'John Doe');
    const inputCommentEl = screen.getByLabelText('Your Message');
    userEvent.type(inputCommentEl, 'some comment');

    userEvent.click(buttonEl);
    const output = screen.getByText('Please enter valid inputs!');
    expect(output).toBeInTheDocument();
  });

  test('renders an error message after pressing the "Submit" button when entered name is empty', () => {
    render(<NewComment onAddComment={() => {}} />);

    const buttonEl = screen.getByRole('button');

    const inputEmailEl = screen.getByLabelText('Your Email');
    userEvent.type(inputEmailEl, 'abc@example.com');
    const inputNameEl = screen.getByLabelText('Your Name');
    userEvent.type(inputNameEl, '');
    const inputCommentEl = screen.getByLabelText('Your Message');
    userEvent.type(inputCommentEl, 'some comment');

    userEvent.click(buttonEl);
    const output = screen.getByText('Please enter valid inputs!');
    expect(output).toBeInTheDocument();
  });

  test('renders an error message after pressing the "Submit" button when entered comment is empty', () => {
    render(<NewComment onAddComment={() => {}} />);

    const buttonEl = screen.getByRole('button');

    const inputEmailEl = screen.getByLabelText('Your Email');
    userEvent.type(inputEmailEl, 'abc@example.com');
    const inputNameEl = screen.getByLabelText('Your Name');
    userEvent.type(inputNameEl, 'John Doe');
    const inputCommentEl = screen.getByLabelText('Your Message');
    userEvent.type(inputCommentEl, '');

    userEvent.click(buttonEl);
    const output = screen.getByText('Please enter valid inputs!');
    expect(output).toBeInTheDocument();
  });

  test('does not render an error message and calls the callback function when the "Submit" button is clicked and input data is valid', () => {
    const addCommentHandler = jest.fn();
    render(<NewComment onAddComment={addCommentHandler} />);

    const buttonEl = screen.getByRole('button');

    const inputEmailEl = screen.getByLabelText('Your Email');
    userEvent.type(inputEmailEl, 'abc@example.com');
    const inputNameEl = screen.getByLabelText('Your Name');
    userEvent.type(inputNameEl, 'John Doe');
    const inputCommentEl = screen.getByLabelText('Your Message');
    userEvent.type(inputCommentEl, 'some comment');

    userEvent.click(buttonEl);
    const output = screen.getByText('.');
    expect(addCommentHandler).toHaveBeenCalledTimes(1);
    expect(output).toBeInTheDocument();
  });
});
