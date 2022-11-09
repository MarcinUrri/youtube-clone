import { colors } from "@cssVariables"
import styled from "styled-components"

const Button = styled.button`
    font-size: 20px;
    background-color: transparent;
    border: 1px solid ${colors.gray};
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    padding: 0 10px;
    height: 40px;
    color: ${colors.gray};
`

export { Button }
