import { breakpoints } from "@cssVariables"
import styled from "styled-components"

const Player = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`

const Iframe = styled.iframe`
    width: 500px;
    height: 200px;
    max-width: 100%;

    ${breakpoints.lg} {
        height: 300px;
    }
`

export { Player, Iframe }
