import PropTypes from 'prop-types';
import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

const Loading = ({ display }) => {
  if (display) {
    return (
      <Message icon>
        <Icon name="circle notched" loading />
        <Message.Content>
          <Message.Header>Just one second</Message.Header>
          We are fetching that content for you.
        </Message.Content>
      </Message>
    );
  }
  return (<></>);
};

Loading.propTypes = {
  display: PropTypes.bool,
};

Loading.defaultProps = {
  display: true,
};

export default Loading;
