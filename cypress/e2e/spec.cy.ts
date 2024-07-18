describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3003');

    cy.get('h1').should('have.text', 'App Router');
  });
});
