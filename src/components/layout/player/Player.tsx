import * as S from "./styled"

const Player = ({ id, title, description }: Props) => {
    return (
        <S.Player>
            <S.Iframe
                src={`https://www.youtube.com/embed/${id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <h2>{title}</h2>
            <p>{description}</p>
        </S.Player>
    )
}

interface Props {
    id: string
    title: string
    description: string
}
export default Player
