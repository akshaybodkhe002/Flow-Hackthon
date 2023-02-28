import React, { useEffect, useState } from "react";
import './drivers.css';
import { Button } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


export default function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () =>{
        let result = await fetch("http://localhost:3000/alldrivers");
        result = await result.json();
        setProducts(result);
    }
    console.warn("products", products);


    return (
        <Card>
              <CardHeader color="primary">
                <h4 >Driver List</h4>
                
              </CardHeader>
              <CardBody>
        <table className="Drivers-list">
          <thead className="Drivers-list-head">
            <tr className="Drivers-list-main">
              <th>Index</th>
              <th>Name</th>
         
              <th>Contact</th>
              <th>Car number</th>
              {/* <th>Number of seats</th>  */}
              <th>Book</th>
            </tr>

          </thead>
          <tbody>
            {
                products.map((item, index) =>
                    <tr className="Drivers-list-main">
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
           
                        <td>{item.contact}</td>
                        <td>{item.carNo}</td>
                        {/* <td>{item.noOfSeats}</td> */}
                        <td> <Button
                  variant="contained"
                  color="primary"                
                  onClick=""
                  href="/admin/wallet"
                >
                  Book me
              </Button> </td>
                    </tr>

                )
            }
          </tbody>
        </table>
              </CardBody>
            </Card>



    )
}