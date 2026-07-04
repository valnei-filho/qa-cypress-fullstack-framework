import Sidebar from "../components/Sidebar";
import EmployeeActions from "../actions/employeeActions";
import PersonalDetailsPage from "../pages/PersonalDetailsPage";
import { generateEmployee } from "../utils/generateEmployee";

describe("Personal Details Feature", () => {
  beforeEach(() => {
    cy.loginByUI();
    Sidebar.clickPim();
  });

  it("should update employee first name successfully", () => {
    const employee = generateEmployee();

    const updatedFirstName = `Updated${Date.now()}`;

    EmployeeActions.create(employee);

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
