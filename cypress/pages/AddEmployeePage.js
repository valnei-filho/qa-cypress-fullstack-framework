class AddEmployeePage {

    firstNameInput() {
        return cy.get('input[name="firstName"]');
    }

    lastNameInput() {
        return cy.get('input[name="lastName"]');
    }

    saveButton() {
        return cy.contains('button', 'Save');
    }

    fillEmployeeForm(employee) {

        this.firstNameInput().type(employee.firstName);
        this.lastNameInput().type(employee.lastName);

    }

    clickSave() {

        this.saveButton().click();

    }

}

export default new AddEmployeePage();