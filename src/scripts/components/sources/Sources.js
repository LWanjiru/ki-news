import React, { Component } from 'react';
import Request from 'superagent';
import Articles from './../articles/Articles';

export default class SourceList extends Component {
  /**
   * Creates an instance of SourceList.
   *
   * @memberof SourceList
   */
  constructor() {
    super();
    this.state = { sourceId: null, articles: null };
    this.onSubmit = this.onSubmit.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);
  }
  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
    // Get a list of sources
    const url = 'https://newsapi.org/v1/sources?language=en';
    Request.get(url).then((response) => {
      this.setState({
        sources: response.body.sources,
      });
    });
  }
  // Called after the component has been rendered into the page
  // Fetch articles using the given parameters from the specified source
  componentDidMount() {
    const url = 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=213327409d384371851777e7c7f78dfe';
    Request.get(url).then((response) => {
      this.setState({
        articles: response.body.articles,
      });
    });
  }
  // set the state of the sourceId to the corresponding state of the articles
  // whose state was set in fetchArticles()
  onSubmit(id) {
    this.setState({ sourceId: id }, () => {
      this.fetchArticles();
    });
  }

  // Fetch for articles related to the respective sourceId when called
  fetchArticles() {
    const url = `https://newsapi.org/v1/articles?source=${this.state.sourceId}&apiKey=213327409d384371851777e7c7f78dfe`;
    Request.get(url).then((response) => {
      this.setState({
        articles: response.body.articles,
      });
    });
  }

  render() {
    return (
      <div>
        <div id="sidebar" className="right">
          <h1><a href="/">News Sources</a></h1>
          {/* check the current state of sources and pass them into a function for rendering*/}
          {this.state.sources && this.state.sources.map(source => (
            <div className="sources" key={source.id}>
              <ul>
                {/* button action calls the onSubmit function which changes the state*/}
                <button onClick={() => { this.onSubmit(source.id); }}>
                  {source.name}
                </button>
              </ul>
            </div>
            ))}
        </div>

        <div>
          {/* check if the articles exist and render them*/}
          {this.state.articles && <Articles articles={this.state.articles} />}
        </div>
      </div>
    );
  }
}
