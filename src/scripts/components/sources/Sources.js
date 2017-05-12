import React from 'react';
import Request from 'superagent';
import Articles from './../articles/Articles';

export default class SourceList extends React.Component {
  constructor() {
    super();
    this.state = { sourceId: null, articles: null };
    this.onSubmit = this.onSubmit.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);
  }
  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
    const url = 'https://newsapi.org/v1/sources?language=en';
    Request.get(url).then((response) => {
      this.setState({
        sources: response.body.sources,
      });
    });
  }

  componentDidMount() {
    // Called after the component has been rendered into the page

  }

  fetchArticles() {
    const url = `https://newsapi.org/v1/articles?source=${this.state.sourceId}&apiKey=213327409d384371851777e7c7f78dfe`;
    Request.get(url).then((response) => {
      this.setState({
        articles: response.body.articles,
      });
    }).catch((err) => { console.log(err); });
  }

  componentWillReceiveProps(nextProps) {
    // Called when the props provided to the component are changed
  }

  componentWillUpdate(nextProps, nextState) {
    // Called when the props and/or state change
  }

  componentWillUnmount() {
    // Called when the component is removed
  }
  onSubmit(id) {
    // set the state of the sourceId to the corresponding state of the articles
    // whose state was set in fetchArticles()
    this.setState({ sourceId: id }, () => {
      this.fetchArticles();
    });
  }

  render() {
    return (
      <div>
        <div id="sidebar" className="left">
          <h1>News Sources</h1>
          {/* check the current state of sources and pass them into a function for rendering*/}
          {this.state.sources && this.state.sources.map((source) => {
            return (
              <div className="sources" key={source.id}>
                <ul>
                  {/* button action calls the onSubmit function which changes the state*/}
                  <button onClick={() => { this.onSubmit(source.id); }}>
                    {source.name}
                  </button>
                </ul>
              </div>
            );
          })}
        </div>

        <div>
          {/* check if the articles exist and render them*/}
          {this.state.articles && <Articles articles={this.state.articles} />}
        </div>
      </div>
    );
  }
}
