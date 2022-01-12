import { createMarkupFooter } from "./footer"

test("createMarkupFooter should render the footer", () => {
    expect(createMarkupFooter(2022)).toMatchSnapshot()
})