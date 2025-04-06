import React from 'react';
// import PropTypes from "prop-types";
const userData = [
  {
    name:"Virat Kohli",
    city:"chennai",
    description:"cricketer",
    skills:[ 'Catching','Fast reflexes','Foot work','Timing and placement'],
    profile: "virat kohli.jpeg",

  },
  {
    name:"Virat Kohli",
    city:"chennai",
    description:"cricketer",
    skills:[ 'Catching','Fast reflexes','Foot work','Timing and placement'],
    profile: "virat kohli.jpeg",

  },
  {
    name:"Virat Kohli",
    city:"chennai",
    description:"cricketer",
    skills:[ 'Catching','Fast reflexes','Foot work','Timing and placement'],
    profile: "virat kohli.jpeg",

  },
]


function User(props) {
  return (
    <div className="card-container">
        <span className={props.online? 'pro online ' : 'pro offline'}>{props.online? 'ONLINE' : 'OFFLINE'} </span>
        <img src={props.profile} className ='img' alt ='user' />
        <h3> {props.name}</h3>
        <h3> {props.city}</h3>
        <p>{props.description}</p>
        <div className='buttons'>
        <button className='primary'>Message</button>
        <button className='primary outline'>Following</button>
        </div>
        <div className='skills'>
          <h4>Skills</h4>
          <ul>
           {props.skills.map((skills,index) => (<li key={index}> {skills}</li>))}
          </ul>
        </div>
    </div>
  );
};

export const UserCard = () => {
  return (
    <>
    {
      userData.map((user,index)=>(
        <User key={index} 
        name={user.name} 
        city={user.city}
        description={user.description}
        online={user.online}
        profile={user.profile}
        skills={user.skills}
         />
      ))
    }
    </>
   
    
  ); 
};



// <User name='Virat Kohli' city='chennai' description='crickter'skills={[
//   'Catching','Fast reflexes','Foot work','Timing and placement'
// ]}   online={false} profile='virat kohli.jpeg'/>


