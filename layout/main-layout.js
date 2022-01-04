import { useEffect } from 'react';
import Head from 'next/head';
import { TopBar, Content, Footer, FooterSide, FooterCenter, IconWrapper, ProfileImage } from '../styles/main-layout.styles';
import LinkedInIcon from '../icons/LinkedIn';
import TwitterIcon from '../icons/Twitter';
import InstagramIcon from '../icons/Instagram';
import DownloadIcon from '../icons/Download';
import { Button } from '@mui/material';
import DimensionHelper from "../util/dimensionHelper";

const MainLayout = ({ children }) => {
  useEffect(() => {
    fetch("../../api/products")
      .then(res => res.json())
      .then(res => console.log(res, "ramin"));
  }, []);

  const logoUrlBlack = "https://images.squarespace-cdn.com/content/v1/5ee6be593dc49f4def5d0ef1/5c7f6499-aca2-4472-b525-2dfb9d224006/logo-black.png?format=1500w";
  const logoUrlWhite = "https://images.squarespace-cdn.com/content/v1/5ee6be593dc49f4def5d0ef1/794aee92-3ddc-4e73-9f18-1abba2cc66df/logo-white.png?format=500w";

  const { isMobile, isTablet } = DimensionHelper() || {};

  return (
    <>
        <Head>
            <title>MixoModa Test App</title>
            <meta name="description" content="ShopifyCLI test project for MixoModa" />
            <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/5ee6be593dc49f4def5d0ef1/77e165c4-6286-4a57-9033-51eb38e95697/favicon.ico?format=100w"/>
            <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900' rel='stylesheet' type='text/css'></link>
        </Head>

        <TopBar>
            <img src={ logoUrlBlack } style={{ width: "12rem" }} ></img>
        </TopBar>

        <Content>
            { children }
        </Content>

        <Footer>
            <FooterSide>
                <div style={{ flex: "1 1 auto" }}><img src={ logoUrlWhite } style={{ width: "18rem" }} ></img></div>
                <div style={{ flex: "0 0 auto" }}>©2021 MixoModa Inc. All rights reserved.</div>
            </FooterSide>
            <FooterCenter>
                <div style={{ flex: "1 1 auto" }}></div>
                <div 
                    style={{ 
                        flex: "0 0 auto", 
                        display: "flex", 
                        flexFlow: "row", 
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: "1.5rem" 
                    }}>
                    <div 
                        style={{ 
                            flex: "0 0 auto;",  
                            display: "flex", 
                            flexFlow: "column", 
                            alignItems: "center", 
                            justifyContent: "center"
                        }}><ProfileImage /></div>
                    <div style={{ flex: "0 0 auto;", marginInlineStart: "0.5rem" }}>Ramin Yavari</div>
                    <div style={{ flex: "0 0 auto;", marginInlineStart: "1rem" }}>
                        <Button 
                            variant="outlined" 
                            style={{ fontSize: "0.7rem", padding: "0.2rem 0.5rem" }}
                            onClick={ () => window.open("../../documents/ramin_yavari_cv.pdf") }>
                            CV
                            <DownloadIcon style={{ marginInlineStart: "0.5rem" }} />
                        </Button>
                    </div>
                </div>
                <div style={{ flex: "0 0 auto" }}>
                    <IconWrapper onClick={ () => window.open("https://linkedin.com/in/ramin-yavari/") }>
                        <LinkedInIcon style={{ width: "1.2rem", height: "1.2rem" }} />
                    </IconWrapper>
                    <IconWrapper onClick={ () => window.open("https://twitter.com/sir_raminyavari/") }>
                        <TwitterIcon style={{ width: "1.2rem", height: "1.2rem" }} />
                    </IconWrapper>
                    <IconWrapper onClick={ () => window.open("https://instagram.com/raminyavari/") }>
                        <InstagramIcon style={{ width: "1.2rem", height: "1.2rem" }} />
                    </IconWrapper>
                </div>
            </FooterCenter>
            {!isTablet && !isMobile &&
                <FooterSide>
                    <div style={{ flex: "1 1 auto" }}></div>
                    <div style={{ flex: "0 0 auto" }}>
                        <div>Email: hello@mixomoda.com</div>
                        <div>Phone: 001 858 876 2058</div>
                        <div>3525 Del Mar Heights RD #1955 San Diego CA, 92130 USA</div>
                    </div>
                </FooterSide>
            }
        </Footer>
    </>
  );
};

export default MainLayout;