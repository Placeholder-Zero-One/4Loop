import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios"
import {useState} from "react"
import React from "react"

function CardComponent() {
  const [postArrayOfObjects, postArrayOfObjectsF] = useState([])
    try{
        let post = axios.get("/upload")
        console.log("The Image OBJECT HAS LANDED", postArrayOfObjects)
        postArrayOfObjectsF(post)

    }
catch(error){
    console.error(error)
}
  return (
    <div>
      {console.log(postArrayOfObjects)}
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