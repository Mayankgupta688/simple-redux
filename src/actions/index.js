import axios from "axios";


export function employeeList(employees) {
    return {
        type: "EMPLOYEE_LIST",
        employees: employees
    }
}

export function loadEmployeeData() {
    return function(dispatch) {
        return axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then(response => {
            dispatch(employeeList(response.data))
        })
    }
}
