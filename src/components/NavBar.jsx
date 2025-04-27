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
    <footer className="h-16 relative flex flex-row justify-center xl:items-baseline items-center ites backdrop-blur-xl bg-[rgba(39,42,44,0.60)]">

      <p className="p-4 xl:text-2xl text-[1rem] font-mono order-1 inline-block font-semibold whitespace-nowrap" style={{ color: '#ffffff' }}> Ángel Fuentes Fernández </p>

      {/* <div role="presentation" onClick={handleClick} style={{ color: '#ffffff' }} className="p-4 order-2">
        <Breadcrumbs aria-label="breadcrumb" style={{ color: '#ffffff' }}>
          <Link underline="hover" color='#ffffff' href="#home">
            <p  className=" xl:text-xl text-xs">Home</p>
          </Link>
          <Link
            underline="hover"
            color='#ffffff'
            href="/material-ui/getting-started/installation/" 
          >
            <p className=" xl:text-xl text-xs"> Core </p>
          </Link>
          <Typography sx={{ color: '#ffffff' }} className=" xl:text-xl text-xs" >Breadcrumbs</Typography>
        </Breadcrumbs>
      </div> */}
      <div className="p-4 ml-auto order-3">
        <p style={{ color: '#ffffff' }} className=" xl:text-xl text-xs">⚠️ Very WIP website!!! ⚠️</p>
      </div>


    </footer>
  );
}
