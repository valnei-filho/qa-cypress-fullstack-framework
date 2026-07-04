# 🚀 QA Cypress Fullstack Framework

![Cypress](https://img.shields.io/badge/Cypress-14+-17202C?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)
![License](https://img.shields.io/badge/License-MIT-blue)

A complete QA Automation framework built with **Cypress**, combining **UI Automation**, **API Validation**, **Page Object Model (POM)** and **Full CRUD testing** following industry best practices.

---

# 📖 Overview

This project was developed to simulate a real-world QA Automation framework.

Instead of creating isolated tests, the goal was to build a scalable automation framework capable of validating both the **User Interface** and the **Backend API** in the same test flow.

The framework follows clean architecture principles, emphasizing code reuse, maintainability and readability.

---

# ✨ Features

- UI Automation
- API Validation using Cypress Intercepts
- Complete Employee CRUD
- Request & Response Validation
- Page Object Model (POM)
- Custom Commands
- Reusable Actions
- Dynamic Test Data
- Modular Architecture
- Clean and Maintainable Code

---

# 🛠 Tech Stack

- Cypress
- JavaScript (ES6)
- Node.js
- Git
- GitHub
- REST API
- Page Object Model (POM)

---

# 📂 Project Structure

```text
cypress/
│
├── actions/
├── components/
├── e2e/
├── pages/
├── support/
├── utils/
└── fixtures/
```

---

# 🏗 Project Architecture

The framework was designed following a layered architecture to keep responsibilities separated and improve maintainability.

```text
Tests (e2e)
        │
        ▼
Actions
        │
        ▼
Page Objects
        │
        ▼
Application (OrangeHRM)
        │
        ▼
API Validation (Intercepts)
```

### Layer Responsibilities

| Layer            | Responsibility                                     |
| ---------------- | -------------------------------------------------- |
| **Tests**        | Contains business scenarios and assertions.        |
| **Actions**      | Groups reusable business flows.                    |
| **Page Objects** | Encapsulates page elements and user interactions.  |
| **Components**   | Reusable UI components shared across pages.        |
| **Utils**        | Dynamic test data generation and helper functions. |
| **Support**      | Cypress custom commands and global configuration.  |

---

# ✅ Automated Test Scenarios

### Login

- Login with valid credentials
- Dashboard validation

### Employee Management

- Create Employee
- Validate UI fields
- Validate API Request
- Validate API Response
- Search Employee
- Update Employee Information
- Delete Employee
- Validate successful deletion

### API Validation

- POST Employee
- PUT Personal Details
- DELETE Employee

For every operation the framework validates:

- HTTP Method
- Status Code
- Request Body
- Response Body

---

# ▶ Running the Project

## Clone the repository

```bash
git clone https://github.com/valnei-filho/qa-cypress-fullstack-framework.git
```

## Install dependencies

```bash
npm install
```

## Open Cypress

```bash
npm run cy:open
```

## Run all tests

```bash
npm run cy:run
```

---

# 📋 Available Test Suites

| Test File             | Description                                |
| --------------------- | ------------------------------------------ |
| login.cy.js           | Login automation                           |
| admin.cy.js           | Admin module validation                    |
| employee.cy.js        | Employee creation with UI + API validation |
| personalDetails.cy.js | Employee update validation                 |
| employeeDelete.cy.js  | Employee deletion validation               |

---

# 🔄 Test Flow

The framework combines **UI Automation** and **API Validation** within the same test execution.

```text
Login
   │
   ▼
Navigate to PIM
   │
   ▼
Perform UI Action
(Create / Update / Delete)
   │
   ▼
Intercept API Request
   │
   ▼
Validate Request Payload
   │
   ▼
Validate Response Payload
   │
   ▼
Validate UI Result
```

This approach increases confidence that both the frontend and backend are working correctly during the same automated scenario.

---

# 📌 Best Practices Applied

This project follows several QA Automation best practices:

- Page Object Model (POM)
- Separation of responsibilities
- Reusable Actions
- Reusable Components
- Custom Cypress Commands
- Dynamic test data generation
- UI + API validation in the same test
- Request and Response assertions
- Semantic Git commits
- Clean folder structure
- Readable and maintainable code
- Avoidance of hard waits (`cy.wait(time)`)

---

# 📈 Current Framework Capabilities

✔ UI Automation

✔ API Validation

✔ Employee CRUD

✔ Dynamic Test Data

✔ Request Validation

✔ Response Validation

✔ Page Object Model

✔ Custom Commands

✔ Actions Layer

✔ Components Layer

✔ Modular Architecture

✔ Git Version Control

---

# 🚀 Roadmap

The next evolution of this framework includes:

- Environment configuration
- Data Driven Testing
- Test Reports (Mochawesome / Allure)
- GitHub Actions CI
- API Helpers
- Factory Pattern
- Fixtures improvements
- Multi-environment execution
- Performance improvements
- Enhanced documentation

---

# 📚 What I Learned

During the development of this framework I practiced and improved my knowledge in:

- Building a scalable Cypress automation framework
- Page Object Model (POM)
- UI Automation
- API Automation
- Request and Response validation
- Cypress Intercepts
- Custom Commands
- Reusable Actions
- Dynamic test data generation
- Framework organization
- Git and GitHub workflow
- Clean Code principles
- Test maintainability and scalability

---

# 🤝 Contributing

Contributions, suggestions, and feedback are always welcome.

If you have ideas to improve this framework or identify opportunities for enhancement, feel free to open an Issue or submit a Pull Request.

---

# 🙏 Acknowledgements

This project is part of my QA Automation learning journey.

It was built to simulate a real-world automation framework, applying industry best practices and continuously evolving through new features, refactoring, and improvements.

The goal is not only to automate tests, but also to demonstrate clean architecture, maintainable code, and a professional development workflow.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

## Valnei Rezende

QA Automation Engineer (in progress)

- **GitHub:** https://github.com/valnei-filho
- **LinkedIn:** https://www.linkedin.com/in/valnei-rezende/

---

⭐ Thank you for visiting this repository!
