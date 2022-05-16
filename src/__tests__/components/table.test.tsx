import { render, screen } from "@testing-library/react"
import DataGridDemo from "../../components/Table"

test("Should show all columns in table", () => {
    render(<DataGridDemo />)
    const columnChampion = screen.queryByText("champion");
    const columnSeason = screen.queryByText("season");
    const columnWins = screen.queryByText("points");
    expect(columnChampion).toBeInTheDocument()
    expect(columnSeason).toBeInTheDocument()
    expect(columnWins).toBeInTheDocument()
})


