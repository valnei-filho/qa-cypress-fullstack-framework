import Sidebar from "../components/Sidebar";
import EmployeeActions from "../actions/employeeActions";
import PersonalDetailsPage from "../pages/PersonalDetailsPage";
import EmployeeListPage from "../pages/EmployeeListPage";
import { generateEmployee } from "../utils/generateEmployee";

describe("Employee Feature", () => {
  beforeEach(() => {
    cy.loginByUI();
    Sidebar.clickPim();
  });

  it("should create a new employee successfully", () => {
    const employee = generateEmployee();

    EmployeeActions.create(employee);

    PersonalDetailsPage.validateEmployee(employee);

    Sidebar.clickPim();

    EmployeeListPage.searchEmployee(employee.firstName);

    EmployeeListPage.validateEmployeeInTable(employee.firstName);
  });
});
