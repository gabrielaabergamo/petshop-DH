import {createMarkupHeader} from './header'

test("createMarkupHeader should render cards", () =>{
    expect(createMarkupHeader()).toMatchSnapshot()
})