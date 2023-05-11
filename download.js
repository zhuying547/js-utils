/**
 * 当使用 Ajax 下载文件时，客户端代码会发送一个异步 HTTP 请求到服务器，
 * 服务器会将文件数据作为响应的一部分返回。但是，Ajax 不会直接触发文件的下载操作。
 * 还需要使用 js 想文件保存到本地。
 *
 * 当浏览器下载文件时，通常可以从 HTTP 响应的头部信息中获取到文件名。
 * 在 Content-Disposition 头部中，filename 参数的值需要进行 URL 编码，以确保它可以被正确地解析和显示。
 * 如果文件名中包含中文或其他非 ASCII 字符，需要将其进行 URL 编码，以避免出现解析错误或乱码问题。
 *
 * 内容定位: 附件;文件名
 * Content-Disposition: attachment; filename="example.pdf"
 */
function download() {
  fetch('/download')
    .then(response => {
      const contentDisposition = response.headers.get('content-disposition')
      const fileNameMatch = contentDisposition.match(/filename="(.*?)"/)
      const fileName = fileNameMatch
        ? decodeURIComponent(fileNameMatch[1])
        : 'unknown'
      return response.blob()
    })
    .then(blob => {
      // todo
    })
}
