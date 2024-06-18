import React from 'react';
import "./Card.css"

const Card = ({data}) => {
    return (
        <>
        <div class="container ">
        <div class="row  row-cols-1  row-cols-xl-3 row-cols-md-3 g-3 ">
            {data.map((element,index)=>{
                return(
                <>
                <div key={index}>
                <div class="col col-xm-12">
                <div class="card">
                  <div class="card-body">
                    <h6 class="card-title text-center  text-muted">{element.title}</h6>
                    <h2 class="card-title text-center">{element.price}</h2>
                    <hr />
                    <p class="card-title"><i class="fa-solid fa-check"></i> {element.user}</p>
                    <p class="card-title"><i class="fa-solid fa-check"></i> {element.storage}</p>
                    <p class="card-title"><i class={element.public.icon}></i> {element.public.title}</p>
                    <p class="card-title"><i class={element.community.icon}></i> {element.community.title}</p>
                    <p class={element.private.class}><i class={element.private.icon}></i> {element.private.title}</p>
                    <p class={element.support.class}><i class={element.support.icon}></i> {element.support.title}</p>
                    <p class={element.domain.class}><i class={element.domain.icon}></i> {element.domain.title}</p>
                    <p class={element.report.class}><i class={element.report.icon}></i> {element.report.title}</p>
                  </div>
                  <button class="btn btn-primary  btn-block  item-center">Button</button>
                  
                    
                </div>
            </div>
                </div>
                </>
                )
            })}
            
        </div>
        </div>
        </>
    );
};

export default Card;