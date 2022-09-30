import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {ReactComponent as Logo} from "../img/logo.svg";
import Grid from "@mui/material/Grid";
import {theme} from "../style/theme";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const drawerWidth = 240;
const sections = [
    {title: 'Головна', url: '/'},
    {title: 'Про компанію', url: '/about-us'},
    {title: 'Продукція', url: '/'},
    {title: 'Доставка', url: '/delivery'},
    {title: 'Новини', url: '/news'},
];

function Header(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle}
             sx={{textAlign: 'center', backgroundColor: theme.palette.background.default, height: '100vh'}}>
            <Grid
                container
                item xs={6}
                direction="column"
                alignContent="flex-start"
            >
            </Grid>
            <Divider/>
            <List>
                {sections.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}} href={item.url}>
                            <ListItemText primary={item.title}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <React.Fragment>
            <AppBar component="nav" position="static">
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{mr: 2, display: {sm: 'none'}}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Grid container>
                            <Logo style={{backgroundColor: theme.palette.background.default}}/>
                            <Typography style={{fontWeight: "normal", margin:14}}>
                                099-601-47-46
                                <br/>
                                093-277-29-37
                                <br/>
                                068-095-39-49
                            </Typography>
                        </Grid>
                        <Grid container sx={{display: {xs: 'none', sm: 'block'}}}>
                            {sections.map((item) => (
                                <Button key={item.title}
                                        sx={{color: '#fff'}}
                                        href={item.url}
                                >
                                    {item.title}
                                </Button>
                            ))}
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav"
                 sx={{textAlign: 'center',
                     backgroundColor: theme.palette.background.default}}>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: false,
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
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

Header.propTypes = {
    window: PropTypes.func,
};

export default Header;
