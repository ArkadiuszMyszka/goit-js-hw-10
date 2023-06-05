
export function fetchBreeds() {
  const apiKey = 'live_SfTv5YZiyJWbrHcMwl292Uu4MzP6PymyNwEe22xGc7gog5nIZbAMFFLT9So0Thxj';
  const url = `https://api.thecatapi.com/v1/breeds?api_key=${apiKey}`;

  return fetch(url)
    .then(response => response.json());
}

export function fetchCatByBreed(breedId) {
  const apiKey = 'live_SfTv5YZiyJWbrHcMwl292Uu4MzP6PymyNwEe22xGc7gog5nIZbAMFFLT9So0Thxj';
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${apiKey}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const cat = data[0];
      return {
        image: cat.url,
        breed: cat.breeds[0].name,
        description: cat.breeds[0].description,
        temperament: cat.breeds[0].temperament
      };
    });
}