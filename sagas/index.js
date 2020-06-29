import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchTweets() {
    const json = yield fetch('https://api.twitter.com/1.1/search/tweets.json?q=realdonaldtrump', { headers: { 'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAHjSFQEAAAAABb1yKIwGINddNVWOSxcl0Q2EjF0%3DiNsyEGCr62CxlfLprXedMMu0R3OFcsNjyZoWXurKhZ8azNMYhA' } })
        .then(response => response.json(),);
    yield put({ type: "TWEETS_RECEIVED", json: json.statuses, });
}

function* actionWatcher() {
    yield takeLatest('GET_TWEETS', fetchTweets)
}
export default function* rootSaga() {
  yield all([
  actionWatcher(),
  ]);
}
