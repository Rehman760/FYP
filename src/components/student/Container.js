import React from 'react'
import { useParams } from 'react-router-dom'
import { getBody } from './StudentNavbarData';

function Container() {
  const {catId} = useParams();
  const {body} = getBody(catId);
  
  return (
    <div>{body}</div>
  )
}
export default Container