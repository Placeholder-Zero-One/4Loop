import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent() {
    try{
        let postArrayOfObjects = axios.get("/blogs")
        console.log("The Image OBJECT HAS LANDED", postArrayOfObjects)
    }
catch(error){
    console.error(error)
}
  return (
    <div>
      {postArrayOfObjects.map( arr=>{
    
    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={arr.media.data} />
      <Card.Body>
        <Card.Title>{arr.title}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
      }


      )

}
    </div>
  );
  }

export default CardComponent;