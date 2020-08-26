import React from 'react';
import '../App.css'
import aboutus2 from '../Aboutus.jpg'; 
import { Container } from 'react-bootstrap';

const Aboutus = () => {
    return(
        <Container >

                <div class="card mb-3 h-100" >
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={aboutus2} class="card-img" />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
                </div>


        </Container>
        )
}

export default Aboutus;

// alt="Responsive" width= '550px' height= '1000px' margin-Left= '560px'