import {
  GET_HISTORY_LIST,
} from './type';

const INITIAL_STATE = {
  exerciseList: [],
  exerciseData: {
    id: null,
    name: '',
  },
  loading: true,
};

const historyReducer = (state = INITIAL_STATE, action) => {
  const {payload} = action;

  switch (action.type) {
    case GET_HISTORY_LIST:
      return {
        ...state,
        exerciseList: payload,
      };

    default:
      return {...state, loading: false};
  }
};

export default historyReducer;
