const logDataToConsole = ({ type, url, data, response, requestBody }) => {
  console.groupCollapsed(type);
  if (requestBody) {
    console.log(requestBody);
  }
  console.log(url);
  console.log(data);
  console.log(response);
  console.groupEnd();
};

export default logDataToConsole;
