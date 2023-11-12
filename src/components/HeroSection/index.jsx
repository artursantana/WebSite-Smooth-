import { HeroContainer, HeroBg, VideoBg } from "./HeroElements"
import Video from '../../'

export const HeroSection = () => {
  return (
    <>
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
        </HeroContainer>
    </>
  )
}
