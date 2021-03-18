import baseUrl from './requesturl';

const loginRequest = async data => {
  const url = `${baseUrl}/users/sign_in`;
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify(data),
  });

  return response.json();
};

export default loginRequest;
