import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import './CategoryCard.css';

const CategoryCard = ({category}) => {
    return (
        <Link to={category} className='text-decoration-none'>
            <Card style={{ width: '18rem' }} className='custom-card'>
              
                <Card.Body>
                   
                    <Card.Text className='text-capitalize'>
                        {category}
                    </Card.Text>
                  
                </Card.Body>
            </Card>
        </Link>
    )
}

export default CategoryCard


