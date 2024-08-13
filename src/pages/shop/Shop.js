import * as React from 'react'
import { Box, Button, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchShopItems } from '../../redux/shop/shopSlice';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



export default function Shop() {


    const { cat } = useParams()

    const shop = useSelector((state) => state.shop)
    const dispatch = useDispatch()

    
    React.useEffect(() => {
        dispatch(fetchShopItems());
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
            href: '/shop/tires',
            title: 'opony',
            cat: "tire"
        },
        {
            href: '/shop/engines',
            title: 'silniki',
            cat: "engine"
        },
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
            <ImageList cols={1} sx={{width: '40%'}}>
                {items.map((item, idx) => (
                    <Box sx={{p: 2, boxShadow: 5}}>
                    {Object.keys(item).filter(el => el != "_id" && el != "imgUrl").map(key => (<Box>{key}: {item[key]}</Box>))}
                        <ImageListItem key={idx}>
                        <img
                            src={item.imgUrl}
                            alt="asd"
                        />
                        </ImageListItem>
                    </Box>
                ))}
            </ImageList>
        </Box>
    )
}