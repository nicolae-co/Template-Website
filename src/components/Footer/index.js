import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'



const Footer = () => {

    const toggleHome =()=>{
        scroll.scrollToTop()
    }


  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to='/signin'>How it works</FooterLink>
                        <FooterLink to='/signin'>Testimonials</FooterLink>
                        <FooterLink to='/signin'>Carrenrs</FooterLink>
                        <FooterLink to='/signin'>Investors</FooterLink>
                        <FooterLink to='/signin'>Terms of service</FooterLink>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to='/signin'>How it works</FooterLink>
                        <FooterLink to='/signin'>Testimonials</FooterLink>
                        <FooterLink to='/signin'>Carrenrs</FooterLink>
                        <FooterLink to='/signin'>Investors</FooterLink>
                        <FooterLink to='/signin'>Terms of service</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to='/signin'>How it works</FooterLink>
                        <FooterLink to='/signin'>Testimonials</FooterLink>
                        <FooterLink to='/signin'>Carrenrs</FooterLink>
                        <FooterLink to='/signin'>Investors</FooterLink>
                        <FooterLink to='/signin'>Terms of service</FooterLink>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to='/signin'>How it works</FooterLink>
                        <FooterLink to='/signin'>Testimonials</FooterLink>
                        <FooterLink to='/signin'>Carrenrs</FooterLink>
                        <FooterLink to='/signin'>Investors</FooterLink>
                        <FooterLink to='/signin'>Terms of service</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>adelida</SocialLogo>
                    <WebsiteRights>adelida © {new Date().getFullYear()} Toate drepturile rezervate</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='//www.facebook.com' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Youtube'><FaYoutube/></SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'><FaTwitter/></SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='LinkIn'><FaLinkedin/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer