import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent';
import QuoteStore from '../stores/QuoteStore.js';
import QuoteService from '../services/QuoteService.js';

export default AuthenticatedComponent(class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getQuoteState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    if (!this.state.quote) {
      this.requestNextQuote();
    }

    QuoteStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    QuoteStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(this.getQuoteState());
  }

  requestNextQuote() {
    QuoteService.nextQuote();
  }

  getQuoteState() {
    return {
      quote: QuoteStore.quote
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.quote}</h1>
        <button className="btn btn-primary" type="button" onClick={this.requestNextQuote}>Next Quote</button>
      </div>
    );
  }
});
