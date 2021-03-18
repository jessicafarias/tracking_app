const DeleteSession = () => {
  const token = localStorage.getItem('token');

  if (token !== null && (token.length > 10)) {
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
