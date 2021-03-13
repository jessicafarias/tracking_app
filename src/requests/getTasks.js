const getTasks = async () => {
  const url = 'http://localhost/3001';

  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
  });
  return response.json();
};

export default getTasks;
