import styled from "styled-components"
import { common, breakpoints, colors } from "@cssVariables"

const Layout = styled.div`
    max-width: ${common.gridWidth};
    padding: 0 20px;
    margin-top: 90px;
    display: flex;
    align-items: center;

    ${breakpoints.md} {
        padding: 0 40px;
        margin-top: 130px;
    }
`

const Error = styled.span`
    color: ${colors.red};
`

const Main = styled.main`
    display: flex;
    flex-direction: column;

    ${breakpoints.lg} {
        flex-direction: row;
    }
`
export { Layout, Error, Main }
