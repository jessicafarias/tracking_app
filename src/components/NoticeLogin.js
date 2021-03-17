const NoticeLogin = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  if (token.length < 10 || token === null) {
    return (
      <div className="ui warning message">
        <i className="close icon" />
        <div className="header">
          You must register before you can track!
        </div>
        Visit our registration page, then try again
      </div>
    );
  }
  return (
    <></>
  );
};

export default NoticeLogin;
