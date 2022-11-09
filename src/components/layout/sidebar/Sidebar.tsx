import React from "react"

import * as S from "./styled"
import Video from "./video/Video"
const Sidebar = ({ videos, setSelectedVideoId }: Props) => {
    if (videos.length === 0) return <div>no videos</div>
    return (
        <S.Sidebar>
            {videos.map(video => {
                return (
                    <Video
                        setSelectedVideoId={setSelectedVideoId}
                        id={video.id.videoId}
                        title={video.snippet.title}
                        thumbnailSrc={video.snippet.thumbnails.default.url}
                    />
                )
            })}
        </S.Sidebar>
    )
}

interface Props {
    videos: {
        id: { videoId: string }
        snippet: { title: string; thumbnails: { default: { url: string } } }
    }[]
    setSelectedVideoId: (id: string) => void
}

export default Sidebar
