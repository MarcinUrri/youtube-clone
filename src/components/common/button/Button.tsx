import * as S from "./styled"

const Button = ({ text, onClick }: Props) => {
    return <S.Button onClick={onClick}>{text}</S.Button>
}

interface Props {
    text: string
    onClick: () => void
}
export default Button
