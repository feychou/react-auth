import { useState } from 'react';

function useFormData(initialValue) {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return [formData, handleChange];
}

export default useFormData;