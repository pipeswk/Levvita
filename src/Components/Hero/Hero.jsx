import React from 'react'
import HeroContainer from '../HeroContainer/HeroContainer'
import TextHero from '../TextHero/TextHero'
import VideoHero from '../VideoHero/VideoHero'

const Hero = () => {
  return (
    <HeroContainer
        section={<VideoHero />}
    >
        <TextHero 
            titulo={'LEVVITA'}
            descripcion={'Irure sit labore ullamco ullamco elit dolore minim culpa aliquip pariatur culpa dolore. Officia et irure ipsum exercitation cillum voluptate. Qui est dolor ex anim labore adipisicing amet pariatur commodo laboris tempor esse. Et enim consequat fugiat enim cillum officia mollit adipisicing sint enim amet minim tempor cillum.'}
            boton1={'Ver productos'}
            // boton2={'Ver mas'}
        />
    </HeroContainer>
  )
}

export default Hero