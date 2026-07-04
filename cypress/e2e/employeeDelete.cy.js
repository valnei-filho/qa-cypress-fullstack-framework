import Sidebar from "../components/Sidebar";
import EmployeeActions from "../actions/employeeActions";
import EmployeeListPage from "../pages/EmployeeListPage";
import { generateEmployee } from "../utils/generateEmployee";

describe("Employee Delete Feature", () => {
  beforeEach(() => {
    cy.loginByUI();
    Sidebar.clickPim();
  });

  it("should delete employee successfully", () => {
    const employee = generateEmployee();

    EmployeeActions.create(employee);

    Sidebar.clickPim();

    EmployeeListPage.searchEmployee(employee.firstName);

    EmployeeListPage.validateEmployeeInTable(employee.firstName);

    cy.intercept("DELETE", "**/api/v2/pim/employees*").as("deleteEmployee");

    EmployeeListPage.clickDeleteIcon();

    EmployeeListPage.confirmDelete();

    cy.wait("@deleteEmployee").its("response.statusCode").should("eq", 200);

    EmployeeListPage.waitDeleteSuccess();

    EmployeeListPage.searchEmployee(employee.firstName);

    EmployeeListPage.validateEmployeeNotInTable();
  });
});
