import React, { useContext, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { TranslationContext } from '../pages/_app';

import { T, Video, Image } from '../components';

const socials = ['spotify', 'twitter', 'instagram', 'facebook', 'youtube'];
const IndexPage = () => {
  const [sound, setSound] = useState(false);
  const translationsFromContext = useContext(TranslationContext);

  const toggleMute = () => {
    console.log('🔈');
    const video = document.querySelector('video');
    video.muted = !video.muted;
    setSound(!sound);
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
      <Cta
        onClick={() => {
          location.href =
            'mailto:info@cargomas.com?subject=Buy album&body=Blabla%0D%0A%0D%0ASend 20euro to this account%0D%0A%0D%0AAnd fill in your name and address%0D%0A%0D%0A%0D%0Aname:%0D%0Aaddress%0D%0A%0D%0A%0D%0AIf name is not the same as from the bank account please specify!';
        }}
      >
        <T translationKey="buyAlbum"></T>
      </Cta>
      <Mute onClick={toggleMute}>
        {sound ? (
          <Image imageKey="sound"></Image>
        ) : (
          <Image imageKey="soundoff"></Image>
        )}
      </Mute>

      <SocialLink>
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
      </SocialLink>
    </Main>
  );
};

const Cta = styled.button`
  position: absolute;
  top: 60%;
  right: 20%;
  font-family: inherit;
  border-radius: 200px;
  font-size: 2rem;
  padding: 10px 40px;
  background: none;
  cursor: pointer;
  color: white;
  border: 3px solid white;
  transition: all 300ms ease-in;
  :hover {
    background: var(--background-dark);
    color: #111;
    border-color: #111;
  }
`;

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
const SocialLink = styled.section`
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
    min-height: 100vh;
    min-width: 100%;
    position: relative;
  }
`;

export default IndexPage;
