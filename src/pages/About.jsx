import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";
import { Box, Stack, Typography } from "@mui/material";
import pdf from "../assets/all-images/MuhammadAlzabibi2024.pdf"

const About = () => {

  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide A best simple Searching Auto-Parts
                </h2>

                <div className=" d-flex align-items-center gap-3 mt-4">


                  <div>
                    <h6 className="section__subtitle">Need Any Help ?</h6>
                    <h4>Muhammad Alzabibi</h4>
                    <h6>Full Stack developer React js & MUI & Laravel </h6>
                    <Box display={'flex'} alignItems={'center'} >

                      <i className="ri-phone-line"></i>
                      <h6>+963-930-8888-19</h6>
                    </Box>

                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <Box width={'100%'} display={'flex'} justifyContent={'center'} >
            <Stack>

              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Team</h2>
            </Stack>
</Box> */}
        <Container>

      <Stack spacing={1} width={'100%'} direction={{ sm: 'row', md: 'row', lg: 'row', xs: 'column' }} mb={10}  >

        <OurMembers />

        <Stack width={'100%'}>



          <Box width={'100%'} height={'100%'} >
            <Box width={'100%'} height={'100%'}  >
              <Box sx={{ display:{sm:'block',md:'block',lg:'block',xs:'none'}, position: 'absolute', top: '1440px', right: "300px" }} >

                <Typography fontSize={25} p={0} m={0} color={'#fff  '} >Resume</Typography>
              </Box>
              <iframe
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: 'inherit'
                }}
                src={pdf}
              />


            </Box>
          </Box>

        </Stack>

      </Stack>
      </Container>

    </Helmet>
  );
};

export default About;
