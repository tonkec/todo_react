import { Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { saveTodo } from '../../services/api';

const InputComponent = () => {
  const [value, setValue] = useState('');
  const handleChange = (event) => setValue(event.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo(value);
    console.log('here');
  };
  return (
    <>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Next todo"
        size="sm"
      />
      <Button size="md" onClick={handleSubmit}>
        Save new todo
      </Button>
    </>
  );
};

export default InputComponent;
