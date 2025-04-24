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
    <div style={{ display: "table", backgroundColor: '#f9f9f9',  width: '100vw', zIndex: 9999}}>
      <div style={{ display: "table-cell", padding: '5x', width:'400px'}} >
        <h2> Ángel Fuentes Fernández </h2>
      </div>
      <div role="presentation" onClick={handleClick} style={{  margin: '0 auto',  }}>
        <Breadcrumbs aria-label="breadcrumb" style={{  margin: '0 auto' }}>
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
    </div>
  );
}
