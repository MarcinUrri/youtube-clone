import { breakpoints } from "@cssVariables"
import styled from "styled-components"

const Sidebar = styled.aside`
    background-color: red;
    ${breakpoints.md} {
        width: 30%;
    }
`

export { Sidebar }
