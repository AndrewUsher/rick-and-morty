/* eslint-disable no-undef */

describe('Navigation tests', () => {
  it('Should display homepage on load', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.Home')
  })

  describe('Site navigation is functional', () => {
    it('Should display characters', () => {
      cy.contains('Characters').click()
      cy.url().should('include', '/characters')
      cy.get('.Characters')
    })

    it('Should display locations', () => {
      cy.contains('Locations').click()
      cy.url().should('include', '/locations')
      cy.get('.Locations')
    })

    it('Should display episodes', () => {
      cy.contains('Episodes').click()
      cy.url().should('include', '/episodes')
      cy.get('.Episodes')
    })
  })

  describe('Navigating to single item works correctly', () => {
    it('Characters page', () => {
      cy
        .visit('http://localhost:3000')
        .contains('Characters')
        .click()

      cy.url().should('include', '/characters')
      cy.contains('Rick').click()
      cy.url().should('include', '/characters/1')
      cy.get('.Single-Info')
      cy.get('.back-arrow').click()
      cy.url().should('include', '/characters')
    })

    it('Locations page', () => {
      cy
        .visit('http://localhost:3000')
        .contains('Locations')
        .click()

      cy.url().should('include', '/locations')
      cy.contains('Earth (C-137)').click()
      cy.url().should('include', '/locations/1')
      cy.get('.Single-Info')
      cy.get('.back-arrow').click()
      cy.url().should('include', '/locations')
    })

    it('Episodes page', () => {
      cy
        .visit('http://localhost:3000')
        .contains('Episodes')
        .click()

      cy.url().should('include', '/episodes')
      cy.contains('Pilot').click()
      cy.url().should('include', '/episodes/1')
      cy.get('.Single-Info')
      cy.get('.back-arrow').click()
      cy.url().should('include', '/episodes')
    })
  })
})
