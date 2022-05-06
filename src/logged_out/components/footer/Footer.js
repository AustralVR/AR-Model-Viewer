import React from "react";
import PropTypes from "prop-types";
import {
    Grid,
    Typography,
    Box,
    IconButton,
    Hidden,
    withStyles,
    withWidth,
    isWidthUp
} from "@material-ui/core";
import WaveBorder from "../../../shared/components/WaveBorder";
import transitions from "@material-ui/core/styles/transitions";
import logoUA from "./logo_austral.png"

const styles = theme => ({
    footerInner: {
        backgroundColor: theme.palette.common.darkBlack,
        paddingTop: theme.spacing(8),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(6),
        [theme.breakpoints.up("sm")]: {
            paddingTop: theme.spacing(10),
            paddingLeft: theme.spacing(16),
            paddingRight: theme.spacing(16),
            paddingBottom: theme.spacing(10)
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: theme.spacing(10),
            paddingLeft: theme.spacing(10),
            paddingRight: theme.spacing(10),
            paddingBottom: theme.spacing(10)
        }
    },
    brandText: {
        fontFamily: "'Baloo Bhaijaan', cursive",
        fontWeight: 400,
        color: theme.palette.common.white
    },
    footerLinks: {
        marginTop: theme.spacing(2.5),
        marginBot: theme.spacing(1.5),
        color: theme.palette.common.white
    },
    infoIcon: {
        color: `${theme.palette.common.white} !important`,
        backgroundColor: "#33383b !important"
    },
    socialIcon: {
        fill: theme.palette.common.white,
        backgroundColor: "#33383b",
        borderRadius: theme.shape.borderRadius,
        "&:hover": {
            backgroundColor: theme.palette.primary.light
        }
    },
    link: {
        cursor: "Pointer",
        color: theme.palette.common.white,
        transition: transitions.create(["color"], {
            duration: theme.transitions.duration.shortest,
            easing: theme.transitions.easing.easeIn
        }),
        "&:hover": {
            color: theme.palette.primary.light
        }
    },
    whiteBg: {
        backgroundColor: theme.palette.common.white
    }
});

const socialIcons = [
    {
        icon: (
            <img src={logoUA} width="24px" height="24px"/>
        ),
        label: "Austral",
        href: "https://www.austral.edu.ar/industria/lab_realidad/"
    },
    {
        icon: (
            <svg
                role="img"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Facebook</title>
                <path
                    d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/>
            </svg>
        ),
        label: "Facebook",
        href: "https://www.facebook.com/IngAustral/"
    }
    ,
    {
        icon: (
            <svg
                role="img"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Instagram</title>
               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        ),
        label: "Instagram",
        href: "https://instagram.com/ingaustral?igshid=MDg3NTkzMDk="
    }
];

function Footer(props) {
    const {classes, theme, width} = props;
    return (
        <footer className="lg-p-top">
            <WaveBorder
                upperColor="#FFFFFF"
                lowerColor={theme.palette.common.darkBlack}
                animationNegativeDelay={4}
            />
            <div className={classes.footerInner}>
                <Grid container spacing={isWidthUp("md", width) ? 10 : 5}>
                    <Grid item xs={12} md={6} lg={4}>
                        <img alt={'alt'}
                             src={`${process.env.PUBLIC_URL}/images/logged_out/ua-ingenieria-color-logo.png`}/>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={12} md={6} lg={4}>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={6} lg={4}>
                        <Typography variant="h6" paragraph className="text-white">
                            Colaboración entre Festo y Laboratorio de Realidad Virtual, Facultad de Ingeniería, Universidad Austral.
                        </Typography>
                        <Typography style={{color: "#ffffff"}} paragraph>
                            Exhibición de modelados en Realidad Aumentada para FIMAQH 2022.
                        </Typography>
                        {/*<Typography style={{ color: "#8f9296" }} paragraph>*/}
                        {/*  Laboratorio de Realidad Virtual de la Universidad Austral*/}
                        {/*</Typography>*/}
                        <Box display="flex">
                            {socialIcons.map((socialIcon, index) => (
                                <Box key={index} mr={index !== socialIcons.length - 1 ? 1 : 0}>
                                    <IconButton
                                        aria-label={socialIcon.label}
                                        className={classes.socialIcon}
                                        href={socialIcon.href}
                                        target="_blank"
                                    >
                                        {socialIcon.icon}
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles, {withTheme: true})(Footer));
