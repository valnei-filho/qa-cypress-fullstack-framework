import Sidebar from '../components/Sidebar';
import PimPage from '../pages/PimPage';
import AddEmployeePage from '../pages/AddEmployeePage';
import PersonalDetailsPage from '../pages/PersonalDetailsPage';
import { generateEmployee } from '../utils/generateEmployee';

describe('Employee Feature', () => {

    it('should create a new employee successfully', () => {

        const employee = generateEmployee();

        cy.loginByUI();

        Sidebar.clickPim();

        PimPage.clickAddEmployee();

        AddEmployeePage.fillEmployeeForm(employee);

        cy.intercept(
            'POST',
            '**/api/v2/pim/employees'
        ).as('createEmployee');

        AddEmployeePage.clickSave();

        cy.wait('@createEmployee').then(({ request, response }) => {

            expect(request.method).to.eq('POST');
            expect(response.statusCode).to.eq(200);

            expect(request.body.firstName).to.eq(employee.firstName);
            expect(request.body.lastName).to.eq(employee.lastName);

            expect(response.body.data.firstName).to.eq(employee.firstName);
            expect(response.body.data.lastName).to.eq(employee.lastName);

        });

        PersonalDetailsPage.validateEmployee(employee);

    });

});