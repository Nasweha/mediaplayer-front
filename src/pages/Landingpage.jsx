import React from 'react'
import { Col, Row } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landingpage() {
  return (
    <>
    <div className='row p-5 my-5'>
      <div className="col-md-6">
        <h3 >Welcome to <span className='text-warning'>Media player</span>

        </h3>
        <p style={{textAlign:'justify'}} className='mt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quam quae sapiente ut rerum explicabo aut numquam suscipit nemo, ducimus consectetur necessitatibus aliquid praesentium, cum cupiditate fugiat aliquam voluptate reprehenderit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti consectetur consequatur qui distinctio numquam aut incidunt dicta pariatur nobis corrupti nostrum omnis animi, cum harum saepe veniam perferendis error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quod aliquam voluptatem eos soluta eius velit provident expedita omnis aliquid amet obcaecati cumque atque, quam delectus repellat! Inventore, corrupti eligendi!
        </p>
        <Link to={'/home'}><button className='btn btn-warning mt-4'>Get Started</button></Link>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-5 p-3 d-flex justify-content-center align-items-center ">
        <img src="https://i.gifer.com/origin/4d/4df0a6453ab542634821b4a8fd6b8fb0_w200.webp" alt=" img"  className='rounded w-75'/>
      </div>




    </div>

 <div className='mb-5 mt-5 '>
 <h4 className='my-5 text-center'>Features</h4>
      <Row className='mb-5  '>
       
        <Col md={1}></Col>
        <Col md={3} className='p-5 p-md-0'>
        <Card style={{ width: '100%' }} className='p-4'>
        <Card.Img variant="top" src="https://i.gifer.com/origin/f6/f642eb0a3f80a087901b25a09c638a33_w200.webp"  style={{width:"100%", height:'300px'}}/>
        <Card.Body>
          <Card.Title>Managing </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card>
        </Col>
        <Col md={4} className=' d-flex justify-content-center'>
        <Card style={{ width: '80%' }} className='p-4'>
        <Card.Img variant="top" src="https://media.tenor.com/rupiK4yHUEUAAAAM/musical-notes.gif"  style={{width:"100%", height:'300px'}} />
        <Card.Body>
          <Card.Title>Categorising video</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card>
        </Col>
        <Col md={3} className='p-5 p-md-0'>
        <Card style={{ width: '100%' }} className='p-4'>
        <Card.Img variant="top" src="https://i.gifer.com/origin/45/4569ec4d4805355819ea8f1dd47d0b2b_w200.webp"  style={{width:"100%", height:'300px'}}/>
        <Card.Body>
          <Card.Title>Watch History</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         
        </Card.Body>
      </Card>
        </Col>
        <Col md={1}></Col>
      </Row>
  
 </div>
    <div className=' row p-5 mt-md-5'>
      <div className="col-md-1"></div>
      <div className="col-md-10 border p-5 rounded border-2">
     <Row>
      <Col md={6} className='p-3'>
        <h4 className='text-warning mb-5'> Simple Fast and poweful</h4>
        <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam architecto animi ratione dolor sequi nulla ex qui, magnam quidem nostrum ea omnis voluptate saepe, deserunt aliquam perferendis, nesciunt ducimus? Dolor.</p>
        <p className='mt-3' style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam architecto animi ratione dolor sequi nulla ex qui, magnam quidem nostrum ea omnis voluptate saepe, deserunt aliquam perferendis, nesciunt ducimus? Dolor.</p>
        <p className='mt-3' style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam architecto animi ratione dolor sequi nulla ex qui, magnam quidem nostrum ea omnis voluptate saepe, deserunt aliquam perferendis, nesciunt ducimus? Dolor.</p>

      </Col >
      <Col md={6} className='p-3'>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HrnrqYxYrbk" title="ANIMAL: SATRANGA(Song) Ranbir Kapoor,Rashmika|Sandeep V|Arijit,Shreyas P,Siddharth-Garima |Bhushan K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </Col>
     </Row>
      </div>
      <div className="col-md-1"></div>

    </div>
    </>
  )
}

export default Landingpage