import React from "react";
import { Box, Button, Divider, Grid } from "@mui/material";
import CardImgTitle from "./CardImgTitle";

export default function Item({item, buttonTitle, onClick}) {

    return (
        <CardImgTitle img={item.imgUrl} description={
            <div>
                {Object.keys(item)
                    .filter(el => el != "_id" && el != "imgUrl")
                    .map(key => <div>{`${key}: ${item[key]}`}</div>)}
                <Button
                    onClick={onClick}
                    variant="contained"
                    sx={{ mx: 3, my: 1 }}>
                    {buttonTitle}
                </Button>
            </div>
            } />
    )
}