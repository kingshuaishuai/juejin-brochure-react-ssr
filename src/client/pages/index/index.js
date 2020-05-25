import React from 'react';

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    alert('学习ssr嘛');
  }

  render() {
    return <h1 onClick={this.handleClick}>Click here!</h1>
  }
}