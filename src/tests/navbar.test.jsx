import { afterEach, describe, expect, test } from "vitest";
import { Navbar } from "../components/Navbar";
import { cleanup, render, screen } from "@testing-library/react";

describe('navbar', () => {
  afterEach(cleanup)

  test('should render', () => {
    render(<Navbar />)
  })

  test('should be a container for navbar', () => {
    render(<Navbar />)
    screen.getByTestId('navbar-container')
  })

  test('should be the home link', () => {
    render(<Navbar />)
    screen.getByTestId('home-link')
  })

  test('should be a menu-bar button', () => {
    render(<Navbar />)
    screen.getByTestId('menu-bar-button')
  })

  test('should have a role navigation', () => {
    render(<Navbar />)
    screen.getByRole('navigation')
  })

  test('should render 5 navbar links', () => {
    render(<Navbar />)
    const links = screen.getAllByRole('menuitem')
    expect(links.length).toBe(5)
  })
})
