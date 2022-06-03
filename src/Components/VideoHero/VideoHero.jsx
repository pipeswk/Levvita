import React from 'react'
import ReactPlayer from 'react-player/lazy'

const VideoHero = () => {
  return (
    <div>
        {/* //TODO: SOLUCIONAR PROBLEMA DE AUTOPLAY */}
        {/* <ReactPlayer url={[
            {src: '/img/Video.mp4', type: 'video/mp4'}
        ]} loop playing={true} width='100%' height='100%' volume={0} /> */}
        <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/NljGurzPM2g?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >

        </iframe>
    </div>
  )
}

export default VideoHero