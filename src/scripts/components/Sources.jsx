import React, { Component } from 'react';
import Request from 'superagent';
import Articles from './Articles.jsx';
// import SearchSources from './../search/searchSources';


export default class SourceList extends Component {
  /**
   * Creates an instance of SourceList.
   *
   * @memberof SourceList
   */
  constructor() {
    super();
    this.state = { sourceId: [], articles: null };
    this.onSubmit = this.onSubmit.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);
  }

  componentWillMount() {
    this.fetchDefaultSources();
  }

  componentDidMount() {
    this.fetchDefaultArticles();
  }

  fetchDefaultSources() {
    // Called the first time the component is loaded right before the component is added to the page
    // Get a list of sources
    const url = 'https://newsapi.org/v1/sources';
    Request.get(url).then((response) => {
      this.setState({
        sources: response.body.sources,
      });
    });
  }

  fetchDefaultArticles() {
  // Called after the component has been rendered into the page
  // Fetch articles using the given parameters from the specified source
    const url = 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=213327409d384371851777e7c7f78dfe';
    Request.get(url).then((response) => {
      this.setState({
        articles: response.body.articles,
      });
    });
  }

  onSubmit(id) {
  // Change the state when the button is clicked
    this.setState({ sourceId: id }, () => {
      this.fetchArticles();
    });
  }

  fetchArticles() {
      // Fetch for articles related to the respective sourceId when called
    const url = `https://newsapi.org/v1/articles?source=${this.state.sourceId}&apiKey=213327409d384371851777e7c7f78dfe`;
    Request.get(url).then((response) => {
      this.setState({
        articles: response.body.articles,
      });
    });
  }

  searchSources(input){
    let name = this.sourceName
    console.log()
  }

  render() {
    let sources = {sources}
    return (
      <div className="row">
      <div className="col-sm-2">
        <div className="card card-group">
          <h4><a href="/">News Sources</a></h4>
          <span><input placeholder="Search" ref={(input) => this.sourceName = input}/>
            <button className="btn" onClick={() => {this.searchSources.bind(this)}}>Go!</button>
          </span>
          {/* <SearchSources />*/}
          {/* check the current state of sources and pass them into a function for rendering*/}
          {this.state.sources && this.state.sources.map(source => (
            <div className="card" key={source.id}>
              <button onClick={() => { this.onSubmit(source.id); }}>
                <ul>
                  {/* button action calls the onSubmit function which changes the state*/}
                  <h4 className="card-title">{source.name}</h4>
                </ul>
              </button>
            </div>
            ))}
        </div>
      </div>
        <div className="w-75">
          {/* check if the articles exist and render them*/}
          {this.state.articles && <Articles articles={this.state.articles} />}
        </div>
        </div>
    );
  }
}
