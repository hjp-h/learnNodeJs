function sendResponse(ctx, data, message, status = 200) {
  ctx.status = status;
  ctx.body = {
    success: true,
    data,
    message
  }
}
module.exports = {
  sendResponse
}