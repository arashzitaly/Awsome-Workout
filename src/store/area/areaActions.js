import areaQueries from './areaQueries';
import {SET_AREAS_LIST} from './type';

export const getAreasList = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      areaQueries
        .find([{type: 'orderBy', params: {field: 'updated_at', value: 'desc'}}])
        .then((response) => {
          dispatch({
            type: SET_AREAS_LIST,
            payload: response.data,
          });
        });
    });
  };
};
