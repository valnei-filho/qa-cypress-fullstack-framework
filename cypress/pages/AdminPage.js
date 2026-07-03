class AdminPage {

    pageTitle() {
        return cy.contains('h6', 'Admin');
    }

    validateAdminPageLoaded() {
        this.pageTitle()
            .should('be.visible')
            .and('have.text', 'Admin');
    }

}

export default new AdminPage();