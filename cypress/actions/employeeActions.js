import PimPage from "../pages/PimPage";
import AddEmployeePage from "../pages/AddEmployeePage";
import PersonalDetailsPage from "../pages/PersonalDetailsPage";

class EmployeeActions {
  create(employee) {
    cy.intercept("POST", "**/api/v2/pim/employees").as("createEmployee");

    PimPage.clickAddEmployee();

    AddEmployeePage.fillEmployeeForm(employee);

    AddEmployeePage.clickSave();

    cy.wait("@createEmployee").its("response.statusCode").should("eq", 200);

    PersonalDetailsPage.waitUntilLoaded();
  }
}

export default new EmployeeActions();
