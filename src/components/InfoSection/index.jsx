import PropTypes from 'prop-types';


import { Button } from "../ButtonElements"

import { InfoContainer, InfoWrapper, InfoRow, Column1, Subtitle, TextWrapper, TopLine, Heading, BtnWrap, Column2, ImgWrap, Img } from "./InfoElements"

export const InfoSection = ({lightBg,id,imgStart, topLine, lightText, headline, description, darkText,buttonLabel, img, alt}) => {
  return (
    <>
        <InfoContainer lightbg={lightBg} id={id}>
    <InfoWrapper>
        <InfoRow imgstart={imgStart}>
            <Column1>
            <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lighttext={lightText}>{headline}</Heading>
                <Subtitle darktext={darkText}>{description}</Subtitle>
                <BtnWrap>
                    <Button to='home'>{buttonLabel}</Button>
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
    imgStart: PropTypes.bool,
    topLine: PropTypes.string,
    lightText: PropTypes.bool,
    headline: PropTypes.string,
    description: PropTypes.string,
    darkText: PropTypes.bool,
    buttonLabel: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
  };
