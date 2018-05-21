import React from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ExternalLinks } from '../../components/ExternalLinks';

import { MainSection } from "../../components/MainSection";
import { Header } from "../../components/Header";
import { PrimaryButton } from "../../components/Button";
import AvatarOne from "../../assets/svgs/mountainBiker.svg";
import AvatarTwo from "../../assets/svgs/cloudLightning.svg";
import AvatarThree from "../../assets/svgs/Laptop.svg";
import Resume from "../../assets/resume.pdf";
import { ParticleBackground } from '../../components/ParticleBackground';
import AboutContainer from "../../containers/About/About";
import MountainsDark from '../../assets/pngs/mountainsDark.png';

const TextAvatarGroup = styled.div`
  ${props => props.theme.flex.center};
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: left;
  }
  margin-bottom: ${props => props.theme.padding.fourtyEight};
`;

const MainText = styled.p`
  color: ${props => props.theme.colors.mainText};
`;
//
// const Link = styled.button`
//   color: ${props => props.theme.colors.primary};
// `;

const AvatarText = MainText.extend`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.mainBackground};
  color: ${props => props.theme.colors.mainText};
  height: 100%;
  width: 100%;
`;

const MountainDarkImage = styled.img`
  position: fixed;
  bottom: 0;
  right:0;
  width: 50%;
  height: auto;
  attachment: fixed;
`;

const AvatarImage = styled.img`
  fill: ${props => props.theme.colors.mainText};
  height: auto;
  width: 200px;
  margin: 0 ${props => props.theme.padding.thirtyTwo} 0 0;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin: 0 0 ${props => props.theme.padding.thirtyTwo} 0;
  }
`;

const Heading = styled.h3`
  color: ${props => props.theme.colors.mainText};
  margin-bottom: ${props => props.theme.padding.twentyFour};
`;

class AboutController extends React.Component {
  componentDidMount() {
    document.title = "Kyle L | About";
  }
  render() {
    return (
      <React.Fragment>
        <ParticleBackground
          numParticles={2}
          color={this.props.theme.colors.mainText}
        />
        <MountainDarkImage src={MountainsDark}/>
        <Wrapper>
          <ExternalLinks />
          <Header
            mainHeading="About Me"
            background="transparent"
            color={this.props.theme.colors.mainText}
          />
          <MainSection
            background="transparent"
          >
            <TextAvatarGroup>
              <AvatarImage src={AvatarOne} alt="AvatarOne" />
              <AvatarText>
                <Heading>So.. Who Am I?</Heading>
                {"Well, I'm currently studying Systems Design Engineering at the University of Waterloo, pursuing an " +
                "option in Intelligent Systems and minor in Economics. More importantly though, I love staying active " +
                "and meeting new people. If I'm not studying, you can find me out on the trails mountain biking, organizing " +
                "some pick-up games with friends, or trying out that 'awesome' new restaurant."}
                {/*<a*/}
                  {/*onClick={() => {*/}
                    {/*window.open(Resume);*/}
                  {/*}}*/}
                {/*>*/}
                  {/*here*/}
                {/*</a>{" "}*/}
                {/*to learn more about what I&#39;ve done!*/}
              </AvatarText>
            </TextAvatarGroup>
            <TextAvatarGroup>
              <AvatarImage src={AvatarTwo} alt="AvatarTwo" />
              <AvatarText>
                <Heading>What About the Rainy Days?</Heading>
                {"Along with playing sports I'm just as passionate about the analytics and statistics side of athletics. " +
                "I'm currently developing an app for deeper nba analytics, with the end goal to implement neural networks to better " +
                "predict player/team performance. Oh... I also really love board games (anyone up for Catan?!?)."}
                {/*<br />*/}
                {/*<br />*/}
                {/*<Link to="/portfolio">*/}
                  {/*<PrimaryButton>Okay Okay.. Now The Good Stuff</PrimaryButton>*/}
                {/*</Link>*/}
              </AvatarText>
            </TextAvatarGroup>
            <TextAvatarGroup>
              <AvatarImage src={AvatarThree} alt="AvatarThree" />
              <AvatarText>
                <Heading>Okay Okay.. Now The Good Stuff</Heading>
                {"I know if sounds cliche, but I really enjoy learning new things and diving into difficult challenges. " +
                "Whether it's impulsively signing up for half-marathons (hopefully a full marathon soon) or learning " +
                "new programming languages in free time, I like staying busy and being pushed. I hope to continue " +
                "growing and being pushed through my next internship opportunity, which I am currently seeking " +
                "for Fall 2018."}
              </AvatarText>
            </TextAvatarGroup>
          </MainSection>
        </Wrapper>
      </React.Fragment>
    );
  }
}

// AboutController.propTypes = {
//   theme: PropTypes.shape({
//     colors: PropTypes.shape({
//       text: PropTypes.objectOf(PropTypes.string),
//       background: PropTypes.objectOf(PropTypes.string)
//     })
//   }).isRequired
// };

export default withTheme(AboutController);