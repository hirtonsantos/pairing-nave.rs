import { render, screen } from "@testing-library/react"
import Home from "../../Pages/home";

test("Should show is funtional", () => {
    render(<Home />)
    const dataText = screen.queryByText("Home");
    expect(dataText).toBeInTheDocument()
})