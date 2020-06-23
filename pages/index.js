import React, { useContext } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { TranslationContext } from '../pages/_app';

import { T, Video, Image } from '../components';

const socials = ['spotify', 'twitter', 'instagram', 'facebook', 'youtube'];
const IndexPage = () => {
  const translationsFromContext = useContext(TranslationContext);

  const toggleMute = () => {
    console.log('🔈');
    const video = document.querySelector('video');
    video.muted = !video.muted;
  };
  return (
    <Main>
      <Head>
        <title>Cargo Mas</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Header>
        <Video movieKey="movie"></Video>

        <Image imageKey="logo"></Image>
      </Header>
      <Mute onClick={toggleMute}>
        <Image imageKey="sound"></Image>
      </Mute>
      <Section>
        {/* <h1>
          <T translationKey="title"></T>
        </h1> */}

        {socials.map((social) => {
          return (
            <Link
              target="_blank"
              href={
                translationsFromContext.find((t) => t.id === social)[
                  'NL zonderopmaak'
                ]
              }
              key={social}
            >
              <Image imageKey={social}></Image>
            </Link>
          );
        })}
      </Section>
    </Main>
  );
};

const Mute = styled.button`
  img {
    filter: invert(1);
  }
  border: none;
  background: none;
  position: absolute;
  bottom: 3rem;
  right: 1rem;
`;
const Link = styled.a`
  padding: 1rem;
  display: inline-block;
  filter: invert(1);
  transition: transform 200ms ease-in;
  :hover {
    transform: scale(1.1);
  }
`;
const Section = styled.section`
  padding: 2rem;
  position: fixed;
  bottom: 0;
`;
const Main = styled.main`
  background: var(--background-light);
  height: 100vh;
  overflow: hidden;
`;
const Header = styled.header`
  img {
    position: absolute;
    padding: 3rem;
    left: 0;
    top: 0;
  }
  video {
    height: 100vh;
    width: auto;
    position: relative;
  }
`;

export default IndexPage;
