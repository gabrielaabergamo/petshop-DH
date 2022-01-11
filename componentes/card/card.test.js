import {createMarkupCard} from "./card"

test("createMarkupCard should render cards", ()=>{
    expect(createMarkupCard()).toMatchSnapshot()
})