import React from "react"

const Video = ({ id, title, thumbnailSrc, setSelectedVideoId }: Props) => {
    return (
        <div onClick={() => setSelectedVideoId(id)} id={id}>
            {title}
            <img src={thumbnailSrc} />
        </div>
    )
}

interface Props {
    setSelectedVideoId: any
    id: string
    title: string
    thumbnailSrc: string
}

export default Video
