import { Button, Progress, Typography, Row, Col, Layout } from 'antd';
import React from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { ArtistCard } from '../../components/ArtistCard';
import { useMeta } from '../../contexts';

const { Content } = Layout;
const styleObj = {
    fontSize:14
}

export const AboutUsView = () => {
  const styles = {
    links: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100px',
    }
  };
  const DiscordLogo = () => (
    <svg
      width="100"
      height="114"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 'scale(0.5)' }}
    >
      <g fill="#C0FFFF" fill-rule="evenodd">
        <path d="M60.48 47.516c-3.256 0-5.826 2.799-5.826 6.282 0 3.484 2.628 6.283 5.826 6.283 3.255 0 5.825-2.799 5.825-6.283 0-3.483-2.627-6.282-5.825-6.282zm-20.845 0c-3.256 0-5.826 2.799-5.826 6.282 0 3.484 2.627 6.283 5.826 6.283 3.255 0 5.825-2.799 5.825-6.283.057-3.483-2.57-6.282-5.825-6.282z" />
        <path d="M88.235 0H11.707C5.254 0 0 5.255 0 11.708v76.527c0 6.454 5.254 11.708 11.707 11.708h64.764l-3.027-10.451 7.31 6.739 6.91 6.34L100 113.25V11.707C99.943 5.254 94.689 0 88.235 0zM66.19 73.958s-2.056-2.456-3.769-4.569c7.482-2.113 10.337-6.739 10.337-6.739-2.341 1.542-4.569 2.628-6.568 3.37-2.855 1.2-5.597 1.942-8.28 2.456-5.483 1.028-10.509.742-14.792-.057-3.255-.629-6.054-1.485-8.396-2.456-1.313-.514-2.74-1.142-4.169-1.942-.17-.114-.342-.171-.514-.285-.114-.057-.17-.115-.228-.115-1.028-.57-1.6-.97-1.6-.97s2.742 4.511 9.995 6.681c-1.713 2.17-3.826 4.684-3.826 4.684-12.622-.4-17.419-8.624-17.419-8.624 0-18.218 8.224-33.01 8.224-33.01 8.224-6.11 15.99-5.94 15.99-5.94l.572.686c-10.28 2.912-14.963 7.424-14.963 7.424s1.256-.685 3.37-1.599c6.11-2.684 10.965-3.37 12.964-3.598.342-.057.628-.114.97-.114a48.33 48.33 0 0111.537-.115c5.425.629 11.25 2.228 17.19 5.426 0 0-4.512-4.283-14.22-7.196l.8-.914s7.823-.17 15.99 5.94c0 0 8.224 14.792 8.224 33.01 0-.057-4.798 8.167-17.419 8.566z" />
      </g>
    </svg>
  );
  
  const TwitterLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="266.667"
      height="216.715"
      viewBox="0 0 6701 5446"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      image-rendering="optimizeQuality"
      fill-rule="evenodd"
      clip-rule="evenodd"
      style={{ transform: 'scale(0.75)' }}
    >
      <path
        d="M6701 645c-247 109-512 183-790 216 284-170 502-440 604-761-266 158-560 272-873 334C5391 167 5034 0 4638 0c-759 0-1375 616-1375 1375 0 108 12 213 36 313-1143-57-2156-605-2834-1437-118 203-186 439-186 691 0 477 243 898 612 1144-225-7-437-69-623-172v17c0 666 474 1222 1103 1348-115 31-237 48-362 48-89 0-175-9-259-25 175 546 683 944 1284 955-471 369-1063 589-1708 589-111 0-220-7-328-19 608 390 1331 618 2108 618 2529 0 3912-2095 3912-3912 0-60-1-119-4-178 269-194 502-436 686-712z"
        fill="#c0ffff"
      />
    </svg>
  );

  return (
    <Layout style={{ margin: 0, marginTop: 30 }}>
      <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
        <h2 style={{ width: '100%', marginTop: 10 }}>About ChicagoPhotoShop</h2>
            <span style={styleObj}> My name is Jeff. I spent years as a Chicago cityscape photographer and now jumping into the world of NFTs. I've added some motion to a few of my favorite photos and minted them on the Solana blockchain. If I can sell printed photos online and in a gallery, then why not on the blockchain, where it will live forever :) </span>
      </Content>
      <Row>
              <Col span={7}>
                <a
                  style={styles.links}
                  href="https://discord.com/channels/@me/631319484086485012"
                  target="_blank"
                >
                  <DiscordLogo />
                </a>
              </Col>
              <Col span={4}>
                <a
                  style={styles.links}
                  href="https://twitter.com/chicagophotosho"
                  target="_blank"
                >
                  <TwitterLogo />
                </a>
              </Col>
            </Row>
    </Layout>
  );


  
};