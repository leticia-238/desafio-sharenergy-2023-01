const OK = 200;

const authApi = async (payload) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({ ...payload }),
  };
  const response = await fetch('http://localhost:3001/auth', options);
  const data = await response.json();
  if (response.status === OK) return data.token;

  throw new Error(data.error);
};

export default authApi;
