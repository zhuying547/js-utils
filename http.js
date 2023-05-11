/**
 * 在 GET 请求中，请求参数是通过 URL 的查询字符串（query string）传递的，
 * 而不是通过请求体发送的，因此不需要设置 Content-Type 请求头部字段。
 *
 * 在 GET 请求中，服务器接收到请求后，会根据查询参数的值来处理请求，并返回相应的结果。
 * 因此，不需要设置 Content-Type 请求头部字段来指定请求体中的数据格式，
 * 也不需要在响应头部中设置 Content-Type 来指定响应体的数据格式。
 */
function get(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.response)
      } else {
        reject(xhr.statusText)
      }
    }
    xhr.onerror = function () {
      reject('Network error')
    }
    xhr.send()
  })
}

get('https://baidu.com/data')
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.error('Error:', error)
  })

/**
 * 一定要根据请求体中的数据格式设置正确的 Content-Type 值
 * 否则可能会导致请求失败或服务器无法正确解析请求体中的数据
 *
 * 在 POST 请求中，请求数据需要通过请求体发送到服务器端
 * 请求体中的数据格式不同，对应的 Content-Type 值也应该不同
 * 如果没有设置 Content-Type 请求头部字段，服务器无法正确地解析请求体中的数据，从而导致请求失败
 * 如果请求体中的数据格式是表单数据（即 key-value 对）Content-Type 的值应该为
 * application/x-www-form-urlencoded 或 multipart/form-data
 *
 */
function post(url, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.response)
      } else {
        reject(xhr.statusText)
      }
    }
    xhr.onerror = function () {
      reject('Network error')
    }
    xhr.send(JSON.stringify(data))
  })
}
