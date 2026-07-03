class Sidebar {

    adminMenu() {
        return cy.contains('span', 'Admin');
    }

    pimMenu() {
        return cy.contains('span', 'PIM');
    }

    leaveMenu() {
        return cy.contains('span', 'Leave');
    }

    clickAdmin() {
        this.adminMenu().click();
    }

    clickPim() {
        this.pimMenu().click();
    }

    clickLeave() {
        this.leaveMenu().click();
    }

}

export default new Sidebar();