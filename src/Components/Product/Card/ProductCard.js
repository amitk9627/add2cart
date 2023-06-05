import React, { Fragment } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
const ProductCard = ({ product }) => {
  return (
    <Fragment>
      <Link to={`product/${product.id}`} className='text-decoration-none text-dark'>
        <Card className='custom-card'>
          <Card.Img variant='top' className='card-img py-3' src={product.image} />
          <Card.Body className='text-center'>
            <Card.Title className='fs-6'>{product.title.slice(0, 25)}</Card.Title>
            <Card.Text className='text-capitalize text-decoration-none fs-6'>{product.category}</Card.Text>
            <Card.Text><h4>{product.price}</h4></Card.Text>
            <div className='py-2 d-flex justify-content-center fs-6 '>
              <ReactStars
                count={5}
                value={product.rating.rate}
                isHalf={true}
                edit={false}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              {`(${product.rating.count})`}
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Fragment>

  )
}

export default ProductCard
