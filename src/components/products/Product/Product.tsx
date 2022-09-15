// import useStyles from '../styles.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product(props: propsProduct) {
  return (
    <Card className='card-product'>
      <Card.Img className='card-image' src={props.image} />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>{props.name}</Card.Title>
        {/* <Card.Text dangerouslySetInnerHTML={{ __html: props.description }} /> */}
        <Card.Text className='card-price'>
          {props.price}
        </Card.Text>
        <Button className='card-btn' variant="primary" onClick={() => props.onAddToCart(props.id, 1)}>Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}

interface propsProduct {
  id: string
  name: string;
  image: string;
  description: string;
  price: string;
  onAddToCart: (productId: string, quantity: number) => any
}
