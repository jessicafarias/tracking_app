const DeleteSession = () => {
  const token = JSON.parse(localStorage.getItem('token'));

  if (token !== '') {
    localStorage.setItem('token', JSON.stringify(null));
    window.location.assign('/');
    return (
      <a href="/login">
        <i className="sign out alternate icon" />
      </a>
    );
  }
  return (
    <a href="/login">
      <i className="sign in alternate icon" />
    </a>
  );
};

export default DeleteSession;
