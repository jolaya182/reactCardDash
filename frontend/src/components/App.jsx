// @refresh reset

import FetchApi from './FetchApi';

const App = () => {
  const URL = 'http://localhost:3000/getPageIndex';
  const method = 'POST';
  FetchApi(URL, method, { pageIndex: 2 });
  return <>App!!!!!!</>;
};

export default App;
