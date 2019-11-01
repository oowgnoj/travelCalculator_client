export default function ajax(url, data, type) {
  if (type === 'GET') {
    let str = '?';
    for (const key in data) {
      str += `${key + data[key]}&`;
    }
    str = str.slice(0, -1);
    fetch(url + str)
      .then(response => response.json())
      .then(result => result)
      .catch(err => console.log(err));
  } else {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
        .then(response => response.json())
        .then(result => result)
        .catch(err => console.log(err)),
    });
  }
}
