import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <div style={{ backgroundColor: '#272A2C', width: '100vw' }}>

      <div style={{ padding: '1rem', textAlign: 'left' }} >
        <h2 style={{color: '#ffffff'}}> Ángel Fuentes Fernández </h2>
      </div>


      <div role="presentation" onClick={handleClick} style={{position: 'absolute', top: '43%', left: "20%", color: '#ffffff' }}>
        <Breadcrumbs aria-label="breadcrumb" style={{color: '#ffffff'}}>
          <Link underline="hover" color= '#ffffff' href="#home">
            Home
          </Link>
          <Link
            underline="hover"
            color= '#ffffff'
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography sx={{ color:'#ffffff' }}>Breadcrumbs</Typography>
        </Breadcrumbs>
      </div>
      <div style={{ position: 'absolute', left: "85%", top: '25%'}}>
        <p style={{ color: '#ffffff' }}>⚠️ Very WIP website!!! ⚠️</p>
      </div>


    </div>
  );
}
