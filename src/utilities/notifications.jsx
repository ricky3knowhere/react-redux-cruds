import Swal from 'sweetalert2';

export const notifications = (props, action) => {
  if (props.getEmployeesResponse || props.errorEmployeesResponse) {
    if (props.getEmployeesResponse) {
      Swal.fire({
        title: "Success",
        text: `Name ${props.getEmployeesResponse.name} Success ${action}.`,
        icon: "success",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: props.errorEmployeesResponse,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  }
}
