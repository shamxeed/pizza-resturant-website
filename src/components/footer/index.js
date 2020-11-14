import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap } from './FooterElements';

const Footer = () => {

    return(
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="blank">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="blank">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="blank">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="blank">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;