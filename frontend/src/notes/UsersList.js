import React from 'react';

import UserItem from './UserItem'
import './UsersList.css';

const UsersList = props => {

/*props: bundles up all the attributes when passed to another component.
  So, in User where you use <UserList />, you'll make up attributes inside it,
  like: 

  <UserList attribute1={arrayOfItemObjects} attribute2={arrayOfBelongingObjects} />

  and arrayOfItemObjects in file User might look something like:
  
  const arrayOfItemObjects = [
    {id: '1', name: 'tool'}
    {id: '2', name: 'instrument'}  ]  

  and props bundles those attributes up when you pass in "props" to the UserList component
  by saying props.attribute1

  example, User.js and UserList.js:

  User 
    = () => {
    const array = [ a, b, c ]
    return (
        < UserList prop1={array}  prop2={array2}  prop3={array3} />
    )}

  UserList 
  UserList = props => {
    return ( 
        <ul>
         { props.prop1  .map  (  itemInProp1  => 
            {
             return (
                < li>
                    { itemInProp1 }
                </ li>
              )}
        </ul>
     )}

  map: to go through an array you need to loop through it using map in jsx as a js expression,
  map method can be used on any array, it takes in a function to apply to each element in the array,
  returning a new array with the transformed version
  so it recieves the existing element, let say item:  .map((item) => {})

  lets just say we have an object in file called


  return <ul>
           {props.attributeItems1
         <ul.


*/

  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>   
    )
  }

  return (
    <ul className="users-list">
      {props.items.map(user =>  
        <UserItem 
          key={user.id} 
          id={user.id} 
          image={user.image} 
          name={user.name} 
          placeCount={user.places} />   
      )}
  </ul>
  )
}

export default UsersList;