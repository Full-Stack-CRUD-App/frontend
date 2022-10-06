import { useState } from 'react';

function getValue(target) {
  return target.type === 'checkbox' ? target.checked : target.value;
}

export function useForm(formData) {
  const [data, setData] = useState({ ...formData });

  const handleChange = ({ target }) => {
    setData((data) => ({
      ...data,
      [target.name]: getValue(target),
    }));
  };

  const reset = () => setData({ ...formData });

  return [data, handleChange, reset];
}
