import PropTypes from 'prop-types';

import { Button } from "../ButtonElements"

import { InfoContainer, InfoWrapper, InfoRow, Column1, Subtitle, TextWrapper, TopLine, Heading, BtnWrap, Column2, ImgWrap, Img } from "./InfoElements"

export const InfoSection = ({lightBg,id,imgstart, topLine, lightText, headline, description, darkText,buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <>
        <InfoContainer lightbg={lightBg} id={id}>
    <InfoWrapper>
        <InfoRow imgstart={imgstart ? 'true' : 'false'}>
            <Column1>
            <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lighttext={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                    <Button to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    >{buttonLabel}</Button>
                </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
                <ImgWrap>
                <Img src={img} alt={alt} />
                </ImgWrap>
            </Column2>
        </InfoRow>
    </InfoWrapper>
        </InfoContainer>
    </>
  )
}

InfoSection.propTypes = {
    lightBg: PropTypes.bool,
    id: PropTypes.string,
    imgstart: PropTypes.bool,
    topLine: PropTypes.string,
    lightText: PropTypes.bool,
    headline: PropTypes.string,
    description: PropTypes.string,
    darkText: PropTypes.bool,
    buttonLabel: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
    primary: PropTypes.bool,
    dark: PropTypes.bool,
    dark2: PropTypes.bool,
  };
