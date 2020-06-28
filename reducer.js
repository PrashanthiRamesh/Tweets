export const GET_TWEETS = 'GET_TWEETS';
export const GET_TWEETS_SUCCESS = 'GET_TWEETS_SUCCESS';
export const GET_TWEETS_FAIL = 'GET_TWEETS_FAIL';

export default function reducer(state = { tweets: [] }, action) {
    // console.log(action)
    switch (action.type) {
      case GET_TWEETS:
        return { ...state, loading: true };
      case GET_TWEETS_SUCCESS:
        return { ...state, loading: false, repos: action.payload.data };
      case GET_TWEETS_FAIL:
        return {
          ...state,
          loading: false,
          error: 'Error while fetching tweets'
        };
      default:
        return state;
    }
  }

  export function listTweets(user) {
    return {
      type: GET_TWEETS,
      payload: {
        request: {
          url: `/1.1/search/tweets.json?q=${user}`
        }
      }
    };
  }