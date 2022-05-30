describe('test rendering of page content', () => {
  it('visit RestaurantView and read h1', () => {
    cy.visit('http://localhost:8080/restaurant');
    cy.contains('h1', 'RESTAURANG DELUX');
  });

  it('visit ActivitiesView and read h3', () => {
    cy.visit('http://localhost:8080/activities');
    cy.contains('h3', 'Sola, bada och välj bland flera olika aktiviteter');
  });
});

describe('test dynamic rendering', () => {
  it('change menu on FoodView', () => {
    cy.visit('http://localhost:8080/food');
    cy.get('.v-list-item-title').contains('Kebabtallrik').should('not.exist');
    cy.get('.v-list-item-title').contains('Carciofi');
    cy.get('button').contains('Barnmeny').click();
    cy.get('.v-list-item-title').contains('Carciofi').should('not.exist');
    cy.get('.v-list-item-title').contains('Kebabtallrik');
  });

  it('add booking to cart', () => {
    cy.visit('http://localhost:8080/restaurant');
    cy.get('select').eq(0).select('4/6-2022', { force: true }).invoke('val').should('eq', '4/6-2022');
    cy.get('select').eq(1).select('11:00', { force: true }).invoke('val').should('eq', '11:00');
    cy.get('select').eq(2).select('2', { force: true }).invoke('val').should('eq', '2');
    cy.get('button').contains('Boka').click();
    cy.get('.modalBtn').click({ force: true });
    cy.get('.v-navigation-drawer').find('.v-list-item-title').contains('4/6-2022:11:00');
  });
});

//npx cypress run
