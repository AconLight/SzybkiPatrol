import React from "react";
import { Box } from "@mui/material";

export default function StatWithBar({statName, value, maxValue, color, content}) {

    return (
        <>
            <Box sx={{width: `${value / maxValue*100}%`, height: '1.5em;', bgcolor: color}}>
                <div style={{paddingLeft: '8px', fontWeight: 'bold', position: 'absolute'}}>{statName}: {value}</div>
            </Box>
            <Box display="flex" justifyContent="flex-end" sx={{alignTex: 'right', height: '1.5em;', width: `${100 - value / maxValue*100}%`, bgcolor: 'rgba(80,80,80,.6)'}}>
                <div style={{paddingRight: '8px', fontWeight: 'bold', position: 'absolute'}}> {content}</div>
            </Box>
        </>
    )
}