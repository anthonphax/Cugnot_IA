import * as React from 'react';
import Head from 'next/head';
import Uploader  from '../components/uploader';
import AppDrawer  from '../components/drawer';
import Box from '@mui/material/Box';
import { ThemeProvider, styled, useTheme, createTheme } from '@mui/material/styles';



export default function Home() {
    return (
    <div>
        <Head>
            <title>Validações</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>  
        <AppDrawer/>
        <Box sx={{ 
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        height: "800px",
        }}
        >
              <Uploader/>
        </Box>
    </div>  
  )}