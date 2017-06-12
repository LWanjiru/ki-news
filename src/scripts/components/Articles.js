import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return (
      <div id="main" className="card">
        <h1>Headlines</h1>
        <div className="">
          <iframe href="/Articles" name="iframe_a" /><br /><br />
        </div>
        {this.props.articles && this.props.articles.map(article => (
          <div className="" key={article.title}>
            <ul>
              <div className="">
                <a href={article.url} rel="noopener noreferrer" onClick="" target="_top" >
                  <h3 className="card-title">
                    {article.title}
                  </h3>
                  <img src={article.urlToImage} width="500" alt="story" />
                </a>
                <p className="card-text">{article.description}</p><br />
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
