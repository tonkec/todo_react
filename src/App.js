import { useEffect, useState } from 'react';
import CardComponent from './components/CardComponent';
import { getTodos } from './services/api';
import { SimpleGrid, Container } from '@chakra-ui/react';
import InputComponent from './components/InputComponent';

function App() {
  const [todos, setTodos] = useState([]);
  const isEmpty = todos.length === 0;

  const getTodosFromApi = async () => {
    try {
      const result = await getTodos();
      setTodos(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTodosFromApi();
  }, []);
  return (
    <Container>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {!isEmpty &&
          todos.map((todo, i) => <CardComponent key={i} todo={todo} />)}
      </SimpleGrid>
      <InputComponent />
    </Container>
  );
}

export default App;
