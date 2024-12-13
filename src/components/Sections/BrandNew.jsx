import React from 'react'
import SectionHeading from './SectionHeading/SectionHeading'
import Card from '../Card/Card'
import Audi from '../../assets/img/pexels-mikebirdy-977003.jpg'
import Lambo from '../../assets/img/download (1).jpg'
import Prado from '../../assets/img/images (3).jpg'
import Carousel from 'react-multi-carousel'
import { responsive } from '../../utils/Section.constants';
import './BrandNew.css';

const items = [
    {
      'title': 'Audi',
      imagePath: Audi,
    },
    {
      'title': 'Lambo',
      imagePath: Lambo,
    },
    {
      'title': 'Prado',
      imagePath: Prado,
    },
    {
      'title': 'Audi',
      imagePath: Audi,
    },
    {
      'title': 'Audi',
      imagePath: Audi,
    },
    {
        'title': 'Audi',
        imagePath: Audi,
      },
  ];

const BrandNew = () => {
  return (
    <div>
      <>
      <SectionHeading title={'Brand New'}/>
      <Carousel swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={false}
                autoPlay={false}
                partialVisible={false}
      >
        {items && items?.map((item,index)=><Card key={item?.title +index} title={item.title} imagePath={item.imagePath}/>)}
      </Carousel>
      </>
    </div>
  )
}

export default BrandNew
