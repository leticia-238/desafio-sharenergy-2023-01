const randomDogApi = async () => {
  const response = await fetch('http://random.dog/');
  const data = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, 'text/html');
  return doc.getElementById('dog-img').getAttribute('src') || '';
};

export default randomDogApi;
