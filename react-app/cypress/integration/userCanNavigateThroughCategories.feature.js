describe('user can successfully navigate to categories', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  describe('by clicking buttons beneath header', () => {
    cy.get('[data-cy=workshops-tab]').click()
    cy.get('[data-cy=workshops-data]').within(() => {
      cy.contains('Work The We')
    })
    cy.get('[data-cy=cypress-tab]').click()
    cy.get('[data-cy=cypress-data]').within(() => {
      cy.contains('Test Automation using Cypress')
    })
    cy.get('[data-cy=vue-tab]').click()
    cy.get('[data-cy=vue-data]').within(() => {
      cy.contains('Introduction to VUE3')
      cy.contains('Building Web Applications using VUE 3')
    })
    cy.get('[data-cy=productivity-tab]').click()
    cy.get('[data-cy=productivity-data]').within(() => {
      cy.contains('Version Control with Git')
    })
    cy.get('[data-cy=node-tab]').click()
    cy.get('[data-cy=node-data]').within(() => {
      cy.contains('API development with NodeJSm')
    })
    cy.get('[data-cy=node-tab]').click()
    cy.get('[data-cy=node-data]').within(() => {
      cy.contains('ReactJs - Getting Started (2020 edition)')
    })
  });
});