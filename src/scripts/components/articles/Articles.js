import React from 'react';

export default class Articles extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="root" className="main">
        <h1>Headlines</h1>
        {this.props.articles ? this.props.articles.map((article, index) => (
            <div className="art" key={index}>
              <ul>{article.description}
              </ul>
            </div>
          )) :
        <span>No articles yet</span>}
      </div>
    );
  }
}

