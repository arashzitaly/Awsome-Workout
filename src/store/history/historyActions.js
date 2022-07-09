import historyQueries from './historyQueries';
import {GET_HISTORY_LIST} from './type';


export const getHistoryList = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      historyQueries
        .find([{type: 'orderBy', params: {field: 'updated_at', value: 'desc'}}])
        .then((response) => {
          dispatch({
            type: GET_HISTORY_LIST,
            payload: response.data,
          });
        });
    });
  };
};
