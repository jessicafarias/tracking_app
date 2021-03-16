const getTasks = async token => {
  const url = 'http://localhost:3002/tasks';

  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export default getTasks;
