import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowArticle from './showArticle';

export default class Articles extends Component {
  /**
   * Creates an instance of Articles.
   *
   * @memberof Articles
   */
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  render() {
    const articleHeadline = 'Articles';
    const imageWidth = 400;
    return (
      <div className="card">
        <h1 className="articles">{articleHeadline}</h1>
        <ShowArticle /><br />
        {this.props.articles && this.props.articles.map(article => (
          <div className="" key={article.title}>
            <ul>
              <div className="">
                <a href={article.url} target="iframe_a" >
                  <h3 className="card-title">
                    {article.title}
                  </h3>
                  <img src={article.urlToImage} width={imageWidth} alt="story" />
                </a>
                <p className="card-text">{article.description}</p>
              </div>
            </ul>
          </div>))}
      </div>
    );
  }
}
Articles.propTypes = {
  articles: PropTypes.arrayOf(String).isRequired,
};
