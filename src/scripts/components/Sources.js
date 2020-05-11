import React, { Component } from 'react';
import Request from 'superagent';
import Articles from './Articles';

const FILTERS = {
  country: {
    '--':'--',
    au: 'au',
    de: 'de',
    gb: 'gb',
    in: 'in',
    it: 'it',
    us: 'us',
  },
  language: {
    '--':'--',
    de: 'de',
    en: 'en',
  },
  category: {
    '--':'--',
    business: 'business',
    entertainment: 'entertainment',
    general: ' general',
    technology: 'technology',
  },
};

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
      sourceId: ['bbc-news'],
      articles: null,
      currentFilter: {
        filterKey: 'language',
        filterValue: 'en',
      },
      filters: FILTERS,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);
    this.fetchSources = this.fetchSources.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  // Called before the render method is executed
  componentWillMount() {
    this.fetchSources();
    this.fetchArticles();
  }

  // Call the fetchArticles function when source state changes
  onSubmit(id) {
    this.setState({ sourceId: id }, () => {
      this.fetchArticles();
    });
  }

  // Get a list of sources using the provided filtering parameters
  fetchSources() {
    const url = `https://newsapi.org/v1/sources?${this.state.currentFilter.filterKey}=${this.state.currentFilter.filterValue}`;
    Request.get(url).then((response) => {
      this.setState((Object.assign({}, { sources: response.body.sources })
      ));
    });
  }

  fetchArticles() {
  // Fetch for articles related to the respective sourceId when called
    const url = `https://newsapi.org/v1/articles?source=${this.state.sourceId}&sortBy=top&apiKey=999e8037764a4691ae09301f8a156405`;
    Request
    .get(url)
    .then((response) => {
      this.setState({
        articles: response.body.articles,
      });
    });
  }

  // Handle the actions that occur when the filter parameters are specified
  handleChangeCategory(event) {
    const { name, value } = event.target;
    const callBack = () => {
      this.fetchSources();
    };
    if(name === 'filterKey') {
      this.setState({
        currentFilter: {
          filterKey: value,
        }
      });
    }
    if( this.state.currentFilter.filterKey && name === 'filterValue') {
      this.setState({
        currentFilter: {
          filterKey: this.state.currentFilter.filterKey,
          filterValue: value
        }
      }, callBack);
    }
  }

  // Set new state when a search word is entered
  updateSearch(event) {
    this.setState({
      search: event.target.value,
    });
  }

  render() {
    const {
      sources,
      currentFilter: {
        filterKey,
        filterValue,
      },
    } = this.state;
    // Map filtered sources
    const filteredSources = sources.filter(
     filteredSource => filteredSource[filterKey] === filterValue);
    // Map search using results from the filtered sources
    const sourceFound = filteredSources.filter(
      foundSource => foundSource.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1,
      );
    const topHeading = 'News Sources';
    const filtering = 'Filter by:';

    return (
      <div className="row">
        <div className="col-sm-3 card"><br />
          <div className="source-card">
            <h3><a href="/"><strong>{topHeading}</strong></a></h3>
            <span>
              <input
                type="text"
                className="form-control btn btn-outline-info"
                placeholder="Search Sources"
                value={this.state.search}
                onChange={this.updateSearch}
              />
            </span><br /><br />
            <div className="form-control btn-outline-info">
              <h6>{filtering}</h6>
              <select
                className="form-control btn- mb-2"
                name="filterKey"
                onChange={this.handleChangeCategory}
                defaultValue={this.state.currentFilter.filterKey}
              >
                {Object.keys(this.state.filters).map(key => (
                  <option key={key} value={key}>
                    {key}
                  </option>
          ))}
              </select>
              <select
                className="form-control c-select"
                name="filterValue"
                onChange={this.handleChangeCategory}
                defaultValue={this.state.currentFilter.filterValue}
              >
                {Object.keys(this.state.filters[this.state.currentFilter.filterKey]).map(key => (
                  <option key={key} value={key}>
                    {key}
                  </option>
          ))}
              </select>
            </div>
            <br />
            {/* check the current state of sources and pass them into a function for rendering */}
            {this.state.sources && sourceFound.map(source => (
              <div className="card" key={source.id}>
                <button onClick={() => { this.onSubmit(source.id); }}>
                  <ul>
                    {/* button action calls the onSubmit function which changes the state */}
                    <h5 className="card-title text-justify">{source.name}</h5>
                  </ul>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="card-block card w-75">
          {/* check if the articles exist and render them */}
          <h6 className="float-right">
            <mark>
              <strong>Source:</strong>
              <em> {this.state.sourceId}</em>
            </mark>
          </h6>
          {this.state.articles && <Articles articles={this.state.articles} />}
        </div>
      </div>
    );
  }
}
