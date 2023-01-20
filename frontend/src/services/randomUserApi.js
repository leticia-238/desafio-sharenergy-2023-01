const randomUserApi = async () => {
  const url = 'https://randomuser.me/api/?results=50&seed=foobar&inc=name,dob,email,login,picture&nat=br&noinfo';
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

export default randomUserApi;
