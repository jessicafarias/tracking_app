import baseUrl from './requesturl';

const getTasks = async (when = '') => {
  const url = `${baseUrl}/tasks/${when}`;

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
