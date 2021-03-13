const getTasks = async () => {
  const url = 'http://localhost:3002/tasks';

  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
  });
  return response.json();
};

export default getTasks;
