import areaQueries from './exerciseQueries';
import {GET_EXERCISE_LIST} from './type';
import intensityQueries from "./exerciseQueries";

export const getExerciseList = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      intensityQueries
        .find([{type: 'orderBy', params: {field: 'updated_at', value: 'desc'}}])
        .then((response) => {
          dispatch({
            type: GET_EXERCISE_LIST,
            payload: response.data,
          });
        });
    });
  };
};
