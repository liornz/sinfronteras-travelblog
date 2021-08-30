/**
 * @jest-environment jsdom
 */

import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../../components/contact-page/contact';

describe('<Contact />', () => {
  test('renders contact form with email address, name and message input fields and a submit button', () => {
    render(<Contact />);
    const emailEl = screen.getByLabelText('Your Email');
    const nameEl = screen.getByLabelText('Your Name');
    const messageEl = screen.getByLabelText('Your Message');
    const buttonEl = screen.getByRole('button');
    expect(emailEl).toBeInTheDocument();
    expect(nameEl).toBeInTheDocument();
    expect(messageEl).toBeInTheDocument();
    expect(buttonEl.textContent).toMatch('Submit');
  });
  test('renders an error message after pressing the "Submit" button when all input fields are invalid', () => {
    render(<Contact />);
    const buttonEl = screen.getByRole('button');
    userEvent.click(buttonEl);

    const output = screen.getByRole('alert');
    expect(output.textContent).toMatch(
      'Please enter a valid email address, name and message!'
    );
  });
  test('input error message is removed after 3 seconds', async () => {
    render(<Contact />);

    const buttonEl = screen.getByRole('button');
    userEvent.click(buttonEl);

    const output = screen.getByRole('alert');
    expect(output.textContent).toMatch(
      'Please enter a valid email address, name and message!'
    );

    await waitFor(() => expect(output.textContent).toMatch('.'), {
      timeout: 3000,
    });
  });
  test('renders an error message after pressing the "Submit" button when entered email has no @ symbol', () => {
    render(<Contact />);

    const buttonEl = screen.getByRole('button');

    const inputEmailEl = screen.getByLabelText('Your Email');
    userEvent.type(inputEmailEl, 'abcexample.com');
    const inputNameEl = screen.getByLabelText('Your Name');
    userEvent.type(inputNameEl, 'John Doe');
    const inputCommentEl = screen.getByLabelText('Your Message');
    userEvent.type(inputCommentEl, 'some comment');

    userEvent.click(buttonEl);
    const output = screen.getByRole('alert');
    expect(output.textContent).toMatch(
      'Please enter a valid email address, name and message!'
    );
  });

  test('renders an error message after pressing the "Submit" button when entered email has no . symbol', () => {
    render(<Contact />);

    const buttonEl = screen.getByRole('button');

    const inputEmailEl = screen.getByLabelText('Your Email');
    userEvent.type(inputEmailEl, 'abc@examplecom');
    const inputNameEl = screen.getByLabelText('Your Name');
    userEvent.type(inputNameEl, 'John Doe');
    const inputCommentEl = screen.getByLabelText('Your Message');
    userEvent.type(inputCommentEl, 'some comment');

    userEvent.click(buttonEl);
    const output = screen.getByText(
      'Please enter a valid email address, name and message!'
    );
    expect(output).toBeInTheDocument();
  });

  test('renders an error message after pressing the "Submit" button when entered name is empty', () => {
    render(<Contact />);

    const buttonEl = screen.getByRole('button');

    const inputEmailEl = screen.getByLabelText('Your Email');
    userEvent.type(inputEmailEl, 'abc@example.com');
    const inputNameEl = screen.getByLabelText('Your Name');
    userEvent.type(inputNameEl, '');
    const inputCommentEl = screen.getByLabelText('Your Message');
    userEvent.type(inputCommentEl, 'some comment');

    userEvent.click(buttonEl);
    const output = screen.getByText(
      'Please enter a valid email address, name and message!'
    );
    expect(output).toBeInTheDocument();
  });

  test('renders an error message after pressing the "Submit" button when entered message is empty', () => {
    render(<Contact />);

    const buttonEl = screen.getByRole('button');

    const inputEmailEl = screen.getByLabelText('Your Email');
    userEvent.type(inputEmailEl, 'abc@example.com');
    const inputNameEl = screen.getByLabelText('Your Name');
    userEvent.type(inputNameEl, 'John Doe');
    const inputMessageEl = screen.getByLabelText('Your Message');
    userEvent.type(inputMessageEl, '');

    userEvent.click(buttonEl);
    const output = screen.getByText(
      'Please enter a valid email address, name and message!'
    );
    expect(output).toBeInTheDocument();
  });
  test('does not render an error message and calls the callback function when the "Submit" button is clicked and input data is valid', () => {
    window.fetch = jest.fn();
    //@ts-ignore
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => {
        return 'success!';
      },
    });
    render(<Contact />);

    const buttonEl = screen.getByRole('button');

    const inputEmailEl = screen.getByLabelText('Your Email');
    userEvent.type(inputEmailEl, 'abc@example.com');
    const inputNameEl = screen.getByLabelText('Your Name');
    userEvent.type(inputNameEl, 'John Doe');
    const inputCommentEl = screen.getByLabelText('Your Message');
    userEvent.type(inputCommentEl, 'some comment');

    userEvent.click(buttonEl);
    const output = screen.getByText('.');
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(output).toBeInTheDocument();
  });
});
