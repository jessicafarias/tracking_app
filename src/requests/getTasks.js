const getTasks = async (when = '') => {
  const url = `http://localhost:3002/tasks/${when}`;

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
