import {createMarkupFooterv2} from './footerv2'

test("createMarkupFooterv2 should render the footer's second version", () => {
    expect(createMarkupFooterv2(2022)).toMatchSnapshot()
})