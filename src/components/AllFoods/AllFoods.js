import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllFoods = () => {
    const [foods, setFoods] = useState([]);
    const [totalFoods, setTotalFoods] = useState(0);
    const [isDelete, setIsDelete] = useState(false);
    const pageNumbers = [];


    const [currentPage, setCurrentPage] = useState(0);
    const [foodsPerPage, setFoodssPerPage] = useState(6);
    console.log(currentPage)

    useEffect(() => {
        fetch(`https://immense-caverns-71755.herokuapp.com/foods?page=${currentPage}&&size=${foodsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data?.foods)
                setTotalFoods(data?.count)

            });
    }, [currentPage, isDelete, foodsPerPage])
    console.log(foods);
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete');
        if (proceed) {


            fetch(`https://immense-caverns-71755.herokuapp.com/foods/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        setIsDelete(!isDelete)
                        alert('Delete Successfully')
                    }
                    console.log(result)

                })
        }
    }

    for (let i = 1; i <= Math.ceil((totalFoods) / foodsPerPage); i++) {
        pageNumbers.push(i);
    };

    return (
        <div>
            <h2>All Foods</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {foods?.map((f, index) => <tr key={f._id}>
                        <td>{index}</td>
                        <td>{f.foodId}</td>
                        <td>{f.name}</td>
                        <td>{f.price}</td>
                        <td> <button onClick={() => handleDelete(f._id)}>Delete</button>
                            <Link to={`/editFood/${f._id}`}>Update</Link>
                        </td>
                    </tr>

                    )}

                </tbody>
            </Table>






            {/* pagination */}
            {
                pageNumbers.map(number => (

                    <button className='me-2 px-4' key={number} onClick={() => setCurrentPage(number - 1)}>{number}</button>
                ))
            }

        </div>
    );
};

export default AllFoods;