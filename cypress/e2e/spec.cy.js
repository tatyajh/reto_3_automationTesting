describe('Hotel Filter Tests', () => {
  beforeEach(() => {
      cy.visit('https://tatyajh.github.io/hotels/')  
  });

  it('should display all hotel cards from the start', () => {
      cy.get('.hotel-card').should('be.visible')
  });

  it('should display hotel cards based on price filter', () => {
      cy.get('#priceFilter').children().each(($option, index, $list) => {
          if ($option.val() !== 'all') {
              cy.get('#priceFilter').select($option.val())
              cy.get('.hotel-card').each(($card) => {
                  cy.wrap($card).should('contain.text', '$'.repeat($option.val()))
              });
          }
      });
  });

  it('should display all hotel cards after clearing filters', () => {
      cy.get('.clear-btn').click()
      cy.get('.hotel-card').should('be.visible')
  });
});
