// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'We are Better Together')
  })
})
