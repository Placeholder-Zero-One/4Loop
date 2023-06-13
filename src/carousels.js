import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"


function CarouselF(props) {

  return (
    <div
    id="frontPage"
      style={{
        backgroundColor: "rgb(154, 1, 1)",
        display:"flex",
        justifyContent: "center",
        height:"100%",

       
      }}
    >

        <style>
          {`
            ::-webkit-scrollbar {
                display: none;
              } 
          `}
        </style>

        
      <Carousel
        style={{
          width: "1200px",
          border: "1px solid black",
          backgroundColor: "rgb(154, 1, 1)",
          height: "500px",
        }}
      >
        {console.log(props.BlogData)}
        {props.BlogData.map((arr) => {
          return (
            <Carousel.Item
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly", // Horizontally center the items
                  border:"10px solid black",
                  height:"100%"
                }}
              >
                <div >
                  <img
                    style={{
                      objectFit: "contain",
                      height: "400px",
                      width: "90%",
                      // marginTop: "40px"
                      // border: "10px solid hsl(60, 74%, 50%)",
                    }}
                    src={arr.src}
                    alt="Carousel"
                  />
                </div>
                <div
                  style={{
                    flex: "0 0 50%",
                    marginTop: "40px",
                    marginRight:"-100px"
                    

                  }}
                >
                  <h3
                    style={{
                      textAlign: "center",
                      width: "400px",
                      height: "fit-content",
                      padding: "2px",
                      backgroundColor: "green",
                      fontSize: "35px",
                      color: "rgb(0, 1, 82)",
                      border: "10px solid hsl(60, 74%, 50%)",
                    }}
                  >
                    {arr.title}
                  </h3>

                  <p
                    id="ptag"
                    style={{
                      width: "400px",
                      height: "fit-content",
                      overflowY: arr.description.length > 274 ? "scroll" : "hidden",
                      overflowWrap: "break-word",
                      maxHeight: "274px",
                      padding: "10px",
                      backgroundColor: "green",
                      fontSize: "25px",
                      color: "rgb(0, 1, 82)",
                      border: "10px solid hsl(60, 74%, 50%)",
                    }}
                  >
                    {arr.description}
                  </p>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselF;
