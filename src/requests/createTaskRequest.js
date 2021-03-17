const createTaskRequest = async data => {
  const url = 'http://localhost:3002/tasks';

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: ` Bearer ${JSON.parse(localStorage.getItem('token'))}`,
    },
    redirect: 'follow',
    body: JSON.stringify(data),
  });

  return response.json();
};

export default createTaskRequest;
