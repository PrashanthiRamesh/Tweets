const { startCase } = require("lodash")

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TWEETS':
            return { ...state, loading: true }
        case 'TWEETS_RECEIVED':
            return { ...state, tweets: action.json, loading: false }
        default:
            return startCase
    }
}

export default reducer