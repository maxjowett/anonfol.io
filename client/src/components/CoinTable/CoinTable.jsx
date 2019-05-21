import React from 'react';

import './CoinTable.css';

const CoinTable = () => {
  return (
    <div className="coin-table">
        <table width="100%">
          <thead>
          <tr>
            <th>NAME</th>
            <th>CLASS CODE</th>
            <th>GITHUB</th>
            <th>GRADUATION</th>
            <th>EMAIL</th>
          </tr>
          </thead>
          <tbody>
            <tr>
            <td>Yo</td>
            <td>Yo</td>
            <td>Yo</td>
            <td>Yfsdfsdfs fsdf sdf sdf sdf so</td>
            </tr>
            {/* { this.state.students !== null && this.renderStudents() } */}
          </tbody>
        </table>
    </div>
  );
}

export default CoinTable;