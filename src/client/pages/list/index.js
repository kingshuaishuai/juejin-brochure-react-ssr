import React from 'react';
import mockData from './data';

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    let initialData;
    if (__SERVER__) {
      initialData = props.staticContext.initialData || {};
    } else {
      initialData = props.initialData || {};
    }
    this.state = initialData;
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
    return (
      <div>
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