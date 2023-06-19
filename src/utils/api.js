import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US',
  },
  headers: {
    'X-RapidAPI-Key': 'b3a8046bc3msh6e753f76bc76231p1fbc57jsn6afc89ec1930',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};
