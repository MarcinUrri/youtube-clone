import { useState, useReducer } from "react"
import Header from "./header/Header"
import * as S from "./styled"
import Sidebar from "./sidebar/Sidebar"
import Player from "./player/Player"
import { selectedVideo } from "models"
import Loader from "components/common/loader/Loader"

const initialState: state = {
    error: false,
    loading: false,
    videos: [],
}

const reducer = (state: state, action: action) => {
    switch (action.type) {
        case "ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false,
                videos: [],
            }
        case "SUCCESS":
            return {
                ...state,
                error: false,
                loading: false,
                videos: action.payload,
            }
        case "LOADING":
            return {
                ...state,
                error: false,
                loading: true,
                videos: [],
            }
        default:
            return {
                ...state,
                error: true,
                loading: false,
                videos: [],
            }
    }
}

const Layout = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [searchQuery, setSearchQuery] = useState("")
    const [selectedVideo, setSelectedVideo] = useState<null | selectedVideo>(
        null
    )
    return (
        <S.Layout>
            {state.loading && <Loader />}
            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                dispatch={dispatch}
            />
            <S.Main>
                {state.error && <S.Error>{state.error}</S.Error>}

                <Sidebar
                    setSelectedVideo={setSelectedVideo}
                    videos={state.videos}
                />
                {selectedVideo && (
                    <Player
                        id={selectedVideo.id}
                        title={selectedVideo.title}
                        description={selectedVideo.description}
                    />
                )}
            </S.Main>
        </S.Layout>
    )
}

interface action {
    type: "LOADING" | "ERROR" | "SUCCESS"
    payload: any
}

type state = {
    error: boolean
    loading: boolean
    videos:
        | []
        | Array<{
              id: { videoId: string }
              snippet: {
                  title: string
                  description: string
                  thumbnails: { high: { url: string } }
              }
          }>
}
export default Layout
