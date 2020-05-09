import React, { Component } from 'react';
import { PropTypes } from 'prop-types';


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
    return (
      <div className="articles">
        <a href="/" ><h1 className="heading mb-2"><u>{articleHeadline}</u></h1></a>
        <div className="row">
          {this.props.articles && this.props.articles.map(article => (
            <div className="card-group col-sm-6" key={article.title}>
              <ul>
                <div className="card-block">
                  <a href={article.url} onClick={this.handleClick} target="iframe_a" >
                    <h3 className="card-title">
                      {article.title}
                    </h3>
                    <img
                      className="img-thumbnail img-fluid"
                      src={article.urlToImage}
                      alt="storyImg"
                    />
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
