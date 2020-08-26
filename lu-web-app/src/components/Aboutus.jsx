import React from 'react';
import '../App.css'
import aboutus2 from '../Aboutus.jpg'; 
import { Container } from 'react-bootstrap';

const Aboutus = () => {
    return(
        <Container >
                <div class='row'>
                    <div class="text-center card-body col-sm w-50">
                        <h5 class="card-title ">About Us</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-light">Go somewhere</a>
                    </div>
                    <div class='card-body col-sm'>    
                        <img src={aboutus2} id='aboutusimg' className="aboutusimg" alt="Responsive" width= '550px' height= '1000px' margin-Left= '560px' />
                    </div>
                </div>
        </Container>
        )
}

export default Aboutus;