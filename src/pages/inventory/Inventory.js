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
import { fetchUserItems } from '../../redux/inventory/inventorySlice';



export default function Inventory() {

    const inventory = useSelector((state) => state.inventory)
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
     React.useEffect(() => {
        if (user?.data?.login) {
            dispatch(fetchUserItems({token: user.data.token}))
        } else {
            dispatch(fetchUserItems({token: sessionStorage.getItem('token')}))
        }
        
     }, []);

    const items = inventory.items || []



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