class PersonalDetailsPage {

    firstNameInput() {
        return cy.get('input[name="firstName"]');
    }

    lastNameInput() {
        return cy.get('input[name="lastName"]');
    }

    validateEmployee(employee) {

        this.firstNameInput()
            .should('have.value', employee.firstName);

        this.lastNameInput()
            .should('have.value', employee.lastName);

    }

}

export default new PersonalDetailsPage();