const sendResponse = (res, statusCode, message, data) => {
    const response = {
      statusCode,
      message,
      data,
    };
    res.status(statusCode).json(response);
  };
  
  const sendSuccess = (res, message, data) => {
    sendResponse(res, 200, message, data);
  };
  
  const sendError = (res, message, data) => {
    sendResponse(res, 400, message, data);
  };
  
  module.exports = {
    sendSuccess,
    sendError,
  };