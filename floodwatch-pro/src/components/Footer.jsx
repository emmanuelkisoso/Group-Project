import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer =() =>{
    return(
        <Box>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>Emergency Floods Hotlines</Heading>
                            <h4>0707911911</h4>
                            <h4>0788911911</h4>
                    </Column>
                    <Column>
                        <Heading>Emergency Floods Websites</Heading>
                            <FooterLink>
                                Red Cross
                            </FooterLink>
                            <FooterLink>
                                ReliefWeb
                            </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Emergency Floods E-mails</Heading>
                            <h4>info@redcross.or.ke</h4>
                            <h4>info@who.int</h4>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    )
}

export default Footer