import React from 'react'

function Comment({ data }) {
  return (
    <div>
      <b>{data.creator.username}: </b>{data.text.split('\n').map((x, index) => <span key={index}>{x}<br /></span>)}
    </div>
  )
}

export default Comment
