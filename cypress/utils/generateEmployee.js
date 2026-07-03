export function generateEmployee() {

    const randomNumber = Date.now();

    const employee = {
        firstName: `Valnei${randomNumber}`,
        lastName: `QA${randomNumber}`
    };

    employee.fullName = `${employee.firstName} ${employee.lastName}`;

    return employee;

}