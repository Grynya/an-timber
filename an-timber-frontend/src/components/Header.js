import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../modules/components/AppBar';
import Toolbar from '../modules/components/Toolbar';
import theme from "../style/theme";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {ReactComponent as Logo} from '../img/logo.svg';
import {ReactComponent as Title} from '../img/title.svg';
import {ReactComponent as Kyivstar} from '../img/kyivstar.svg';
import {ReactComponent as Vodafone} from '../img/vodafone.svg';
import {ReactComponent as Lifecell} from '../img/lifecell.svg';

import {HashLink} from 'react-router-hash-link';
import {Icon, ListItemButton} from "@mui/material";

const rightLink = {
    fontSize: 16,
    color: theme.palette.primary.dark,
    ml: 3,
};
const hashLinkStyle = {
    ...theme.typography.h6,
    ...rightLink,
    marginLeft: 25,
    textDecoration: 'none'
}
const phoneStyle = {
    fontWeight: theme.typography.fontWeightMedium,
    display: 'flex',
    justifyContent: 'center'
}
const drawerWidth = 240;
const sections = [
    {title: 'Головна', url: '/'},
    {title: 'Про компанію', url: '/about-us'},
    {title: 'Продукція', url: '/#production'},
    {title: 'Доставка', url: '/delivery'},
    {title: 'Новини', url: '/news'},
];
function Phones() {
    return(<><Box sx={phoneStyle}>
        <Icon sx={{width: 23, height: 26}}><Vodafone/></Icon>+38-099-601-47-46
    </Box>
    <Box sx={phoneStyle}>
        <Icon sx={{width: 23, height: 26}}><Lifecell/></Icon>+38-093-277-29-37</Box>
    <Box sx={phoneStyle}>
        <Icon sx={{width: 23, height: 26}}><Kyivstar/></Icon>+38-068-095-39-49</Box></>)
}

function Header(props) {

    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle}
             sx={{textAlign: 'center', height: '100vh', backgroundColor: theme.palette.secondary.light}}>
            <Grid
                container
                item xs={6}
                direction="column"
                alignContent="flex-start"
            >
            </Grid>
            <List>
                {sections.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton>
                            <HashLink to={item.url} style={hashLinkStyle}>
                                <ListItemText primary={item.title}/>
                            </HashLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <React.Fragment>
            <AppBar position="fixed" sx={{
                paddingTop: 6,
                paddingBottom: 4,
                borderBottom: 'solid',
                color: theme.palette.secondary.main
            }}>
                <Toolbar sx={{display: 'flex', flexDirection: 'row'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {lg: 'none', md: 'block'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{width: '50%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Box>
                            <Link
                                underline="none"
                                to="/"
                                sx={{fontSize: 28}}
                            >
                                <Logo/>
                            </Link>
                        </Box>
                        <Box>
                            <Link
                                underline="none"
                                to="/">
                                <Title/>
                            </Link>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: {xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block'},
                        justifyContent: 'flex-end',
                    }}>
                        <HashLink
                            style={hashLinkStyle}
                            to={sections[0].url}
                        >
                            {sections[0].title}
                        </HashLink>
                            <HashLink
                                style={hashLinkStyle}
                                to={sections[1].url}
                            >
                                Про&nbsp;компанію
                            </HashLink>
                            <HashLink
                                style={hashLinkStyle}
                                to={sections[2].url}
                            >
                                {sections[2].title}
                            </HashLink>
                            <HashLink
                                style={hashLinkStyle}
                                to={sections[3].url}
                            >
                                {sections[3].title}
                            </HashLink>
                            <HashLink
                                style={hashLinkStyle}
                                to={sections[4].url}
                            >
                                {sections[4].title}
                            </HashLink>
                    </Box>
                    <Box sx={{...rightLink,

                        display: {xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'},
                    }}>
                        <Phones/>
                    </Box>
                </Toolbar>
                <Box sx={{...rightLink,
                    mt: 5,
                    ml:12,
                    justifyContent:'start',
                    alignItems:'start',
                    flexDirection:'column',
                    display: {xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'},
                }}>
                    <Phones/>
                </Box>
            </AppBar>
            <Box component="nav"
                 sx={{
                     textAlign: 'center',
                     backgroundColor: theme.palette.background.default
                 }}>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: false,
                    }}
                    sx={{
                        display: {lg: 'none', md: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Toolbar/>
        </React.Fragment>
    );
}

export default Header;
