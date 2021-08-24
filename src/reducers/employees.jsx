import {
  GET_EMPLOYEES_LIST,
  GET_EMPLOYEES_DETAILS,
  CLEAR_EMPLOYEES_DETAILS,
  CREATE_EMPLOYEE,
  EDIT_EMPLOYEE,
} from "../actions/UserActions";

let initialState = {
  title: "Employees List",
  getEmployeesList: false,
  errorEmployeesList: false,
  getEmployeesDetails: false,
  errorEmployeesDetails: false,
  getEmployeesResponse: false,
  errorEmployeesResponse: false,
};

const employees = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES_LIST:
      return {
        ...state,
        getEmployeesList: action.payload.data,
        errorEmployeesList: action.payload.errorMessage,
      };
    case GET_EMPLOYEES_DETAILS:
      return {
        ...state,
        getEmployeesDetails: action.payload.data,
        errorEmployeesDetails: action.payload.errorMessage,
      };
    case CLEAR_EMPLOYEES_DETAILS:
      return {
        ...state,
        getEmployeesDetails: action.payload.data,
        errorEmployeesDetails: action.payload.errorMessage,
      };
    case CREATE_EMPLOYEE:
      return {
        ...state,
        getEmployeesResponse: action.payload.data,
        errorEmployeesResponse: action.payload.errorMessage,
      };
    case EDIT_EMPLOYEE:
      return {
        ...state,
        getEmployeesResponse: action.payload.data,
        errorEmployeesResponse: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default employees;
