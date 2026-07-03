class EmployeeListPage {

    employeeNameInput() {
        return cy.get('input[placeholder="Type for hints..."]');
    }

    searchButton() {
        return cy.contains('button', 'Search');
    }

}

export default new EmployeeListPage();