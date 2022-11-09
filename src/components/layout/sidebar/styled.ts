import { breakpoints } from "@cssVariables"
import styled from "styled-components"

const Sidebar = styled.aside`
    order: 2;
    ${breakpoints.md} {
        width: 200px;
        order: 0;
    }
`

export { Sidebar }
