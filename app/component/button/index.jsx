'use strict';

import React, {Component} from 'react';
import Classnames from 'classnames';

import './index.less';

const CLASS_PREFIX = 'fan-';
const BUTTON_CLASS = CLASS_PREFIX + 'button';
const PRESS_CLASS = BUTTON_CLASS + '-press';
const ACTIVE_CLASS = BUTTON_CLASS + '-active';
const DISABLED_CLASS = BUTTON_CLASS + '-disabled';

const SUCCESS_CLASS = BUTTON_CLASS + '-success';
const WARNING_CLASS = BUTTON_CLASS + '-warning';
const ERROR_CLASS = BUTTON_CLASS + '-error';
const LINK_CLASS = BUTTON_CLASS + '-link';

const propTypes = {
  active: React.PropTypes.bool,
  children: React.PropTypes.any.isRequired,
  disabled: React.PropTypes.bool,
  href: React.PropTypes.string,
  onClick: React.PropTypes.func,
  type: React.PropTypes.oneOf(['button', 'menu', 'reset', 'submit'])
};

const defaultProps = {
  active: false,
  disabled: false,
  href: '',
  onClick: function (disabled) {
  },
  type: 'button'
};

class Button extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {press: false};

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    this.props.onClick(e);
  }

  handleMouseDown() {
    this.setState({press: true});
  }

  handleMouseUp() {
    this.setState({press: false});
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ((this.props.active || this.props.disabled) && nextState.press) {
      return false;
    }
    return true;
  }

  render() {
    const {className, href, link, active, type, disabled, success, warning, error, children, onClick, ...rest} = this.props;

    const classes = Classnames(className, BUTTON_CLASS, {
      [ACTIVE_CLASS]: active,
      [DISABLED_CLASS]: disabled,
      [LINK_CLASS]: href || link,
      [PRESS_CLASS]: this.state.press,
      [SUCCESS_CLASS]: success,
      [WARNING_CLASS]: warning,
      [ERROR_CLASS]: error
    });

    let reactDOM = null;

    if (!!href) {
      reactDOM = <a className={classes} href={href} onClick={this.handleClick} onTouchStart={this.handleMouseDown}
                    onTouchEnd={this.handleMouseUp}>{children}</a>;
    } else {
      reactDOM = <button className={classes} onClick={this.handleClick} onTouchStart={this.handleMouseDown}
                         onTouchEnd={this.handleMouseUp}>{children}</button>;
    }

    return reactDOM;
  }

}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
