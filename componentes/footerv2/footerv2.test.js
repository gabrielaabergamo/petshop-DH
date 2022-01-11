import {createMarkupFooterv2} from './footerv2'

test("createMarkupFooterv2 should render header", () => {
    expect(createMarkupFooterv2()).toMatchSnapshot()
})