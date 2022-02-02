import React, {FC, useState} from 'react';

interface FormInputProps {
  type: string;
  label: string;
  value: string | number;
  onChange: any;
  readonly?: boolean;
}

const FormInput: FC<FormInputProps> = ({type = 'text', label, value, onChange, readonly}) => {
  const [error, setError] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value);

  return (
    <div key={label} className='formItem'>
      <label>{label}</label>
      {type === 'textarea'
        ? <textarea
          value={value}
          onChange={handleChange}
        />
        : <input
          className={readonly ? 'inputRead' : 'inputEdit'}
          readOnly={readonly}
          type={type}
          value={value}
          onChange={handleChange}
        />
      }
    </div>
  );
};

export default FormInput;