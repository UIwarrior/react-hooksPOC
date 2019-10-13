import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const useResources = (resource) => {

   const [resources, setResources ] = useState([]);
    
    //another approach 
    useEffect(() => {
        (async resource => {
            const response = await Axios.get(
                `https://jsonplaceholder.typicode.com/${resource}`  
              );
        setResources(response.data);    
        })(resource);
     }, 
     [resource]
    );
    
  return resources;
}

const ResourceList = ({resource}) => {

     const resources = useResources(resource);

 /*    const [resources, setResources ] = useState([]);
   
    const fetchResource = async (resource) => {
        const response = await Axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`  
        );
       setResources(response.data);     
    } */

    //simple approach
    
 /*    useEffect( () => {
       fetchResource(resource) 
    }, [resource]) */
 

 //another approach 
/*     useEffect(() => {
        (async resource => {
            const response = await Axios.get(
                `https://jsonplaceholder.typicode.com/${resource}`  
              );
        setResources(response.data);    
        })(resource);
     }, 
     [resource]
    ); */
  

    return <div>{resources.map(record => (
      <li key={record.id}>{record.title}</li>  
    ))}</div>
}

export default ResourceList;