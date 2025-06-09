import * as React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Theme } from "@mui/material";
import { observer } from "mobx-react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        height: 20,
        width: 100,
        display: "flex",
        borderRadius: 10,
        border: '1px solid black',
        padding: "2px 4px"
    },
    bar: {
        margin: '1px 2px',
        width: '100%'
    }

}))

interface AmountLevelProps {
    high?: boolean,
    medium?: boolean,
    low?: boolean,
}

function AmountLevel(prop: AmountLevelProps) {
    const classes = useStyles();
    const { high, low, medium } = prop

    return (
        <div className={classes.container}>
            <div className={classes.bar} style={{ background: high ? "green" : "none" }}></div>
            <div className={classes.bar} style={{ background: high ? "green" : "none" }}></div>
            <div className={classes.bar} style={{ background: high ? "green" : "none" }}></div>
            <div className={classes.bar} style={{ background: high ? "green" : medium ? "orange" : "none" }}></div>
            <div className={classes.bar} style={{ background: high ? "green" : medium ? "orange" : "none" }}></div>
            <div className={classes.bar} style={{ background: high ? "green" : medium ? "orange" : "none" }}></div>
            <div className={classes.bar} style={{ background: high ? "green" : medium ? "orange" : "none" }}></div>
            <div className={classes.bar} style={{ background: high ? "green" : medium ? "orange" : low ? "red" : "none" }}></div>
            <div className={classes.bar} style={{ background: high ? "green" : medium ? "orange" : low ? "red" : "none" }}></div>
        </div>
    )
}

export default observer(AmountLevel);