// Test away!
import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Controls from "./Controls"

test("component renders", () => {
    const tree = render(<Controls />)
    expect(tree)
})

test("expect open gate text after the gate is closed", () => {
    setTimeout(() => {
        const tree = render(<Controls locked = {false} closed = {false} />)
        const button = tree.getByText(/close gate/i)
        fireEvent.click(button)
        tree.getByText(/open gate/i)
    }, 1000)
})

test("expect closed gate text after the gate is open", () => {
    setTimeout(() => {
        const tree = render(<Controls locked = {true} closed = {true} />)
        const button = tree.getByText(/open gate/i)
        fireEvent.click(button)
        tree.getByText(/close gate/i)
    }, 1000)
})