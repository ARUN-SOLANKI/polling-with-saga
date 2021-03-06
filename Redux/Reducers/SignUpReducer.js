import * as constant from '../Constants'

const InitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {}
};

const signUpReducer = (state = InitialState , action) => {
    console.log(action)
    switch (action.type) {
      case constant.SIGNUP_REQUEST:
        return {
          ...state,
          isLoading: true,
          isSuccess: false,
          isError: false,
        };
        case constant.SIGNUP_SUCCESS:
        return {
          isLoading: false,
          isSuccess: true,
          isError: false,
          ...action.payload.response.data
        };
      case constant.SIGNUP_ERROR:
        return {
          ...state,
          isLoading: false,
          isSuccess: false,
          isError: true,
          ...action.payload.error
        };
      default:
        return {
            ...state
        }
    }
  }

  export default signUpReducer;