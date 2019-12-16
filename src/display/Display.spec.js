// Test away!
import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Display from "./Display"

test("component renders", () => {
    const tree = render(<Display />)
    expect(tree)
})

test('is open and unlocked', () => {
    setTimeout(() => {
        const { getByText } = render(
        <Display closed={false} locked={false} />
    );
        const unlock = getByText(/unlocked/i);
        expect(unlock).toHaveClass('green-led');   
    }, 1000)

})

test('is closed and locked', () => {
    setTimeout(() => {
        const { getByText } = render(
        <Display closed={true} locked={true} />
    );
        const locked = getByText(/locked/i);  
        expect(locked).toHaveClass('red-led'); 

    }, 1000)

})