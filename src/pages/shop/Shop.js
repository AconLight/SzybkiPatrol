import * as React from 'react'
import { Box, Button, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { buyItem, fetchShopItems } from '../../redux/shop/shopSlice';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Item from '../../components/card/Item';
import LightedGroup from '../../components/group/LightedGroup';
import { fetchUser } from '../../redux/user/userSlice';



export default function Shop() {


    const { cat } = useParams()

    const shop = useSelector((state) => state.shop)
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const buyItemHandle = (token, itemName) => {
        dispatch(buyItem({token, itemName}))
    }
    
    React.useEffect(() => {
        dispatch(fetchShopItems());
        if (user?.data?.login) {
            dispatch(fetchUser({login: user.data.login, token: user.data.token}))
        } else {
            dispatch(fetchUser({login: sessionStorage.getItem('login'), token: sessionStorage.getItem('token')}))
        }
     }, []);

    const items = shop.items && shop.items.filter(el => el?.category == cat)
  
    const testMenuItems = [
        {
            href: '/shop/cars',
            title: 'samochody',
            cat: "car"
        },
        // {
        //     href: '/shop/paintwork',
        //     title: 'lakiery',
        //     cat: "paintwork"
        // },
        {
            href: '/shop/bodyworks',
            title: 'karoseria',
            cat: "bodyworks"
        },
        {
            href: '/shop/weapons',
            title: 'uzbrojenie',
            cat: "weapons"
        },
        // {
        //     href: '/shop/tires',
        //     title: 'opony',
        //     cat: "tire"
        // },
        // {
        //     href: '/shop/engines',
        //     title: 'silniki',
        //     cat: "engine"
        // },
        // {
        //     href: '/shop/addons',
        //     title: 'dodatki',
        //     cat: "addon"
        // },
    ];

    


    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                {testMenuItems.map(({ href, title }) => (
                    <NavLink to={href} >
                        <Button
                            variant="contained"
                            sx={{ mx: 3, my: 1 }}>
                            {title}
                        </Button>
                    </NavLink>
                ))}
            </Box>
            <Box>{cat}</Box>
            <Divider />
            <LightedGroup>
            <ImageList cols={1} sx={{width: '100%'}}>
                {items.map((item, idx) => (
                    <ImageListItem sx={{py:2}} key={idx}>
                        <Item item={item} buttonTitle="kup" onClick={() => buyItemHandle(user?.data?.token, item?.name)} />
                    </ImageListItem>
                ))}
            </ImageList>
            </LightedGroup>
        </Box>
    )
}