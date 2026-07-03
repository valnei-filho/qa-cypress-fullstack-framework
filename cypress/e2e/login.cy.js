import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';

describe('Login Feature', () => {

    it('should login successfully with valid credentials', () => {

        cy.intercept(
            'GET',
            '**/api/v2/dashboard/employees/action-summary'
        ).as('actionSummary');

        cy.visit('/');

        LoginPage.login('Admin', 'admin123');

        cy.url().should('include', '/dashboard');

        DashboardPage.validateDashboardLoaded();

        cy.wait('@actionSummary').then(({ request, response }) => {

            expect(request.method).to.eq('GET');
            expect(response.statusCode).to.eq(200);

        });

    });

});