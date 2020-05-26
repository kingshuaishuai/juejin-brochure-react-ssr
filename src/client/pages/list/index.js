import React from 'react';
import mockData from './data';
import { Helmet } from 'react-helmet';

const pageInfo = {
  tdk: {
    title:'首页',
    keywords:'前端技术江湖 列表页',
    description:'前端技术江湖 列表页'
  }
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    let initialData;
    if (__SERVER__) {
      initialData = props.staticContext.initialData || {};
    } else {
      initialData = props.initialData || {};
    }
    initialData.page = pageInfo;
    this.state = initialData;
  }

  componentDidMount() {
    if (!this.state.data) {
      const fetchDataFn = Index.getInitialProps();
      fetchDataFn().then(res => {
        this.setState({
          data: res.data || []
        })
      })
    }
  }

  static getInitialProps() {
    const fetchData = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            code: 0,
            data: mockData
          })
        })
      })
    };

    return fetchData
  }

  render() {
    const {data} = this.state;
    const {tdk} = this.state.page;
    return (
      <div>
        <Helmet>
          <title>{tdk.title}</title>
          <meta name="description" content={tdk.description}/>
          <meta name="keywords" content={tdk.keywords}/>
        </Helmet>
        {
          data && data.map(item => {
            return (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            )
          })
        }
        {
          !data && <div>暂无数据</div>
        }
      </div>
    )
  }
}