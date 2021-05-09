export default function getJSON(url, callback) {
  const xhr = new XMLHttpRequest(); // eslint-disable-line
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function test() {
    const { status } = xhr;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
}
