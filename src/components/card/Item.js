import React from "react";
import { Box, Button, Divider, Grid } from "@mui/material";
import CardImgTitle from "./CardImgTitle";

export default function Item({item, canBuy}) {

    return (
        <CardImgTitle img={item.imgUrl} description={
            <div>
                {Object.keys(item)
                    .filter(el => el != "_id" && el != "imgUrl")
                    .map(key => <div>{`${key}: ${item[key]}`}</div>)}
                <Button
                    variant="contained"
                    sx={{ mx: 3, my: 1 }}>
                    {canBuy ? 'kup' : 'posiadane'}
                </Button>
            </div>
            } />
    )
}