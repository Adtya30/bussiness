/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Slider from 'react-slick';
import dynamic from 'next/dynamic';

const Testimonial = dynamic(() => import('components/cards/testimonial'), {
  ssr: false,
});

import ritesh from 'assets/images/ritesh.jpg';
import sundar from 'assets/images/sundar.jpg';
import satya from 'assets/images/satya.jpg';
import sunil from 'assets/images/sunil.jpg';
import { rgba } from 'polished';

const data = [
  {
    id: 1,
    avatar: ritesh,
    authorName: 'Ritesh Agarwalr' ,
    designation: 'CEO of OYO Rooms' ,
    text: `Ritesh Agarwal was born in a Marwari family in Bissam Cuttack, Odisha, India and brought up in Titilagarh.Ritesh comes from a family that used to run a small shop in Southern Odisha city called Rayagada`,
  },
  {
    id: 2,
    avatar: sundar,
    authorName: 'Sundar Pichai',
    designation: 'CEO of Google' ,
    text: `Born in Madurai, India, Pichai earned his degree from IIT Kharagpur in metallurgical engineering. Moving to the United States, he attained an M.S. from Stanford University in materials science and engineering.`,
  },
  {
    id: 3,
    avatar: satya,
    authorName: 'Satya Nadella',
    designation: 'CEO of Microsoft',
    text: `Satya Narayana Nadella born 19 August 1967) is an Indian American business executive. He is the executive chairman and CEO of Microsoft, succeeding Steve Ballmer in 2014 as CEO and John W.Thompson in 2021 as chairman.Before becoming CEO, he was the executive vice president of Microsoft's cloud and enterprise group.`,
  },
  {
    id: 4,
    avatar: sunil,
    authorName: 'Sunil Duggal',
    designation: 'CEO of Vedanta',
    text: `Sunil Duggal is an Indian entrepreneur and business executive. He is the Ex Chief Executive Officer of Dabur, India's largest Ayurvedic medicine manufacturer.
    Duggal holds an undergraduate degree in engineering from Birla Institute of Technology and Science.`,
  },
];

const Testimonials = () => {
  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box as="section" id="testimonials" sx={styles.section}>
      <Container>
        <Slider {...settings} sx={styles.carousel}>
          {data.map((item) => (
            <Testimonial key={item.id} testimonial={item} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  section: {
    pt: [6, null, null, 0],
    backgroundColor: '#F0F3F8',
    position: 'relative',
    '@media only screen and (min-width:767px)': {
      ':before': {
        backgroundColor: 'white',
        content: `''`,
        minHeight: [null, null, null, 30, 70, 100],
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
      },
    },
  },
  carousel: {
    '.slick-dots': {
      display: 'flex !important',
      margin: 0,
      padding: 0,
      bottom: [6, null, null, 8, 10],
      listStyle: 'none',
      position: 'absolute',
      left: [
        'calc(50% + 14px)',
        null,
        null,
        'calc(50% + 62px)',
        'calc(50% + 14px)',
        'calc(50% + 60px)',
        'calc(50% + 14px)',
      ],
      transform: 'translateX(-50%)',
      button: {
        backgroundColor: rgba('#5B2B9D', 0.2),
        border: 0,
        outline: 0,
        borderRadius: 5,
        cursor: 'pointer',
        height: [3, null, null, 6],
        width: [10, null, null, 15],
        overflow: 'hidden',
        textIndent: '-9999em',
        transition: 'all 0.3s ease-in-out 0s',
      },
      '.slick-active button': {
        backgroundColor: 'primary',
        width: [20, null, null, 30],
      },
    },
    li: {
      display: 'flex',
      '+ li': {
        ml: '6px',
      },
    },
  },
};
