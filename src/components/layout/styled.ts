import styled from "styled-components"
import { common, breakpoints } from "@cssVariables"

const Layout = styled.div`
    max-width: ${common.gridWidth};
    padding: 0 20px;

    ${breakpoints.md} {
        padding: 0 40px;
    }
`

const Main = styled.main`
    display: flex;
`
export { Layout, Main }
