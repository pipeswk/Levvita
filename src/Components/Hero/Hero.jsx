import React from 'react'
import HeroContainer from '../HeroContainer/HeroContainer'
import TextHero from '../TextHero/TextHero'
import VideoHero from '../VideoHero/VideoHero'

const Hero = ( { seccion } ) => {

  const { descripcion, title, video_src } = seccion

  return (
    <HeroContainer
        section={<VideoHero video_src={video_src} />}
    >
        <TextHero 
            titulo={title}
            descripcion={descripcion}
            boton1={'Ver productos'}
            // boton2={'Ver mas'}
        />
    </HeroContainer>
  )
}

export default Hero