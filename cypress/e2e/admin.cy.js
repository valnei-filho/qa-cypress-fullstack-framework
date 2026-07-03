import Sidebar from '../components/Sidebar';
import AdminPage from '../pages/AdminPage';

describe('Admin Feature', () => {

    it('should navigate to admin page', () => {

        cy.loginByUI();

        Sidebar.clickAdmin();

        cy.url().should('include', '/admin');

        AdminPage.validateAdminPageLoaded();

    });

});