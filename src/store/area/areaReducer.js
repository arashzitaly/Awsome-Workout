import {
  SET_AREAS_LIST,
} from './type';

const INITIAL_STATE = {
  areaList: [],
  areaData: {
    id: null,
    name: '',
  },
  loading: true,
};

const areaReducer = (state = INITIAL_STATE, action) => {
  const {payload} = action;

  switch (action.type) {
    case SET_AREAS_LIST:
      return {
        ...state,
        areaList: payload,
      };

    default:
      return {...state, loading: false};
  }
};

export default areaReducer;
