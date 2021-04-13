const DeleteSession = () => {
  const token = localStorage.getItem('token');
  const handleSignOut = () => {
    localStorage.setItem('token', JSON.stringify(token));
  };

  if (token !== null && (token.length > 10)) {
    return (
      <a href="/login" onClick={handleSignOut}>
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
