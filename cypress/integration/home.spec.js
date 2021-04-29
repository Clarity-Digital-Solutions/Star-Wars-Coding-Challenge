import '@testing-library/cypress/add-commands';

describe('Home page', () => {
  it('should visit home page and display hello world', () => {
    cy.visit('/');
    cy.findAllByText('Hello World').should('exist');
  });
});
