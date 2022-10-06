/* eslint-disable react/prop-types */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  CheckboxControl,
  FormButton,
  InputControl,
  SelectControl,
  TextAreaControl,
} from './FormControl';
import { useForm } from './useForm.js';


function Test({ onSubmit, formData }) {
  const [data, handleChange] = useForm(formData);


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputControl
        label="User Name"
        name="user"
        value={data.user || ''}
        onChange={handleChange}
      />

      <SelectControl
        label="Pizza"
        name="pizza"
        value={data.pizza}
        onChange={handleChange}
      >
        <option value="1">Hawaiian</option>
        <option value="2">Pepperoni</option>
        <option value="3">Combo</option>
      </SelectControl>

      <TextAreaControl
        label="Bio"
        name="bio"
        value={data.bio || ''}
        onChange={handleChange}
      />

      <CheckboxControl
        label="Yes"
        name="accepted"
        value={data.accepted || false}
        onChange={handleChange}
      />

      <FormButton>Submit</FormButton>
    </form>
  );
}


test('control changes update data', async () => {
  const user = userEvent.setup();

  const handleSubmit = jest.fn();

  render(<Test onSubmit={handleSubmit} />);

  const input = screen.getByLabelText('User Name');
  await user.type(input, 'username');

  const selectControl = screen.getByLabelText('Pizza');
  await user.selectOptions(selectControl, '1');

  const textArea = screen.getByLabelText('Bio');
  await user.type(textArea, 'about yourself');

  const checkbox = screen.getByLabelText('Yes');
  await user.click(checkbox);

  await user.click(screen.getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledWith({
    user: 'username',
    pizza: '1',
    bio: 'about yourself',
    accepted: true,
  });
});

test('form updates partial data from initial data', async () => {
  const user = userEvent.setup();

  const handleSubmit = jest.fn();

  render(
    <Test
      onSubmit={handleSubmit}
      formData={{
        user: 'username',
        pizza: '1',
        bio: 'about yourself',
        accepted: true,
      }}
    />
  );

  const input = screen.getByLabelText('User Name');
  expect(input.value).toBe('username');
  await user.clear(input);
  await user.type(input, 'updated');

  const selectControl = screen.getByLabelText('Pizza');
  expect(selectControl.value).toBe('1');

  const textArea = screen.getByLabelText('Bio');
  expect(textArea.value).toBe('about yourself');
  await user.clear(textArea);
  await user.type(textArea, 'updated about');

  const checkbox = screen.getByLabelText('Yes');
  await user.click(checkbox);
  expect(checkbox.checked).toBe(true); 
  
  await user.click(screen.getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledWith({
    user: 'updated',
    pizza: '1',
    bio: 'updated about',
    accepted: true,
  });  

});

test.skip('Form updates when initial data changes', async () => {
  const user = userEvent.setup();

  const handleSubmit = jest.fn();

  const { rerender } = render(
    <Test
      onSubmit={handleSubmit}
      formData={{
        user: 'username',
        bio: 'about yourself',
        pizza: '1',
        accepted: true,
      }}
    />
  );

  const input = screen.getByLabelText('User Name');
  await user.clear(input);
  await user.type(input, 'xyz');

  const changedData = {
    user: 'updated',
    bio: 'updated about',
    pizza: '2',
    accepted: false,
  };

  rerender(<Test onSubmit={handleSubmit} formData={changedData} />);

  await user.click(screen.getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledWith(changedData);
});





