import React from "react"

import * as S from "./styled"

const Player = ({ id }: Props) => {
    return (
        <S.Player>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </S.Player>
    )
}

interface Props {
    id: string
}
export default Player
