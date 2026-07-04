class EmployeeListPage {
  searchEmployee(name) {
    cy.get('input[placeholder="Type for hints..."]')
      .first()
      .should("be.visible")
      .clear()
      .type(name);

    cy.contains("button", "Search").should("be.visible").click();
  }

  validateEmployeeInTable(name) {
    cy.contains(".oxd-table-row", name, {
      timeout: 10000,
    }).should("be.visible");
  }

  clickDeleteIcon() {
    cy.get("i.bi-trash").first().closest("button").click();
  }

  confirmDelete() {
    cy.contains("button", "Yes, Delete").should("be.visible").click();
  }

  waitDeleteSuccess() {
    cy.contains("Successfully Deleted", {
      timeout: 10000,
    }).should("be.visible");

    cy.contains("Successfully Deleted").should("not.exist");
  }

  validateEmployeeNotInTable() {
    cy.contains("No Records Found", {
      timeout: 10000,
    }).should("be.visible");
  }
}

export default new EmployeeListPage();
