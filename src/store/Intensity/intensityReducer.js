import {
  GET_INTENSITY_LIST,
} from './type';

const INITIAL_STATE = {
  intensityList: [],
  intensityData: {
    id: null,
    name: '',
  },
  loading: true,
};

const intensityReducer = (state = INITIAL_STATE, action) => {
  const {payload} = action;

  switch (action.type) {
    case GET_INTENSITY_LIST:
      return {
        ...state,
        intensityList: payload,
      };

    default:
      return {...state, loading: false};
  }
};

export default intensityReducer;
