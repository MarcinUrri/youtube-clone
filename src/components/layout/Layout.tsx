import { useState } from "react"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import * as S from "./styled"
import { ReactNode } from "react"
import Sidebar from "./sidebar/Sidebar"
import Player from "./player/Player"

const Layout = ({ children }: Props) => {
    const [searchQuery, setSearchQuery] = useState("")
    const [videos, setVideos] = useState([])
    const [selectedVideoId, setSelectedVideoId] = useState<null | string>(null)
    return (
        <S.Layout>
            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setVideos={setVideos}
            />
            <S.Main>
                <Sidebar
                    setSelectedVideoId={setSelectedVideoId}
                    videos={videos}
                />
                {selectedVideoId ? (
                    <Player id={selectedVideoId} />
                ) : (
                    "Select video"
                )}
            </S.Main>
            <Footer />
        </S.Layout>
    )
}

interface Props {
    children: ReactNode
}

export default Layout
