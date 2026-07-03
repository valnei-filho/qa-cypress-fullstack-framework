import Sidebar from '../components/Sidebar';
import PimPage from '../pages/PimPage';
import AddEmployeePage from '../pages/AddEmployeePage';
import { generateEmployee } from '../utils/generateEmployee';

describe('Employee Feature', () => {

    it('should create a new employee successfully', () => {

        const employee = generateEmployee();

        cy.loginByUI();

        Sidebar.clickPim();

        PimPage.clickAddEmployee();

        AddEmployeePage.fillEmployeeForm(employee);

        AddEmployeePage.clickSave();

    });

});