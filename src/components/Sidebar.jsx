'use client'
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { LucideMenu } from "@/components/svg/LucideMenu";
import { FluentChevronLeft24Filled } from "@/components/svg/FluentChevronLeft24Filled";
import { FluentChevronRight24Filled } from "@/components/svg/FluentChevronRight24Filled";
import { RiCompassDiscoverLine } from "@/components/svg/RiCompassDiscoverLine";
import { AkarIconsDashboard } from '@/components/svg/DashIcon';
import { GravityUiCalendar } from '@/components/svg/GravityUiCalendar';
import { TdesignUserUnknown } from '@/components/svg/TdesignUserUnknown';
import { PhStudent } from '@/components/svg/PhStudent';
import { F7TrayFull } from '@/components/svg/TrayFull'
import { IcTwotoneManageAccounts } from '@/components/svg/IcTwotoneManageAccounts';
import { MdiGraphBoxPlusOutline } from '@/components/svg/MdiGraphBoxPlusOutline';
import { LaUserTimes } from '@/components/svg/LaUserTimes';
import { LaChalkboardTeacher } from '@/components/svg/LaChalkboardTeacher';
import { LucideSettings } from '@/components/svg/LucideSettings';
import Image from 'next/image';
import Link from 'next/link';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer({children}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [drop, setDrop] = React.useState(false);

  const handleDrop = () => {
    setDrop(!drop);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navLink = [
    { label: 'Dashboard', href: '/dashboard', icon: <AkarIconsDashboard /> },
    { label: 'Calendar', href: '/calendar', icon: <GravityUiCalendar /> },
    { label: 'Enquiry', href: '/enquiry', icon: <TdesignUserUnknown /> },
    { label: 'Students', href: '', icon: <PhStudent />, hasDrop: true, dropMenu: [
        {
          title: 'abc', href: '/abc'
        },
        {
          title: 'xyz', href: '/xyz'
        }
      ] 
    },
    { label: 'Applications', href: '/applications', icon: <F7TrayFull /> },
    { label: 'Visa', href: '/visa', icon: <RiCompassDiscoverLine /> },
    { label: 'Accounts', href: '/accounts', icon: <IcTwotoneManageAccounts /> },
    { label: 'Reports', href: '/reports', icon: <MdiGraphBoxPlusOutline /> },
    { label: 'Defer / Environment', href: '/defer', icon: <LaUserTimes /> },
    { label: 'Coaching', href: '/coaching', icon: <LaChalkboardTeacher /> },
    { label: `Masters`, href: '/masters', icon: <LucideSettings /> }
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar className='bg-[#F4F6F8] shadow-none'>
          <IconButton className=""
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 1,
              ...(open && { display: 'none' }),
            }}
          >
            <LucideMenu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Image src='/img/logo.png' className='' width={180} height={200} alt='our logo' />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <FluentChevronRight24Filled /> : <FluentChevronLeft24Filled />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navLink.map((text, index) => (
            <Link key={index} href={text.href}>
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                  >
                  {text.icon} 
                  
                </ListItemIcon>
                  <ListItemText primary={text.label} sx={{ opacity: open ? 1 : 0 }} onClick={() => handleDrop}/>
                  {text.hasDrop && text.dropMenu.map((v,i)=>{
                    return (
                      <ListItem disablePadding sx={{ display: 'block' }} key={i}>
                        <ListItemButton
                          sx={{
                            display: 'block',
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                          }}
                        >
                          <ListItemText>
                            {v.title}
                          </ListItemText>
                        </ListItemButton>
                      </ListItem>
                    )
                  })}
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
      </Box>
    </Box>
  );
}
