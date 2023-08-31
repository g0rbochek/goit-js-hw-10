// 'live_NrNDJRzmlYZROCSd9uYROEQ7mWwzBBomfWe5OVWnYMyY4QqejgD4xbColPwgoXQc';

const refs = {
  BASE_URL: 'https://api.thecatapi.com/v1',
  END_POINT: '/breeds',
  END_POINT_IMG: '/images/',
  API_KEY:
    'live_NrNDJRzmlYZROCSd9uYROEQ7mWwzBBomfWe5OVWnYMyY4QqejgD4xbColPwgoXQc',
};

const { BASE_URL, END_POINT, END_POINT_IMG, API_KEY } = refs;

//fetchBreeds - виконує HTTP-запит і повертає проміс із масивом порід
export function fetchBreeds() {
  return fetch(`${BASE_URL}${END_POINT}?${API_KEY}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

//fetchCatByBreed - робить HTTP-запит і повертає проміс із даними про кота
export function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}${END_POINT_IMG}${breedId}?${API_KEY}`).then(
    resp => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      return resp.json();
    }
  );
}
