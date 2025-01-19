import React from 'react'
import SectionHeading from './SectionHeading/SectionHeading'
import Card from '../Card/Card'
import Audi from '../../assets/img/pexels-mikebirdy-977003.jpg'
import Lambo from '../../assets/img/download (1).jpg'
import Prado from '../../assets/img/images (3).jpg'
import Jeep from '../../assets/img/images (2).jpg'
import Porsche from '../../assets/img/images (1).jpg'
import Alex from '../../assets/img/pexels-alexgtacar-745150-1592384.jpg'
import Carousel from 'react-multi-carousel'
import { responsive } from '../../utils/Section.constants';
import './BrandNew.css';

const items = [
    {
      'title': 'Porsche',
      imagePath: Porsche,
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
      'title': 'Jeep',
      imagePath: Jeep,
    },
    {
      'title': 'Alex',
      imagePath: Alex,
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
                itemClass={'react-slider-custom-item'}
                className='px-3'
      >
        {items && items?.map((item,index)=><Card key={item?.title +index} title={item.title} imagePath={item.imagePath}/>)}
      </Carousel>
      </>
    </div>
  )
}

export default BrandNew
