import axios from "axios";

export const GET_EMPLOYEES_LIST = "GET_EMPLOYEES_LIST";
export const GET_EMPLOYEES_DETAILS = "GET_EMPLOYEES_DETAILS";
export const CLEAR_EMPLOYEES_DETAILS = "CLEAR_EMPLOYEES_DETAILS";
export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE";
export const EDIT_EMPLOYEE = "EDIT_EMPLOYEE";

export const getEmployeesList = () => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/ricky3knowhere/redux-api/employees/"
      )
      .then(function (response) {
        dispatch({
          type: GET_EMPLOYEES_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: GET_EMPLOYEES_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
        console.log(error);
      });
  };
};

export const getEmployeesDetails = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/ricky3knowhere/redux-api/employees/" +
          id
      )
      .then(function (response) {
        dispatch({
          type: GET_EMPLOYEES_DETAILS,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: GET_EMPLOYEES_DETAILS,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
        console.log(error);
      });
  };
};

export const createEmployee = (data) => {
  return (dispatch) => {
    axios
      .post(
        "https://my-json-server.typicode.com/ricky3knowhere/redux-api/employees/",
        data
      )
      .then(function (response) {
        dispatch({
          type: CREATE_EMPLOYEE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: CREATE_EMPLOYEE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
        console.log(error);
      });
  };
};

export const editEmployee = (data, id) => {
  return (dispatch) => {
    axios
      .put(
        "https://my-json-server.typicode.com/ricky3knowhere/redux-api/employees/" +
          id,
        data
      )
      .then(function (response) {
        dispatch({
          type: EDIT_EMPLOYEE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: EDIT_EMPLOYEE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
        console.log(error);
      });
  };
};

export const deleteEmployee = (id) => {
  return (dispatch) => {
    axios
      .delete(
        "https://my-json-server.typicode.com/ricky3knowhere/redux-api/employees/" +
          id
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};

export const clearEmployeesDetails = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_EMPLOYEES_DETAILS,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: CREATE_EMPLOYEE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
