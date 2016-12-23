import React from 'react';
import { Button } from '../../component';
import './index.less';

export default class Layout extends React.Component {

  render() {
    const { active, ...rest } = this.props;
    let str = '按钮';
    if (active) {
      str = 'button';
    }
    return (<div {...rest} className="layout"><Button>{str}</Button></div>);
  }

}
