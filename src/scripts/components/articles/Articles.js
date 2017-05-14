import React from 'react';
import PropTypes from 'prop-types';

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
      <div id="main" className="stories">
        <a href="/"><h1>Headlines</h1></a>
        <iframe href="/Articles" name="iframe_a" />
        {this.props.articles && this.props.articles.map((article, index) => (
          <div className="art" key={index}>
            <ul>
              <div className="story-pics">
                <a href={article.url} rel="noopener noreferrer" target="iframe_a" >
                  <h3><img src={article.urlToImage} alt="story" />{article.title}</h3></a>
                {article.description}
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
