class PersonalDetailsPage {
  firstNameInput() {
    return cy.get('input[name="firstName"]');
  }

  lastNameInput() {
    return cy.get('input[name="lastName"]');
  }

  saveButton() {
    return cy.contains("button", "Save");
  }

  waitUntilLoaded() {
    cy.url().should("include", "/viewPersonalDetails");

    this.firstNameInput().should("be.visible");
  }

  updateFirstName(firstName) {
    this.firstNameInput().clear().type(firstName);
  }

  clickSave() {
    this.saveButton().click();
  }

  validateEmployee(employee) {
    this.firstNameInput().should("have.value", employee.firstName);

    this.lastNameInput().should("have.value", employee.lastName);
  }
}

export default new PersonalDetailsPage();
