class PimPage {

    addEmployeeButton() {
        return cy.contains('a', 'Add Employee');
    }

    clickAddEmployee() {
        this.addEmployeeButton().click();
    }

}

export default new PimPage();