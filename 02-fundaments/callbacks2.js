let employees = [{
    id: 1,
    name: 'Gerardo'
}, {
    id: 2,
    name: 'Melissa'
}, {
    id: 3,
    name: 'Juan'
}];

let salaries = [{
    id: 1,
    salary: 1000
}, {
    id: 2,
    salary: 2000
}];

let getEmployee = (id, callback) => {

    let employeeDB = employees.find(employee => employee.id === id);

    if (!employeeDB) {
        callback(`No existe un empleado con id ${id}`);
    } else {
        callback(null, employeeDB);
    }
}

let getSalary = (employee, callback) => {
    let salaryDB = salaries.find(salary => salary.id === employee.id);

    if (!salaryDB) {
        callback(`No se encontro un salario para el empleado ${employee.name}`)
    } else {
        callback(null, { name: employee.name, salary: salaryDB.salary });
    }
}

getEmployee(1, (err, employee) => {
    if (err) {
        return console.log(err);
    }
    console.log(employee);
    getSalary(employee, (err, salary) => {
        if (err) {
            return console.log(err);
        }
        console.log(salary);
    })
});