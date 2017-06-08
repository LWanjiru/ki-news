import React from 'react';
import PropTypes from 'prop-types';
import SourceList from './Sources.jsx';

export default class Articles extends React.Component {
  /**
   * Creates an instance of Articles.
   *
   * @memberof Articles
   */
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="main" className="card">
        <h1>Headlines</h1>
        <span><input placeholder="Search" />
            <button>Go!</button>
        </span><br />
        {this.props.articles && this.props.articles.map((article, index) => (
          <div className="" key={index}>
            <ul>
              <div className="">
                <a href={article.url} rel="noopener noreferrer" target="blank" >
                  <h3 className="card-title">
                    {article.title}
                  </h3>
                  <img src={article.urlToImage} width="500" alt="story" />
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
