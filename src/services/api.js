import axios from 'axios';

export function getProfile(id) {
  return axios
    .get(`https://67e689e36530dbd311106640.mockapi.io/profiledata/${id}`)
    .then((response) => response.data); // Veriyi doğrudan döndür
}


