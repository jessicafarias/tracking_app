import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const NoticeError = ({ message }) => {
  const [state, setState] = useState({ visible: true });

  const handleDismiss = () => {
    setState({ visible: false });
  };

  if (state.visible) {
    return (
      <Message
        onDismiss={handleDismiss}
        header={message}
        content="This is a special notification which you can dismiss."
      />
    );
  }

  return (
    <></>
  );
};

NoticeError.propTypes = {
  message: PropTypes.string,
};

NoticeError.defaultProps = {
  message: 'An error ocurred',
};

export default NoticeError;
