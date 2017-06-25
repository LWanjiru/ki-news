import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ShowArticle from './showArticle';

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
    };
  }

  render() {
    const articleHeadline = 'Articles';
    const imageWidth = 300;
    return (
      <div className="articles">
        <a href="/" ><h1 className="heading">{articleHeadline}</h1></a>
        <ShowArticle /><br />
        <div className="row">
          {this.props.articles && this.props.articles.map(article => (
            <div className="card-group col-sm-6" key={article.title}>
              <ul>
                <div className="card-block">
                  <a href={article.url} target="iframe_a" >
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
