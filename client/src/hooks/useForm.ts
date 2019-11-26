import { useState } from 'react';

export const useForm = (initialState: any) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e: any) => setValues({ ...values, [e.target.name]: e.target.value });

  const resetForm = () => setValues(initialState);

  return { values, handleChange, resetForm };
};
