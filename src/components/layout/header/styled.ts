import { breakpoints } from "@cssVariables"
import styled from "styled-components"

const Header = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    background-color: #fff;
    width: 100%;
`

const Logo = styled.img`
    width: 70px;

    ${breakpoints.lg} {
        width: 150px;
    }
`
const Form = styled.form`
    display: flex;
    margin: 0 auto;
`

export { Header, Logo, Form }
