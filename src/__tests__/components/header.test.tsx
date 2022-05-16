import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

test("Should if exists tag h1 in main header", () => {
    render(<Header />)

    const h1FieldNode = screen.getByTestId("h1-field").tagName

    expect('H1').toBe(h1FieldNode)
})

test("Should if exists tag h2 in main header", () => {
    render(<Header />)

    const h2FieldNode = screen.getByTestId("h2-field").tagName
    
    expect('H2').toBe(h2FieldNode)
})

test("Should if have text 'NBA' and '18' in tags H1 and H2 in main header", () => {
    render(<Header />)

    const h1FieldNode = screen.getByTestId("h1-field").textContent
    const h2FieldNode = screen.getByTestId("h2-field").textContent

    expect('NBA').toBe(h1FieldNode)
    expect('18').toBe(h2FieldNode)
})