import React from 'react';
import { Helmet } from 'react-helmet';

const pageInfo = {
  tdk:{
    title:'首页',
    keywords:'前端技术江湖',
    description:'前端技术江湖'
  }
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: pageInfo
    }
  }

  handleClick() {
    alert('学习ssr嘛');
  }

  render() {
    const { tdk } = this.state.page;
    return <div>
      <Helmet>
        <title>{tdk.title}</title>
        <meta name="description" content={tdk.description}/>
        <meta name="keywords" content={tdk.keywords}/>
      </Helmet>
      首页 Click here!
    </div>
  }
}