const loginRequest = async data => {
  const apiUrl = 'http://localhost:3002/users/sign_in';
  const response = await fetch(apiUrl, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer TOKEN', 'Access-Token': 'Bearer' },
    redirect: 'follow',
    body: JSON.stringify(data),
  });

  return response.json();
};

export default loginRequest;
