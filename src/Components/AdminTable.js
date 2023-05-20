import React from 'react'

const AdminTable = () => {
  return (
    <div>
      <h1>Customer Table</h1>
      <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>investment Amount</th>
                <th>Age Of investment</th>
                <th>Age Of Interest(in months)</th>
                <th>Interest Pending</th>
                <th>Total Returns</th>
            </tr>

        </thead>
        <tbody>
            <td>1</td>
            <td>vinod</td>
        </tbody>
      </table>
    </div>
  )
}

export default AdminTable
