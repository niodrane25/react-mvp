import React from 'react'

const RestaurantList = () => {
  return (
    <div className='list-group'>
        <table className="table table-hover table-dark">
            <thead>
                <tr className="bg-orimary">
                    <th scope='col'>Restaurant</th>
                    <th scope='col'>Location</th>
                    <th scope='col'>Price Range</th>
                    <th scope='col'>Ratings</th>
                    <th scope='col'>Edit</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <body>
                <tr>
                    <td>Mcdonalds</td>
                    <td>New York</td>
                    <td>$$</td>
                    <td>Ratings</td>
                    <td><button className="btn btn warning">Update</button></td>
                    <td><button className="btn btn warning">Delete</button></td>
                </tr>
            </body>
        </table>
    </div>
  )
}

export default RestaurantList