import React from "react"
import { Link } from "react-router-dom";
let click = 1;
function Navbar(props) {

    function loginAndlogout() {
        props.userloginFunction(click++)
        console.log("click", props.userlogin)
    }


    return (
        <>

            <nav id="navbar"                                                            
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    backgroundColor: "green"
                }}>

                <ul
                    style={{                                                            
                        display: "flex",
                        columnGap: "20px",
                        marginRight: "20px"
                    }}>

                    {props.userlogin % 2 === 0 ?           
                        <>
                            <li
                                style={{
                                    border: "5px solid rgb(0, 1, 82)",
                                    padding: "10px",
                                    listStyle: "none",
                                    backgroundColor: "rgb(122, 1, 1)",
                                    fontSize: "30px"
                                }}>
                                <img src="codecrew.png" style={{
                                    position: "absolute",
                                    right: "216px",
                                    top: "32px",
                                    height: "18px",
                                    width: "18px"
                                }}>
                                </img>
                                <Link style={{
                                    color: "hsl(60, 74%, 50%)"
                                }} to="/">Hr me</Link>
                            </li>

                            <li onClick={loginAndlogout} style={{
                                border: "5px solid rgb(0, 1, 82)",
                                padding: "10px",
                                color: "hsl(60, 74%, 50%)",
                                listStyle: "none",
                                backgroundColor: "rgb(122, 1, 1)",
                                fontSize: "30px"
                            }}>
                                Sign in
                            </li>
                        </>
                        :
                        <>
                            <li style={{
                                border: "5px solid rgb(0, 1, 82)",
                                padding: "10px",
                                color: "hsl(60, 74%, 50%)",
                                listStyle: "none",
                                backgroundColor: "rgb(122, 1, 1)",
                                fontSize: "30px"
                            }}>
                                <img src="codecrew.png"
                                    style={{
                                        position: "absolute",
                                        right: "338px",
                                        top: "32px",
                                        height: "18px",
                                        width: "18px"
                                    }}>
                                </img>
                                <Link style={{
                                    color: "hsl(60, 74%, 50%)"
                                }} to="/">Hr me</Link>
                            </li>

                            <li
                                style={{
                                    border: "5px solid rgb(0, 1, 82)",
                                    padding: "10px",
                                    color: "hsl(60, 74%, 50%)",
                                    listStyle: "none",
                                    backgroundColor: "rgb(122, 1, 1)",
                                    fontSize: "30px",
                                    listStyle: "none"
                                }}>
                                <Link
                                    style={{
                                        color: "hsl(60, 74%, 50%)"
                                    }}
                                    to="/posts"> Posts</Link>

                            </li>



                            <li
                                onClick={loginAndlogout}
                                style={{
                                    border: "5px solid rgb(0, 1, 82)",
                                    padding: "10px",
                                    color: "hsl(60, 74%, 50%)",
                                    listStyle: "none",
                                    backgroundColor: "rgb(122, 1, 1)",
                                    fontSize: "30px"
                                }}>
                                Logout
                            </li>
                        </>
                    }
                </ul>
            </nav>

        </>
    )
}
export default Navbar