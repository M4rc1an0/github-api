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

  it('Visit user', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="user"]').type("m4rc1an0")
    cy.get('[name="search"').click()
    cy.contains('https://github.com/M4rc1an0').click
  })

  it('Visit repository', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="user"]').type("m4rc1an0")
    cy.get('[name="search"').click()
    cy.get('[name="more"]').click()
    cy.contains('Angular-Filtro').click
  })
})