import React from 'react'
import { Form,Dropdown,DropdownButton,Button } from 'react-bootstrap';
import '../css/List.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
// import {useState} from 'react';

function list() {
    // const [isActive, setIsActive]= useState(false)
  return (
      <div className='sky'>
    <div className='dye'>
        <Form>
    <Form.Group className="mb-3" controlId="formBasicSearch">
      <Form.Control className='searchInput' type="search" placeholder="Search for job" />
      {/* <div className="searchIcon">
            <SearchIcon /></div> */}
    </Form.Group> 
  </Form>
  </div>
  <div className='drop'>
      <div className= 'dro' style={{width: '33%',float: 'right'}}>
  <DropdownButton id="dropdown-button-dark-example1" title="Function" >
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
</div>
<div className= 'dro1' style={{width: '33%',float: 'left'}}>
<DropdownButton id="dropdown-basic-button" title="Department">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
</div>
<div className= 'dro2' style={{width: '33%',margin:'0 auto'}}>
<DropdownButton id="dropdown-basic-button" title="Location">
  <Dropdown.Item href="#/action-1">ABC,Pune</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Verna, Goa</Dropdown.Item>
  <Dropdown.Item href="#/action-3">White Field, Banglore</Dropdown.Item>
</DropdownButton>
</div>

<div className="headerContainer">
    <br></br>
            <h2 style={{borderBottom:'5px solid blue',marginRight:'80%'}}>Quality Assurance</h2><br></br>
            <h4>Quality Assurance Analyst</h4>
            <p>Quality Assurance Verna Goa<span style={{background:'gray',paddingLeft:'23px', alignItems: 'center'}}>Full Time</span></p>
            <p style={{float:'right'}}><Button variant="outline-primary">Apply</Button>{' '}  <Link to="/Details"><Button variant="light">View</Button> </Link></p>
            <br>
            </br>
            <h4>Quality Assurance Lead</h4>
            <p>Quality Assurance Verna Goa<span  style={{background:'gray',paddingLeft:'23px',justifyContent:'center'}}>Full Time</span></p>
            <p style={{float:'right',}}><Button variant="outline-primary">Apply</Button>{' '} <Link to="/Details"><Button variant="light">View</Button></Link> </p>
            <br></br><br></br>
            <h2 style={{borderBottom:'5px solid blue',marginRight:'80%'}}>Project Managment</h2><br></br>
            <h4>Business Analyst</h4>
            <p>Project Management Verna Goa<span style={{background:'gray',paddingLeft:'23px', alignItems: 'center'}}>Full Time</span></p>
            <p style={{float:'right',marginBottom:'20px'}}><Button variant="outline-primary">Apply</Button>{' '}  <Link to="/Details"><Button variant="light">View</Button></Link> </p>
  </div>
   </div>
   </div>

  )
}


export default list