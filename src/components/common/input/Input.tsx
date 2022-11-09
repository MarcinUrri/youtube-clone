import React from "react"

const Input = ({
    labelText,
    id,
    value,
    placeholder,
    type,
    onChange,
}: Props) => {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </>
    )
}

interface Props {
    labelText: string
    id: string
    value: string | number
    placeholder: string
    type: "text" | "number"
    onChange: (e: string) => void
}

export default Input
