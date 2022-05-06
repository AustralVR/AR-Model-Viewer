import React, {useEffect} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
    Grid,
    Typography,
    isWidthUp,
    withWidth,
    withStyles
} from "@material-ui/core";
import Button from '@mui/material/Button';
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";
import {CircularProgress} from "@mui/material";

const styles = theme => ({
    containerFix: {
        [theme.breakpoints.down("md")]: {
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6)
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        },
        [theme.breakpoints.down("xs")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        overflow: "hidden",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    cardWrapper: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 340
        }
    },
    cardWrapperHighlighted: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 360
        }
    }
});

function PricingSection(props) {
    const {width, classes, result, ref} = props;

    return (
        <div ref={ref} className="lg-p-top" id={'result'} style={{backgroundColor: "#ffffff"}}>
            <Typography variant="h3" align="center" className="lg-ms-bottom">
                Piezas disponibles
            </Typography>
            {/*<div style={{width: '100%', display: 'flex', justifyContent: 'center', height: 300, alignItems: 'center'}}>*/}
            {/*    <Typography variant="h5" align="center" color={'#f1f1f1'}>*/}
            {/*        Aca deberíamos mostrar accesos a los modelos.*/}
            {/*    </Typography>*/}
            {/*</div>*/}
            <div align="center" style={{margin:'60px'}}>
                <Button variant="contained" size="large" style={{
                    maxWidth: '180px',
                    maxHeight: '80px',
                    minWidth: '180px',
                    minHeight: '80px',
                    margin: '10px'
                }}  href={"https://australvr.github.io/Model-Viewer/models_scenes/VTEM/index.html"}>VTEM</Button>
                <Button variant="contained" size="large" style={{
                    maxWidth: '180px',
                    maxHeight: '80px',
                    minWidth: '180px',
                    minHeight: '80px',
                    margin: '10px'
                }} href={"https://australvr.github.io/Model-Viewer/models_scenes/MSE6-E2M/index.html"}>MSE6-E2M</Button>
            </div>
            <div align="center">

            </div>
            <div align="center">

            </div>
        </div>

    );
}

PricingSection.propTypes = {
    width: PropTypes.string.isRequired
};

export default withStyles(styles, {withTheme: true})(
    withWidth()(PricingSection)
);
