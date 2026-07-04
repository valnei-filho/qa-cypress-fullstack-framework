import Sidebar from "../components/Sidebar";
import PimPage from "../pages/PimPage";
import AddEmployeePage from "../pages/AddEmployeePage";
import PersonalDetailsPage from "../pages/PersonalDetailsPage";
import EmployeeListPage from "../pages/EmployeeListPage";
import { generateEmployee } from "../utils/generateEmployee";

describe("Employee Delete Feature", () => {
  it("should delete employee successfully", () => {
    const employee = generateEmployee();

    cy.loginByUI();

    Sidebar.clickPim();

    PimPage.clickAddEmployee();

    AddEmployeePage.fillEmployeeForm(employee);

    cy.intercept("POST", "**/api/v2/pim/employees").as("createEmployee");

    AddEmployeePage.clickSave();

    cy.wait("@createEmployee").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });

    PersonalDetailsPage.waitUntilLoaded();

    Sidebar.clickPim();

    EmployeeListPage.searchEmployee(employee.firstName);

    EmployeeListPage.validateEmployeeInTable(employee.firstName);

    EmployeeListPage.clickDeleteIcon();

    EmployeeListPage.confirmDelete();

    EmployeeListPage.waitDeleteSuccess();

    EmployeeListPage.searchEmployee(employee.firstName);

    EmployeeListPage.validateEmployeeNotInTable();
  });
});
