import baseUrl from './requesturl';

const createTaskRequest = async data => {
  const url = `${baseUrl}/tasks`;

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
