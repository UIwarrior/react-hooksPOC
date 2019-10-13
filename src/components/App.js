import React, { useState } from 'react';
import {Button, Alert} from 'react-bootstrap';
import ResourceList from './resourceList';

const App = () => {
  
    const [ resource, setResource ] = useState('todos');

    return (
      <div>
        <Button variant="primary" onClick={()=> setResource('posts')}> Posts</Button>
        <Button variant="success" onClick={()=> setResource('todos')}> Todos</Button>
        <Alert variant='secondary'>{resource}</Alert>
        <ResourceList resource = { resource}/>
      </div>
    )
  }

export default App;
