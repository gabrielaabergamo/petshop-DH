import {createMarkupServicos} from "./servicos"

test("createMarkupServicos should render cards", ()=>{
    expect(createMarkupServicos()).toMatchSnapshot()
})