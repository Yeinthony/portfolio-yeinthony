import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { Home } from "../components/Home";

describe('Home', () => {
  afterEach(cleanup)

  test('should render', () => {
    render(<Home />)
  })

  test('should be home-container', () => {
    render(<Home />)
    screen.getByTestId('home-container') 
  })

  test('should have a cover for home-container', () => {
    render(<Home />)
    screen.getByTestId('cover-home')
  })

  test('should have a 4 icons of contanct', () => {
    render(<Home />)
    const iconsContact = screen.getAllByTestId('icon-contact')
    expect(iconsContact.length).toBe(4)
  })

  test('should have a title "YEINTHONY VARGAS Full Stack Developer"', () => {
    render(<Home />)
    screen.getByText("YEINTHONY VARGAS")
    screen.getByText("Full Stack Developer")
  })

  test('it should a be button for download CV', () => {
    render(<Home />)
    screen.getByText('Descargar CV')
  })
})