import RestaurantHeader from '../RestaurantHeader';
import Navbar from '../Navbar';
import { mount } from '@cypress/vue';

describe('test component rendering', () => {
  it('RestaurantHeader', () => {
    mount(RestaurantHeader, {
      props: {
        link: 'food',
        linkText: 'Se vår meny',
      },
    });
    cy.get('h1').contains('RESTAURANG DELUX');
    cy.get('h4').contains('Se vår meny');
  });

  it('Navbar', () => {
    mount(() => <Navbar />);
    cy.get('p').contains('Vädret i Stockholm idag:');
    cy.get('router-link').contains('Boka stuga');
  });
});

//npx cypress open-ct
