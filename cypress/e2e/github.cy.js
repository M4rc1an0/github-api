/// <reference types="cypress" />

describe('GitHub', () => {
  it('Open modal', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="user"]').type("m4rc1an0")
    cy.get('[name="search"').click()
    cy.get('[name="more"]').click()
  })

  it('Close Modal', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="user"]').type("m4rc1an0")
    cy.get('[name="search"').click()
    cy.get('[name="more"]').click()
    cy.get('[name="return"]').click()
  })
})