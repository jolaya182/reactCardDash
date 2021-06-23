const FetchApi = async (URL, method, callBack, payLoad, type = false) => {
  const data = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  };
  if (method === 'POST') data.body = JSON.stringify(payLoad);

  const response = await fetch(URL, data);

  if (!response.ok) {
    console.log(`response has an erro ${response.status}`);
    const message = `response has an erro ${response.status}`;
    throw new Error(message);
  }

  const json = await response.json();
  if (type) {
    console.log("json, type, payLoad", json, type, payLoad)
    callBack(json, type, payLoad);
    return;
  }
  callBack(json);
};
export default FetchApi;
