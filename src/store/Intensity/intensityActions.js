import areaQueries from './intensityQueries';
import {GET_INTENSITY_LIST} from './type';
import intensityQueries from "./intensityQueries";

export const getIntensityList = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      intensityQueries
        .find([{type: 'orderBy', params: {field: 'updated_at', value: 'desc'}}])
        .then((response) => {
          dispatch({
            type: GET_INTENSITY_LIST,
            payload: response.data,
          });
        });
    });
  };
};
