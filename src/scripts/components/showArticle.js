import React, { Component } from 'react';
import ShowIframe from './showIframe';

export default class ShowArticle extends Component {
  constructor() {
    super();
    this.state = {
      showFrame: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showFrame: !this.state.showFrame,
    });
  }

  render() {
    let buttonText = 'Click Here To View Full Story in an Iframe';
    if (this.state.showFrame) {
      buttonText = 'Close Frame';
    }

    return (
      <div className="iframe-btn">
        <button
          className="btn btn-success active"
          type="button"
          data-toggle="collapse"
          data-target="#article-frame"
          aria-expanded="false"
          aria-controls="article-frame"
          onClick={this.handleClick}
        >
          {buttonText}
        </button>
        <div className="collapse" id="article-frame">
          <ShowIframe />
        </div>
      </div>
    );
  }
}
