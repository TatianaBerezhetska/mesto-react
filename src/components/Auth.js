export const BASE_URL = 'https://auth.nomoreparties.co/';

export const register = (email, password) => {
  return fetch(`${BASE_URL}signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
    console.log(res)
    return res.json();
  })
  .catch((err) => {
    if(err.status === 400) {
      console.log(`Некорректно заполнено одно из полей ${err}`);
    } else {
      console.log(`Что-то пошло не так, а точнее: ${err}`);
    }
  })
}