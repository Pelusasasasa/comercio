import React from 'react'

export const MovListItem = ({_id, producto, cantidad}) => {
  return (
    <tr>
      <td>{_id}</td>
      <td>{producto}</td>
      <td>{cantidad}</td>
    </tr>
  )
}
