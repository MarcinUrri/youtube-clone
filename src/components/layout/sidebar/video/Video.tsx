import { selectedVideo } from "models"
import * as S from "./styled"
import { scrollToTop } from "utils"
const Video = ({
    id,
    title,
    description,
    thumbnailSrc,
    setSelectedVideo,
}: Props) => {
    const selectVideo = () => {
        setSelectedVideo({ id, title, description })
        scrollToTop()
    }
    return (
        <S.Video onClick={() => selectVideo()} id={id}>
            <S.Thumbnail src={thumbnailSrc} alt={title} />
            <S.Title>{title}</S.Title>
        </S.Video>
    )
}

interface Props {
    setSelectedVideo: (selectedVideo: selectedVideo) => void
    id: string
    title: string
    description: string
    thumbnailSrc: string
}

export default Video
