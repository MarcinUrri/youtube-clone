import { breakpoints, colors } from "@cssVariables"
import styled from "styled-components"

const Input = styled.input`
    padding: 0 10px;
    height: 40px;
    border-radius: 20px;
    width: 150px;
    border: 1px solid ${colors.gray};
    border-right: none;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;

    ${breakpoints.lg} {
        padding: 20px;
        width: auto;
    }
`

export { Input }
