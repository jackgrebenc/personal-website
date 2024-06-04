import React, { useState } from "react";

// Define the type for the props
interface TextInputProps {
  initialValue?: string;
  checkValid: (word: string) => boolean;
  disabled: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  initialValue = "",
  checkValid,
  disabled,
}) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (checkValid(value)) {
      setValue("");
    }
  };

  return (
    <span>
      <input
        type="text"
        value={value}
        disabled={disabled}
        onChange={handleInputChange}
      />
    </span>
  );
};

export default TextInput;
