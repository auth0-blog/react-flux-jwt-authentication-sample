import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {QUOTE_GET} from '../constants/QuoteConstants.js';

export default {
  gotQuote: (quote) => {
    AppDispatcher.dispatch({
      actionType: QUOTE_GET,
      quote: quote
    })
  }
}
