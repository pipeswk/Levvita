import React from 'react'

const VideoHero = ( { video_src } ) => {
  return (
    <div>
        {/* //TODO: SOLUCIONAR PROBLEMA DE AUTOPLAY */}
        <iframe
            width="100%"
            height="400"
            src={video_src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >

        </iframe>
    </div>
  )
}

export default VideoHero