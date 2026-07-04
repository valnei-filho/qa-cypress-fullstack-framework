import Sidebar from "../components/Sidebar";
import PimPage from "../pages/PimPage";
import AddEmployeePage from "../pages/AddEmployeePage";
import PersonalDetailsPage from "../pages/PersonalDetailsPage";
import { generateEmployee } from "../utils/generateEmployee";

describe("Personal Details Feature", () => {
  it("should update employee first name successfully", () => {
    const employee = generateEmployee();

    const updatedFirstName = `Updated${Date.now()}`;

    cy.loginByUI();

    Sidebar.clickPim();

    PimPage.clickAddEmployee();

    AddEmployeePage.fillEmployeeForm(employee);

    AddEmployeePage.clickSave();

    PersonalDetailsPage.waitUntilLoaded();

    cy.intercept("PUT", "**/api/v2/pim/employees/*/personal-details").as(
      "updateEmployee",
    );

    PersonalDetailsPage.updateFirstName(updatedFirstName);

    PersonalDetailsPage.clickSave();

    cy.wait("@updateEmployee").then(({ request, response }) => {
      expect(request.method).to.eq("PUT");

      expect(response.statusCode).to.eq(200);

      expect(request.body.firstName).to.eq(updatedFirstName);

      expect(request.body.lastName).to.eq(employee.lastName);

      expect(response.body.data.firstName).to.eq(updatedFirstName);

      expect(response.body.data.lastName).to.eq(employee.lastName);
    });

    PersonalDetailsPage.firstNameInput().should("have.value", updatedFirstName);
  });
});
