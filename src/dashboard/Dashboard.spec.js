// Test away
import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Dashboard from "./Dashboard"

test("application renders", () => {
    const tree = render(<Dashboard />)
    expect(tree)
})

test("displays locked", () => {
    const { getByText } = render(<Dashboard />)
    getByText(/locked/i)
})

