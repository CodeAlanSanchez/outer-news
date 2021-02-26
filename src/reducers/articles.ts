/* eslint-disable import/prefer-default-export */
export default (articles: any = [], action: { type: any; payload: object }) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    default:
      return articles;
  }
};
