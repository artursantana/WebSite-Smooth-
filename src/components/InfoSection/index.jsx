

import { Button } from "../ButtonElements"

import { InfoContainer, InfoWrapper, InfoRow, Column1, Subtitle, TextWrapper, TopLine, Heading, BtnWrap, Column2, ImgWrap, Img } from "./InfoElements"

export const InfoSection = ({lightBg,id,imgStart, topLine, lightText, headline, darkText,buttonLabel, img, alt}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
    <InfoWrapper>
        <InfoRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
                <TopLine>{TopLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
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
