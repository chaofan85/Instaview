import React from 'react';

class ErrorItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.error}</li>
    );
  }
}

export default ErrorItem;
