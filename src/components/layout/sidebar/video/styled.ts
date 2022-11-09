import { fonts } from "@cssVariables"
import styled from "styled-components"

const Video = styled.div`
    cursor: pointer;
    margin-bottom: 50px;

    &:hover {
        color: red;
    }
`

const Thumbnail = styled.img`
    width: 100%;
`
const Title = styled.h2`
    line-height: 1;
    margin-top: 10px;
    font-size: ${fonts.base};
`

export { Video, Thumbnail, Title }
