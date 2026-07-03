class DashboardPage {

    pageTitle() {
        return cy.contains('h6', 'Dashboard')
    }

    validateDashboardLoaded() {
        this.pageTitle()
            .should('be.visible')
            .and('have.text', 'Dashboard')
    }

}

export default new DashboardPage()