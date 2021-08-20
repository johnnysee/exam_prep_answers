describe('user can press button', () => {
  it('test', () => {
    cy.visit('http://localhost:3001')
    cy.get('#quote').click()
  })

  it('displays a message when clicking the button', () => {
    cy.get('#message').should('contain', 'hello how are you')
  })
})