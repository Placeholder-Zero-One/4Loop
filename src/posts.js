
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "./App.css"
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import CardComponent from "./card"

function Post(props) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("")
    const [caption, setCaption] = useState("")
    const [index, setIndex] = useState(0);
    const [photoBlob, setPhotoBlob] = useState('')
    const [mediaPostImage, setMediaPostImage] = useState({ myFile: "" });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function TitleF(event) {
        setTitle(event.target.value)
        console.log("Title", title)
    }

    function captionF(event) {
        setCaption(event.target.value)
        console.log("content", caption)
    }


    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        const formData = new FormData(base64)
        setMediaPostImage({ ...mediaPostImage, myFile: base64 });
        console.log(formData)
    }




    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };



    // const upload = await axios.post("http://localhost:3001/blogs", { headers: { data: formData } });
    // console.log('Photo uploaded:', upload.data.url);
    // Handle the generated photo URL as needed (e.g., display it on the page)
    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
                setPhotoBlob(fileReader.result)
            };
            fileReader.onerror = (error) => {
                reject(error)
        
            }
        })
    }
     
    //  var file = document.querySelector('#files > input[type="file"]').files[0];
    //  getBase64(file); // prints the base64 string

    async function SubmitPost(event) {
        try {
          
            const DataSent = await axios.post("http://localhost:3001/blogs", { title: title, caption: caption, likes:0,...mediaPostImage });
            console.log(DataSent.data);
        } catch (error) {
            console.error(error);
        }
    }
    // async function getdata(event) {
    //     let response = await axios.get('http://localhost:3001/test')
    //     console.log(response.data)
    //  }
    

    return (
        <div
            className="posts"
            style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                backgroundColor: "rgb(122, 1, 1)",
                height: "100%"
            }}
        >


            <Button
                style={{
                    float: "left",
                    color: "hsl(60, 74%, 50%)",
                    backgroundColor: "rgb(122, 1, 1)"
                }}
                variant="primary" onClick={handleShow}>
                Create Blog
            </Button>

            <Offcanvas
                show={show} onHide={handleClose}>
                <Offcanvas.Header
                    closeButton>
                    <h1> </h1>
                    <h2
                        style={{
                            fontSize: "40px"
                        }}
                    >
                        Create A Blog
                    </h2>
                </Offcanvas.Header>
                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Blog Title"
                    className="mb-3"
                >
                    <Form.Control
                        onChange={TitleF}
                        as="textarea"
                        placeholder="Leave a comment here"
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Blog Content"
                >
                    <Form.Control
                        onChange={captionF}
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{
                            height: '100px'
                        }}
                    />
                </FloatingLabel>
                <Form.Group
                    controlId="formFile"
                    className="mb-3"
                >
                    <br></br>
                    <h3
                        style={{
                            textAlign: "center"
                        }}
                    >
                        Upload image or video
                    </h3>
                    <br></br>
                    <Form.Control
                        onChange={handleFileUpload}
                        type="file"
                        required
                    />
                </Form.Group>
                <button
                    onClick={() => { SubmitPost() }}
                    style={{
                        width: "100%",
                        AlignSelf: "center",
                        border: "none"
                    }}
                > <span
                    style={{
                        border: "3px solid black",
                        padding: "3px"
                    }}
                        
                    >
                        
                        Submit Blog
                    </span>
                </button>
                    <img src={photoBlob} alt='PREVIEW'/>
            </Offcanvas>
            <div
                style={{
                    display: "flex"
                }}>
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    style={{
                        border: "1px solid black",
                        height: "400px",
                        width: "1400px"
                    }}
                    >
                    <Carousel.Item>
                        <CardComponent/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                            />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                            />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
}

export default Post;

