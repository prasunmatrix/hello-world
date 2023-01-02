import React from 'react'
import Columns from './Columns'

function Table() {
  return (
    <table align='center' border={1}>
      <tbody>
        <tr>
          <Columns/>
        </tr>
      </tbody>   
    </table>
  )
}

export default Table
