import React from 'react';

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    alert('学习ssr嘛');
  }

  render() {
    return <div onClick={this.handleClick}>首页 Click here!</div>
  }
}