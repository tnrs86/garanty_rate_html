export let sendPost = function (url, data, handler) {

  let xhr = new XMLHttpRequest();

  xhr.open('POST', url);

  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  xhr.send(JSON.stringify(data));

  xhr.onload = function () {
    handler(JSON.parse(xhr.response))
  }

  xhr.onerror = function () {
    console.log('http error')
  }
}

let objectTransform = function (obj) {

  if (typeof obj === 'string') {
    return obj
  }

  let keys = Object.keys(obj);
  let result = "";

  keys.forEach((key, index) => {
    if (index == 0) {
      result += key + '=' + obj[key];

    } else {
      result += '&' + key + '=' + obj[key];
      console.log(result)
    }
  })

  return result;
}

