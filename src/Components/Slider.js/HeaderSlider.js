import React, { Fragment } from 'react'
import { Carousel } from 'react-bootstrap'
const HeaderSlider = () => {
  return (
    <Fragment>
      <Carousel variant="dark" syle={{ maxheight: '600px' }}>
        <Carousel.Item>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyAVGm-D1RRmxhR7AO1jzqyIKgoSQgXfkAQ&usqp=CAU" alt="" className='d-block w-100' style={{ height: '100vh', objectFit: 'cover' }} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyAVGm-D1RRmxhR7AO1jzqyIKgoSQgXfkAQ&usqp=CAU" alt="" className='d-block w-100' style={{ height: '100vh', objectFit: 'cover' }} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyAVGm-D1RRmxhR7AO1jzqyIKgoSQgXfkAQ&usqp=CAU" alt="" className='d-block w-100' style={{ height: '100vh', objectFit: 'cover' }} />
          <Carousel.Caption style={{color:"white"}}>
            <h3 >Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  )
}
export default HeaderSlider;