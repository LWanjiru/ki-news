import React, { Component } from 'react';
import Request from 'superagent';
import Articles from './Articles';

const FILTERS = {
  country: {
    '--': '--',
    au: 'au',
    de: 'de',
    gb: 'gb',
    in: 'in',
    it: 'it',
    us: 'us',
  },
  language: {
    '--': '--',
    de: 'de',
    en: 'en',
  },
  category: {
    '--': '--',
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
    const url = `https://newsapi.org/v1/articles?source=${this.state.sourceId}&sortBy=latest&apiKey=999e8037764a4691ae09301f8a156405`;
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
    if (name === 'filterKey') {
      this.setState({
        currentFilter: {
          filterKey: value,
        },
      });
    }
    if (this.state.currentFilter.filterKey && name === 'filterValue') {
      this.setState({
        currentFilter: {
          filterKey: this.state.currentFilter.filterKey,
          filterValue: value,
        },
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
    // eslint-disable-next-line one-var
    const filteredSources = sources.filter(
     filteredSource => filteredSource[filterKey] === filterValue),
    // Map search using results from the filtered sources
      sourceFound = filteredSources.filter(
      foundSource => foundSource.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1,
    ),
      topHeading = 'News Sources',
      filtering = 'Filter by:';

    return (
      <div className="row">
        <div className="col-sm-3 card"><br />
          <div className="source-card pb-5">
            <h3 className="mt-3 mb-3"><a href="/"><strong>{topHeading}</strong></a></h3>
            <span><input
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
                {Object.keys(this.state.filters).map(key => (<option key={key} value={key}>
                  {key}</option>))}
              </select>
              <select
                className="form-control c-select"
                name="filterValue"
                onChange={this.handleChangeCategory}
                defaultValue={this.state.currentFilter.filterValue}
              >
                {Object.keys(this.state.filters[this.state.currentFilter.filterKey]).map(key => (
                  <option key={key} value={key}>{key}</option>))}
              </select>
            </div>
            <br />
            <div className="p-2 text-right">
              <button className="toggler rounded pt-1" type="button" data-toggle="collapse" data-target="#sourceToggle" aria-controls="sourceToggle" aria-expanded="true" aria-label="Toggle navigation">
                <span className="toggler-icon"><i className="fa fa-bars" style={{ color: '#5bc0de', fontSize: '24px' }} /></span>
              </button>
              <div className="text-left text-muted"><small>*Use toggle button to hide and view source list*</small></div>
            </div>
            {/* check the current state of sources and pass them into a function for rendering */}
            <div id="sourceToggle" className="collapse show">{this.state.sources && sourceFound.map(source => (
              <div className="col-lg-12 col-md-12 btn-group-sm" >
                <button className="col col-md-12 btn btn-outline-info pb-0" key={source.id} onClick={() => { this.onSubmit(source.id); }}>
                  <ul className="p-0">
                    {/* button action calls the onSubmit function which changes the state */}
                    <p className="my-auto pt-3 pb-1 text-truncate" style={{ fontSize: '.95em' }}><strong>{source.name}</strong></p>
                  </ul>
                </button>
              </div>))}
            </div>
          </div>
        </div>
        <div className="card-block card w-75 pt-5">
          {/* check if the articles exist and render them */}
          <h6 className="float-right"><mark className=""><strong>Source:</strong>
            <em> {this.state.sourceId}</em></mark>
          </h6>
          {this.state.articles && <Articles articles={this.state.articles} />}
        </div>
      </div>
    );
  }
}
