import React from 'react'

export default function SearchImages(props) {
  return (
    <div>
        {props.images.map(image =>(
            <ul>
                <li>
                  <img src={image.images.original.url}/>
                </li>
            </ul>
        ))}
    </div>
  )
}
