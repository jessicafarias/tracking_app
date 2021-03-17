const getTasks = async () => {
  const url = 'http://localhost:3002/tasks';

  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
    },
  });
  return response.json();
};

export default getTasks;
