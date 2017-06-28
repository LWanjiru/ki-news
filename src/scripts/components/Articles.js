import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ShowIframe from './showIframe';

export default class Articles extends Component {
  /**
   * Creates an instance of Articles.
   *
   * @memberof Articles
   */
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
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
    const articleHeadline = 'Articles';
    const imageWidth = 300;
    let buttonText;
    if (this.state.showFrame) {
      buttonText = 'Close Frame';
    } else if (!this.state.showFrame) {
      buttonText = 'Click on an article to view in Iframe';
    }
    return (
      <div className="articles">
        <a href="/" ><h1 className="heading">{articleHeadline}</h1></a>
        <div className="iframe-btn">
          <button
            className="btn btn-success active"
            type="button"
            aria-expanded="false"
            aria-controls="article-frame"
            onClick={this.handleClick}
          >
            {buttonText}
          </button>
          {this.state.showFrame && <ShowIframe />}
        </div>
        <br />
        <div className="row">
          {this.props.articles && this.props.articles.map(article => (
            <div className="card-group col-sm-6" key={article.title}>
              <ul>
                <div className="card-block">
                  <a href={article.url} onClick={this.handleClick} target="iframe_a" >
                    <h3 className="card-title">
                      {article.title}
                    </h3>
                    <img src={article.urlToImage} width={imageWidth} alt="storyImg" />
                  </a><br />
                  <p className="text-left">{article.description}</p>
                </div>
              </ul>
            </div>))}
        </div>
      </div>
    );
  }
}
Articles.propTypes = {
  articles: PropTypes.arrayOf(String),
};
Articles.defaultProps = null;
