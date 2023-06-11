
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "./App.css"
import axios from "axios"

function Post() {
    const [show, setShow] = useState(false);
    const [Title, TitleFunction] = useState("")
    const [content, contentFunction] = useState("")
    const [Upload, uploadFunction] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function TitleF(event) {
        TitleFunction(event.target.value)
        console.log("Title", event.target.value)
    }

    function contentF(event) {
        contentFunction(event.target.value)
        console.log("content", event.target.value)
    }


    function uploadF(event) {
        uploadFunction(event.target.value)
        console.log("Upload", event.target.value)
    }


    async function SubmitPost() {
        try {
            let DataSent = await axios.post("http:localhost3001/blog",
                {
                    Title: Title,
                    content: content,
                    Upload: Upload
                })
                console.log(DataSent)
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div

            className="posts"
            style={{
                overflow: "hidden",
                backgroundColor: "rgb(122, 1, 1)",
                height: "100%"
            }}>
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
                    <h1></h1><h2 style={{ fontSize: "40px" }} >Create A Blog</h2>
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
                        onChange={contentF}
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Form.Group controlId="formFile" className="mb-3">
                    <br></br>
                    <h3 style={{ textAlign: "center" }} >Upload image or video</h3>
                    <br></br>
                    <Form.Control onChange={uploadF} type="file" required />
                </Form.Group>
                <button onClick={SubmitPost} style={{ width: "100%", AlignSelf: "center", border: "none" }}> <span style={{ border: "3px solid black", padding: "3px" }}>Submit Blog</span></button>
            </Offcanvas>
        </div>
    );
}

export default Post;
