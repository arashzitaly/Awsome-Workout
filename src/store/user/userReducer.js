import {SET_USER_DATA} from './type';

const DEFAULT_STATE = {
  id: '',
  email: '',
  first_name: '',
  is_deleted: null,
  last_name: '',
  userObj: {},
  doLogout: false,
};

const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      const {id, email, first_name, last_name} = action.payload;

      return {
        ...state,
        id,
        email,
        first_name,
        last_name,
        doLogout: false,
      };

    default:
      return {...state, doLogout: false};
  }
};

export default userReducer;
