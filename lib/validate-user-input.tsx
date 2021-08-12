
export type userInput = {
  enteredEmail: string;
  enteredName: string;
  enteredMessage: string;
};

const validateUserInput = (userInput: userInput) => {
  let inputIsValid = true;
  const { enteredEmail, enteredName, enteredMessage } = userInput;
  const pattern =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const isValidEmail = pattern.test(enteredEmail);

  if (
    !isValidEmail ||
    !enteredName ||
    enteredName.trim() === '' ||
    !enteredMessage ||
    enteredMessage.trim() === ''
  ) {
    inputIsValid = false;
  }
  return inputIsValid;
};

export default validateUserInput;
