import React from "react";
import axios from "axios"

import { connect } from "react-redux";
import * as actions from "../actions";

class App extends React.Component {

    renderEmployees() {
        if(this.props.employees) {
            return this.props.employees.map((employee) => {
                return (
                    <div key={employee.id}>
                        <img src={employee.avatar} alt={employee.id}/><br></br><br></br>
                        <label>User Name: {employee.name}</label><br></br><br></br>
                        <label>User Id: {employee.id}</label><br></br><br></br><hr></hr>
                    </div>
                )
            })
        }
    }

    componentDidMount() {
        axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then(response => {
            this.props.employeeList(response.data);
        })
    }


    render() {
        return (
            <div>
                <div>
                    {this.renderEmployees()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps, actions)(App);