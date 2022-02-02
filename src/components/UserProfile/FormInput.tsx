import React, {FC, useState} from 'react';

interface FormInputProps {
  type: string;
  label: string;
  value: string | number;
  onChange: any;
}

const FormInput: FC<FormInputProps> = ({type = 'text', label, value, onChange}) => {
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value);

  return (
    <div className='formItem'>
      <label>{label}</label>
      {type === 'textarea'
        ? <textarea
          value={value}
          onChange={handleChange}
        />
        : <input
          readOnly
          type={type}
          value={value}
          onChange={handleChange}
        />
      }
    </div>
  );
};

export default FormInput;