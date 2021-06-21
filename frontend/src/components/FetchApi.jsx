const FetchApi = async (URL, method, pageIndex) => {
  const data = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  };
  if (method === 'POST') data.body = JSON.stringify(pageIndex);

  console.log('data', data, method);
  const response = await fetch(URL, data);

  if (!response.ok) {
    console.log(`response has an erro ${response.status}`);
    const message = `response has an erro ${response.status}`;
    throw new Error(message);
  }
  const json = await response.json();
  console.log('json', json);
  return json;
};
export default FetchApi;
