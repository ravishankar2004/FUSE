import React,{useState} from "react";
import './App.css'
import axios from 'axios'

function Snews(){
    const[data, setData]=useState([])
    const newss =()=>{
        axios.get("https://newsapi.org/v2/everything?q=stock%20market&apiKey=a6b3705fd4984784bd206361ba548d25")
        .then((response)=>{
            console.log(response);
            setData(response.data.articles
            )
        })
    }
    newss();

    return (
      <div>
      {/* <div className="container d-flex justify-content-center" >
       <button onClick={newss} className="my-3 mb-5 bg-dark text-light rounded p-3 px-5">Get News</button>
      </div> */}


      <div className="container mt-5 " aria-label="Page navigation example">
           <div className="row pagination">

           
               {
                 data.map((value)=>{
                       return(
                          <div className="col-12  col-md-6  col-lg-4 d-flex mt-0 page-item"  >
                             <div className="card align-center m-3 " style={{width: "100%",height: "600px"}}>
                                <img src={value.urlToImage} className="card-img-top " alt="..."  />
                                <div className="card-body   ">
                                  <h5 className="card-title">{value.title}</h5>
                                  <p className="card-text">{value.description}</p>
                                  <a href={value.url} className="btn btn-dark align-bottom">Read More </a>
                                  <p><i>Source: {value.source.name}</i></p>
                                </div>
                              </div>
                          </div>
                       );

                       
                 })
               }
        
           </div>
           </div>
       
      </div>



    );
}

export default Snews;