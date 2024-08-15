import * as React from 'react'
import { Box, Button, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchShopItems } from '../../redux/shop/shopSlice';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CardImgTitle from '../../components/card/CardImgTitle';
import Item from '../../components/card/Item';
import inventoryImg from '../../assets/inventory.jpg'
import LightedGroup from '../../components/group/LightedGroup';
import Space from '../../components/group/Space';



export default function Inventory() {

    const shop = useSelector((state) => state.shop)
    const dispatch = useDispatch()

    
    React.useEffect(() => {
        dispatch(fetchShopItems());
     }, []);

    const items = shop.items



    return (
        <LightedGroup>
            <CardImgTitle isMain={true} img={inventoryImg} title={"Wyposażenie"} description={"Przeglądaj swoje wyposażenie. Dostosuj je tak, aby mieć największe szanse na zwycięstwo."} />
            <Space />
            <ImageList cols={1} sx={{width: '100%'}}>
                {items.map((item, idx) => (
                    <ImageListItem sx={{py:2}} key={idx}>
                        <Item item={item} canBuy={false} />
                    </ImageListItem>
                ))}
            </ImageList>
        </LightedGroup>
    )
}