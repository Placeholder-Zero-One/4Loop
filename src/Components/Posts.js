import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function CardComponent() {
    const [postArrayOfObjects, setpostArrayOfObjects] = useState([])
    
    useEffect(() => {

        async function getPost() {

            try {
                let postArrayOfObjects = await axios.get("http://localhost:3001/upload")
                console.log("The Image OBJECT HAS LANDED", postArrayOfObjects)
                setpostArrayOfObjects(postArrayOfObjects.data)
            }
            catch (error) {
                console.error(error)
            }

        }
        getPost()

    }, [])
    
    return (
        <div style={{display:'flex',height:"100vh", flexDirection:"column", alignItems:'center', border:'10px solid black'}}>
           <style>
          {`
            ::-webkit-scrollbar {
                width:10px
                overflowY:scroll
              } 
          `}
        </style>
            {postArrayOfObjects.map(arr => {

                return (

                    <Card style={{ width: '18rem', backgroundColor:'#FFC107', border:'2px solid #b02025', marginBottom:"50px" }}>
                        <Card.Img variant="top" src={arr.media.localdata} />
                        <Card.Body>
                            <Card.Title>{arr.title}</Card.Title>
                            
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