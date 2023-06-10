import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

function CarouselF(props) {
  return (
    <>
      <Carousel
        style={{
          border: "1px solid black",
          backgroundColor: "rgb(154, 1, 1)",
          height: "500px",
          display: "flex",
          justifyContent: "center"
        }}>

        {console.log(props.BlogData)}

        {props.BlogData.map(arr => {
          return (

            <Carousel.Item
              style={{
                textAlign: "center"
              }}>

              <img
                style={{
                  height: "414px",
                  width: "30%",
                  float: "left",
                  marginLeft: "235px",
                  marginTop: "25px",
                  border: "10px solid hsl(60, 74%, 50%)"
                }}
                
                src={arr.src}

              />


              <div
                style={{
                  float: "right",
                  marginRight: "220px",
                  marginTop: "25px"
                }}>

                <h3
                  style={{
                    height: "fit-content",
                    padding: "2px",
                    backgroundColor: "green",
                    fontSize: "35px",
                    width: "400px",
                    color: "rgb(0, 1, 82)",
                    border: "10px solid hsl(60, 74%, 50%)"
                  }}>
                  {arr.title}

                </h3>

                <br></br>

                <p
                  id="ptag"
                  style={{
                    height: "fit-content",
                    overflowY: arr.description.length > 274 ? "scroll" : "hidden",
                    overflowWrap: "break-word",
                    maxHeight: "274px",
                    padding: "10px",
                    backgroundColor: "green",
                    fontSize: "25px",
                    width: "400px",
                    color: "rgb(0, 1, 82)",
                    border: "10px solid hsl(60, 74%, 50%)"
                  }}>
                  {arr.description}
                </p>
                
              </div>

            </Carousel.Item>
          )
        })
        }
      </Carousel>
    </>
  );
}

export default CarouselF;