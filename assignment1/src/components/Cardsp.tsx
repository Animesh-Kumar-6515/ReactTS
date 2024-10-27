import { stringify } from "querystring";
import React, {FC, useState} from "react"

type Props = {
    tittle:string;
    publisher:string;
    author:string;
    price:number;
    prodid:number;
}

const prop:Props={
    tittle:"Angle and demons",
    publisher:"penguin Random House",
    author:"Dan Brown",
    price:409,
    prodid:2012   
}

const prop2:Props={
    tittle:"Norse",
    publisher:"Bloomsburry",
    author:"Niel",
    price:300,
    prodid:2019   
}
const prop3:Props={
    tittle:"Norse",
    publisher:"Bloomsburry",
    author:"Niel",
    price:300,
    prodid:2019   
}
const prop4:Props={
    tittle:"Norse",
    publisher:"Bloomsburry",
    author:"Niel",
    price:300,
    prodid:2019   
}

const books:Props[]=[
    {...prop},
    {...prop2},
    {...prop3},
    {...prop4}
]

const Cardsp:FC = () => {
    // let colour=""
    // const [msg,setmsg]=useState<string>("")
    const validate=(price:number):string=>{
        if(price<=400){
            // setmsg("best Seller")
            return "red";
            
        }
        // setmsg("")
        return "green";
    }
  return (
    <>
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:
        'center'
    }}>


        
        {books.map((book) => (
            // let msg="";
                // const msg = book.price <= 400 ? "Best Seller" : "";
                <div key={book.prodid} style={{ 
                    border: '1px solid #ccc',
                    padding: '16px', 
                    margin: '8px', 
                    width:'50%', 
                    maxWidth:"30%",
                    flex:'1 1 30%',
                    boxShadow:"10px 10px 10px grey"
                    }}>
                    <h2 style={{textAlign:"center"}}>{book.tittle}</h2>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Publisher:</strong> {book.publisher}</p>
                    <p style={{color:validate(book.price)}}><strong>Price:</strong> ${book.price}</p>
                    {/* {book.price<=400 && <p>{msg}</p>}         */}
                </div>
                
        ))}

    </div>  
            
            
            
    </>
  )
}

export default Cardsp;