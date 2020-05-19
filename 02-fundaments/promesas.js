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

let getEmployee = (id) => {

    return new Promise((resolve, reject) => {

        let employeeDB = employees.find(employee => employee.id === id);

        if (!employeeDB) {
            reject(`No existe un empleado con id ${id}`);
        } else {
            resolve(employeeDB);
        }

    })

}

let getSalary = (employee) => {

    return new Promise((resolve, reject) => {
        let salaryDB = salaries.find(salary => salary.id === employee.id);

        if (!salaryDB) {
            reject(`No se encontro un salario para el empleado ${employee.name}`)
        } else {
            resolve({ name: employee.name, salary: salaryDB.salary });
        }
    })

}

getEmployee(3).then(employee => {
    console.log('Empleado de BD', employee);
    getSalary(employee).then(salary => {
        console.log('Salary', salary);
    }, err => {
        console.log(err);
    })
}, err => {
    console.log(err);
})


getEmployee(4).then(employee => {
    return getSalary(employee);
}).then(salary => {
    console.log(`El salario de ${salary.name} es ${salary.salary}`);
}).catch(err => {
    console.log(err);
})