import React, {Component} from 'react'

class Score extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>X:</td>
            <td>0</td>
          </tr>
          <tr>
            <td>O:</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Score
