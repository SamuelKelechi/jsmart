import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import i001 from '../Assets/001.jpg'
import i002 from '../Assets/002.jpg'
import i003 from '../Assets/003.jpg'
import i004 from '../Assets/004.jpg'
import i005 from '../Assets/005.jpg'
import i006 from '../Assets/006.jpg'
import i007 from '../Assets/007.jpg'
import i008 from '../Assets/008.jpg'
import i009 from '../Assets/009.jpg'
import i010 from '../Assets/010.jpg'
import i011 from '../Assets/011.jpg'
import i012 from '../Assets/012.jpg'
import i013 from '../Assets/013.jpg'
import i014 from '../Assets/014.jpg'
import i015 from '../Assets/015.jpg'
import i016 from '../Assets/016.jpg'
import i017 from '../Assets/017.jpg'



const Gallery = () => {
  const itemData = [
    {
      img: i001,
      title: 'Bed',
      author: 'swabdesign',
    },
    {
      img: i002,
      title: 'Books',
      author: 'Pavel Nekoranec',
    },
    {
      img: i003,
      title: 'Sink',
      author: 'Charles Deluvio',
    },
    {
      img: i004,
      title: 'Kitchen',
      author: 'Christian Mackie',
    },
    {
      img: i005,
      title: 'Blinds',
      author: 'Darren Richardson',
    },
    {
      img: i006,
      title: 'Chairs',
      author: 'Taylor Simpson',
    },
    {
      img: i007,
      title: 'Laptop',
      author: 'Ben Kolde',
    },
    {
      img: i008,
      title: 'Doors',
      author: 'Philipp Berndt',
    },
    {
      img: i009,
      title: 'Coffee',
      author: 'Jen P.',
    },
    {
      img: i010,
      title: 'Storage',
      author: 'Douglas Sheppard',
    },
    {
      img: i011,
      title: 'Candle',
      author: 'Fi Bell',
    },
    {
      img: i012,
      title: 'Coffee table',
      author: 'Hutomo Abrianto',
    },
    {
      img: i013,
      title: 'Coffee table',
      author: 'Hutomo Abrianto',
    },
    {
      img: i014,
      title: 'Coffee table',
      author: 'Hutomo Abrianto',
    },
    {
      img: i015,
      title: 'Coffee table',
      author: 'Hutomo Abrianto',
    },
    {
      img: i016,
      title: 'Coffee table',
      author: 'Hutomo Abrianto',
    },
    {
      img: i017,
      title: 'Coffee table',
      author: 'Hutomo Abrianto',
    },
  ];

  // Use a media query to determine if the screen width is small
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <h2>Explore Our Gallery</h2>
      <Box sx={{ width: '90%', overflowY: 'hidden' }}>

        {/* Adjust the number of columns based on screen size */}
        <ImageList variant="masonry" cols={isMobile ? 1 : 3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{borderRadius:'10px'}}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
};

export default Gallery;
