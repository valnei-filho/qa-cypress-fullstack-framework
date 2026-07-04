import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

Cypress.Commands.add("loginByUI", () => {
  cy.visit("/");

  LoginPage.login("Admin", "admin123");

  DashboardPage.validateDashboardLoaded();
});
