import { Dispatch, SetStateAction } from "react"
import Input from "components/common/input/Input"
import Button from "components/common/button/Button"

const Header = ({ searchQuery, setSearchQuery, setVideos }: Props) => {
    const fetchVideos = (e: any) => {
        e.preventDefault()
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=AIzaSyAy62kIZNKf3p1RT61W2Dd5TwCnQCx1qWw`
        ).then(res =>
            res.json().then(res => {
                console.log(res.items)
                setVideos(res.items)
            })
        )
    }

    return (
        <div>
            LOGO
            <form onSubmit={e => fetchVideos(e)}>
                <Input
                    labelText="search"
                    id="search"
                    value={searchQuery}
                    placeholder="Search"
                    type="text"
                    //@ts-ignore
                    onChange={setSearchQuery}
                />
                <Button text="Search" onClick={() => {}} />
            </form>
        </div>
    )
}

interface Props {
    searchQuery: string
    setSearchQuery: Dispatch<SetStateAction<string>>
    setVideos: any
}

export default Header
