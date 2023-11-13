import { InfoContainer, InfoWrapper, InfoRow, Column1, Subtitle, TextWrapper, TopLine, Heading, BtnWrap, Column2, ImgWrap, Img } from "./InfoElements"

import { Button } from "react-scroll"

export const InfoSection = () => {
  return (
    <>
        <InfoContainer>
    <InfoWrapper>
        <InfoRow>
            <Column1>
            <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                    <Button to='home'/>
                </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
                <ImgWrap>
                <Img />
                </ImgWrap>
            </Column2>
        </InfoRow>
    </InfoWrapper>
        </InfoContainer>
    </>
  )
}
