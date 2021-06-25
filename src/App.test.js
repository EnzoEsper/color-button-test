import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelCaseWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'});

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});
  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  
  const checkBox = screen.getByRole('checkbox', {name: 'Disable button'});
  const button = screen.getByRole('button', {name: 'Change to blue'});
  
  fireEvent.click(checkBox);
  expect(button).toBeDisabled();
  
  fireEvent.click(checkBox);
  expect(button).toBeEnabled();
});

test('Disabled button has gray background and reverts to red', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {nameL: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  
  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');
  
  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: red');
});

test('Disabled button has gray background and reverts to blue', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {nameL: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  
  //change button to blue
  fireEvent.click(colorButton);

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');
  
  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: blue');
});

describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('Red')).toBe('Red');
  });
  test('works for one inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('MindnightBlue')).toBe('Mindnight Blue');
  });
  test('works for multiple inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
