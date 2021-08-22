import axios from 'axios';

const url = 'https://spaceflightnewsapi.net/api/v2/articles';

export const fetchArticles = () => axios.get(url); // eslint-disable-line
