import api from './index';

export const getTodos = () =>
  api
    .get('/todos')
    .then((res) => res)
    .catch((err) => err);

export const saveTodo = (todoTitle) => {
  console.log(todoTitle);
  return api
    .post('/todo', { title: todoTitle })
    .then((res) => res)
    .catch((err) => err);
};
