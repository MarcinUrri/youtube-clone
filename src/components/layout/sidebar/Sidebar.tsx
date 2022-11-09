import * as S from "./styled"
import Video from "./video/Video"
import { selectedVideo } from "models"

const Sidebar = ({ videos, setSelectedVideo }: Props) => {
    if (videos.length === 0) return null
    return (
        <S.Sidebar>
            {videos?.map(video => {
                return (
                    <Video
                        key={video.id.videoId}
                        setSelectedVideo={setSelectedVideo}
                        id={video.id.videoId}
                        title={video.snippet.title}
                        description={video.snippet.description}
                        thumbnailSrc={video.snippet.thumbnails.high.url}
                    />
                )
            })}
        </S.Sidebar>
    )
}

interface Props {
    videos: {
        id: { videoId: string }
        snippet: {
            title: string
            description: string
            thumbnails: { high: { url: string } }
        }
    }[]
    setSelectedVideo: (selectedVideo: selectedVideo) => void
}

export default Sidebar
