import * as S from "./styled"

const Input = ({ id, value, placeholder, type, onChange }: Props) => {
    return (
        <S.Input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    )
}

interface Props {
    id: string
    value: string | number
    placeholder: string
    type: "text" | "number"
    onChange: (e: string) => void
}

export default Input
