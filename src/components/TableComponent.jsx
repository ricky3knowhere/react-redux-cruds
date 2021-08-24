import {
  faEdit,
  faInfoCircle,
  faTrashAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Container, Spinner } from "reactstrap";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { deleteEmployee } from "../actions/UserActions";

const mapStateToProps = (state) => {
  return {
    getEmployeesList: state.employees.getEmployeesList,
    errorEmployeesList: state.employees.errorEmployeesList,
  };
};

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "To delete this data.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#007bff',
    cancelButtonColor: '#dc3545',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {

      dispatch(deleteEmployee(id))

      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
};

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "id",
      text: "#",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowCounter, row) => {
        return (
          <div>
            <Link to={"/details/" + row.id}>
              <Button className="mr-2 bg-primary btn-sm">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> Info
              </Button>
            </Link>
            <Link to={"/update/" + row.id}>
              <Button className="mr-2 bg-warning btn-sm">
                <FontAwesomeIcon icon={faEdit} className="mr-2" /> Edit
              </Button>
            </Link>
            <Link>
              <Button
                className="mr-2 bg-danger btn-sm"
                onClick={() => handleClick(props.dispatch, row.id)}
              >
                <FontAwesomeIcon icon={faTrashAlt} className="mr-2" /> Delete
              </Button>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {props.getEmployeesList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getEmployeesList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <div className="float-right">
                <Link to="/insert/">
                  <Button className="mr-2 bg-primary btn-sm">
                    <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> New
                    Employee
                  </Button>
                </Link>
                <SearchBar {...props.searchProps} placeholder="Search Data.." />
                <hr />
              </div>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorEmployeesList ? (
            <h3>{props.errorEmployeesList}</h3>
          ) : (
            <Spinner color="warning"></Spinner>
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
