import { Dispatch, SetStateAction } from "react"
import * as S from "./styled"
import Input from "components/common/input/Input"
import Button from "components/common/button/Button"
import { API_KEY, YOUTUBE_API_BASE_URL } from "consts"

const Header = ({ searchQuery, setSearchQuery, dispatch }: Props) => {
    const fetchVideos = (e?: any) => {
        if (e) e.preventDefault()

        if (searchQuery === "") {
            dispatch({
                type: "ERROR",
                payload: "Please provide query to search",
            })
            return
        }
        dispatch({ type: "LOADING" })

        fetch(
            `${YOUTUBE_API_BASE_URL}search?part=snippet&q=${searchQuery}&key=${API_KEY}`
        )
            .then(response =>
                response.json().then(response => {
                    dispatch({ type: "SUCCESS", payload: response.items })
                })
            )
            .catch(error => {
                dispatch({ type: "ERROR", payload: error })
            })
    }

    return (
        <S.Header>
            <S.Logo src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" />
            <S.Form onSubmit={e => fetchVideos(e)}>
                <Input
                    id="search"
                    value={searchQuery}
                    placeholder="Search"
                    type="text"
                    onChange={setSearchQuery}
                />
                <Button text="Search" onClick={() => fetchVideos()} />
            </S.Form>
        </S.Header>
    )
}

interface Props {
    dispatch: any
    searchQuery: string
    setSearchQuery: Dispatch<SetStateAction<string>>
}

export default Header
