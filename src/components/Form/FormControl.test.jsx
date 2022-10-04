import { render, screen } from '@testing-library/react';
import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
  FormButton
} from './FormControl.jsx';

test('Input Control', async () => {
  render(
    <InputControl
      label="User Name"
      name="username"
      required
      placeholder="Your user name"
    />
  );

  const inputControl = screen.getByLabelText('User Name');
  expect(inputControl.name).toBe('username');
  expect(inputControl.placeholder).toBe('Your user name');
  expect(inputControl.required).toBe(true);
});

test('Select Control', async () => {
  render(
    <SelectControl label="Pizza" name="pizza" required>
      <option>Hawaiian</option>
      <option>Pepperoni</option>
      <option>Combo</option>
    </SelectControl>
  );

  const selectControl = screen.getByLabelText('Pizza');
  expect(selectControl.name).toBe('pizza');
  expect(selectControl.required).toBe(true);
  expect(selectControl.options.length).toBe(3);
});

test('Select Control with placeholder', async () => {
  render(
    <SelectControl label="Pizza" placeholder="choose a type of pizza">
      <option>Hawaiian</option>
      <option>Pepperoni</option>
      <option>Combo</option>
    </SelectControl>
  );

  const selectControl = screen.getByLabelText('Pizza');
  expect(selectControl.options.length).toBe(4);
  const placeHolderOption = selectControl.options[0];
  expect(placeHolderOption.textContent).toBe('choose a type of pizza');
  expect(placeHolderOption.disabled).toBe(true);
});

test('Text Area Control', async () => {
  render(
    <TextAreaControl
      label="Bio"
      name="bio"
      required
      placeholder="about yourself"
    />
  );

  const textAreaControl = screen.getByLabelText('Bio');
  expect(textAreaControl.name).toBe('bio');
  expect(textAreaControl.required).toBe(true);
  expect(textAreaControl.placeholder).toBe('about yourself');
});

test('Checkbox Control', async () => {
  render(
    <CheckboxControl
      legend="Yes or no?"
      label="Yes"
      name="accept"
      required
    />
  );

  const legend = screen.getByText('Yes or no?');
  expect(legend).not.toBeNull();
  const checkboxControl = screen.getByLabelText('Yes');
  expect(checkboxControl.required).toBe(true);
});

test('Form Button', async () => {
  render(<FormButton>submit form</FormButton>);

  const btn = screen.getByRole('button');
  expect(btn.textContent).toBe('submit form');
});
