import baseUrl from './requesturl';

const logoutRequest = async data => {
  const apiUrl = `${baseUrl}/users/sign_out`;
  const response = await fetch(apiUrl, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify(data),
  });

  return response.json();
};

export default logoutRequest;
