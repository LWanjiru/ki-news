import React, { Component } from 'react';
import Request from 'superagent';
import Articles from './Articles';

export default class SourceList extends Component {
  /**
   * Creates an instance of SourceList.
   *
   * @memberof SourceList
   */
  constructor() {
    super();
    this.state = {
      sources: [],
      search: '',
      sourceId: [],
      articles: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);
  }
  componentWillMount() {
    this.fetchDefaultSources();
  }

  componentDidMount() {
    this.fetchDefaultArticles();
  }

  onSubmit(id) {
  // Change the state when the button is clicked
    this.setState({ sourceId: id }, () => {
      this.fetchArticles();
    });
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

  fetchArticles() {
      // Fetch for articles related to the respective sourceId when called
    const url = `https://newsapi.org/v1/articles?source=${this.state.sourceId}&apiKey=213327409d384371851777e7c7f78dfe`;
    Request.get(url).then((response) => {
      this.setState({
        articles: response.body.articles,
      });
    });
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value,
    });
  }

  render() {
    const foundSource = this.state.sources.filter(
      source => source.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1,
      );

    return (
      <div className="row">
        <div className="col-sm-2">
          <div className="card card-group">
            <h2><a href="/">News Sources</a></h2>
            <span>
              <input
                type="text"
                className="form-control btn btn-outline-info"
                placeholder="Search Sources"
                value={this.state.search}
                onChange={this.updateSearch}
              />
            </span><br /><br />
            {/* check the current state of sources and pass them into a function for rendering*/}
            {this.state.sources && foundSource.map(source => (
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
