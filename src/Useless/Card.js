import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BlogData from "../CarouselData.json"

function CardComponent() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{BlogData.title}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;