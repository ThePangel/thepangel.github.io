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
    <div style={{ backgroundColor: '#343434', width: '100vw' }}>

      <div style={{ padding: '1rem', textAlign: 'left' }} >
        <h2> Ángel Fuentes Fernández </h2>
      </div>


      <div role="presentation" onClick={handleClick} style={{position: 'absolute', top: '43%', left: "20%" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#home">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
        </Breadcrumbs>
      </div>
      <div style={{ position: 'absolute', left: "85%", top: '25%'}}>
        <p style={{ }}>⚠️ Very WIP website!!! ⚠️</p>
      </div>


    </div>
  );
}
