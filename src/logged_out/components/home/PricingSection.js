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
import VTEMImage from "./VTEM.png"
import MSE6Image from "./MSE6-E2M.png"

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
                Nuestros productos:
            </Typography>
            <div align="center">
                <Button variant="contained" size="large" style={{
                    maxWidth: '315px',
                    maxHeight: '160px',
                    minWidth: '315px',
                    minHeight: '160px',
                    margin: '10px'
                }} href={"https://australvr.github.io/Model-Viewer/models_scenes/VTEM/index.html"}>
                    <img src={VTEMImage} width={180} height={120}/>
                    <Typography variant="h4" align="center" className="lg-ms-bottom" style={{margin: '20px'}}>
                        VTEM
                    </Typography>
                </Button>
                <div style={{display: 'inline-grid'}}>
                    <Button variant="contained" size="medium"
                            href={"https://www.festo.com/ar/es/e/soluciones/digitalizacion/neumatica-digitalizada-con-el-motion-terminal/-estandarizado-y-muy-flexible-id_400087/#"}  style={{
                        margin: '10px'
                    }}>
                        <Typography align="center" style={{margin: '10px'}}>
                            Estandarización
                        </Typography>
                    </Button>
                    <Button variant="contained" size="medium"
                            href={"https://www.youtube.com/watch?v=oQS4vQ7D-Jw&list=PLMPITBtM1tjgip4VUz0xg-yK-ma8Rsx0C&ab_channel=FestoEspa%C3%B1a"} style={{
                        margin: '10px'
                    }}>
                        <Typography align="center" style={{margin: '10px'}}>
                            Aplicaciones
                        </Typography>
                    </Button>
                </div>
            </div>
            <div align="center">
                <Button variant="contained" size="large" style={{
                    maxWidth: '315px',
                    maxHeight: '160px',
                    minWidth: '315px',
                    minHeight: '160px',
                    margin: '10px'
                }} href={"https://australvr.github.io/Model-Viewer/models_scenes/MSE6-E2M/index.html"}>
                    <img src={MSE6Image} width={86.4} height={120}/>
                    <ul/>
                    <Typography variant="h4" align="center" className="lg-ms-bottom">
                        MSE6-E2M
                    </Typography>
                </Button>
                <div style={{display: 'inline-grid'}}>
                    <Button variant="contained" size="medium"
                            href={"https://www.festo.com/ar/es/p/unidad-de-mantenimiento-combinada-id_MSE6_C2M/?q=c2m~:festoSortOrderScored"}  style={{
                        margin: '10px'
                    }}>
                        <Typography align="center" style={{margin: '10px'}}>
                            Comprar
                        </Typography>
                    </Button>
                    <Button variant="contained" size="medium"
                            href={"https://www.youtube.com/watch?reload=9&v=gUboHVkqr4U&ab_channel=FestoEspa%C3%B1a"} style={{
                        margin: '10px'
                    }}>
                        <Typography align="center" style={{margin: '10px'}}>
                            Aplicaciones
                        </Typography>
                    </Button>
                </div>
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
