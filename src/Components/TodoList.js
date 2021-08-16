import React, { useState, useEffect } from 'react'
import { Button, ListItemAvatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Todo from './Todo';
import Error from './Error';

function TodoList() {
    const [item, setItem] = useState('')
    const [newitem, setNewItem] = useState([]);
    //const [error, setError] = useState()

   
    

    const itemEvent = (event) => {

     setItem(event.target.value);
        }
      
          
        const listOfItems = () => {

            if(item ===""){
                alert("INGRESA UNA TAREA");
            }else
            setNewItem((prevValue) => {
                return [...prevValue, (item)]
            });
    
            setItem('');
        };

 

    


    return (
        <div className='main-div'>
            <div className='center-div'>
                <br />
                <h1>What's the plan for Today?</h1>
                <br />
                <input type='text' value={item} placeholder='Add an item' onChange={itemEvent} />
                <Button className="newBtn" onClick={listOfItems}>
                    <AddIcon />
                </Button>
                <br />
                <br />
                <ol>

                    {newitem.map((val, index) => {
                        return <Todo key={index} text={val}/>;
                    })}



                </ol>
                <br />
            </div>
        </div>
    );
                }


export default TodoList
