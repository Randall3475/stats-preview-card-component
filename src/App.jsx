import styled from 'styled-components';
import GlobalStyle from './globalStyle';
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Card>
          <CardLeft>
            <CardHeading>
              Get <HeadingSpan>insights</HeadingSpan> that help your business
              grow.
            </CardHeading>
            <CardParagraph>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </CardParagraph>
            <CardStats>
              <CardStatContainer>
                <CardStatNumber>10k+</CardStatNumber>
                <CardStatTitle>Companies</CardStatTitle>
              </CardStatContainer>
              <CardStatContainer>
                <CardStatNumber>314</CardStatNumber>
                <CardStatTitle>Templates</CardStatTitle>
              </CardStatContainer>
              <CardStatContainer>
                <CardStatNumber>12m+</CardStatNumber>
                <CardStatTitle>Queries</CardStatTitle>
              </CardStatContainer>
            </CardStats>
          </CardLeft>
          <CardRight>
            <CardPicture>
              <ImageSource
                media="(min-width: 1110px)"
                srcSet="./images/image-header-desktop.jpg"
              />
              <CardImage
                src="./images/image-header-mobile.jpg"
                alt="Women sitting in an office working"
              />
            </CardPicture>
          </CardRight>
        </Card>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1110px) {
    position: static;
    margin-top: 88px;
    margin-bottom: 88px;
  }
`;
const Card = styled.article`
  background: #1B1937;
  box-shadow: 0px 20px 20px -10px rgba(23, 25, 41, 0.203087);
  border-radius: 8px;
  max-width: 1110px;
  overflow: hidden;
  display: flex;
  @media only screen and (max-width: 1110px) {
    flex-direction: column-reverse;
    margin-inline: 24px;
  }
`;
const CardLeft = styled.div`
  padding-top: 71px;
  padding-left: 72px;
  padding-right: 95px;
  padding-bottom: 59px;
  @media only screen and (max-width: 1110px) {
    padding-top: 40px;
    padding-inline: 31.5px;
    padding-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const CardHeading = styled.h1`
  font-weight: 700;
  color: #FFFFFF;
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 25px;
  max-width: 403px;
  @media only screen and (max-width: 1110px) {
    text-align: center;
    max-width: 264px;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
  }
`;
const HeadingSpan = styled.span`
  color: #AB5CDB;
`;
const CardParagraph = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.75;
  margin-bottom: 72px;
  max-width: 374px;
  @media only screen and (max-width: 1110px) {
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    margin-bottom: 40px;
  }
`;
const CardStats = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 345px;
  @media only screen and (max-width: 1110px) {
    flex-direction: column;
    text-align: center;
    row-gap: 24px;
  }
`;
const CardStatContainer = styled.div``;
const CardStatNumber = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
`;
const CardStatTitle = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.6;
`;
const CardRight = styled.div``;
const CardPicture = styled.picture`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #AB5CDB;
    mix-blend-mode: multiply;
  }
`;
const CardImage = styled.img`
  @media only screen and (max-width: 1110px) {
    width: 100%;
  }
`;
const ImageSource = styled.source``;
