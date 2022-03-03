import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const AllStudents = () => {
    const [students, setStudents] = useState([]);
    const [update, setUpdate] = useState(false);
    const [status, setStatus] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [studentsPerPage, setStudentsPerPage] = useState(6);
    const [totalStudents, setTotalStudents] = useState(0);
    const [isDelete, setIsDelete] = useState(false);
    const pageNumbers = [];
    console.log(status)
    useEffect(() => {
        fetch(`https://immense-caverns-71755.herokuapp.com/students?page=${currentPage}&&size=${studentsPerPage}`)
            .then(res => res.json())
            .then(data => {

                setStudents(data.students);
                setTotalStudents(data.count)

            });
    }, [currentPage, update, isDelete]);
    const handleStatus = (id) => {
        fetch('https://immense-caverns-71755.herokuapp.com/students', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                status: status
            })
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    setUpdate(!update)
                    alert('Update Successfully')
                }
                console.log(result)

            })
    }
    for (let i = 1; i <= Math.ceil((totalStudents) / studentsPerPage); i++) {
        pageNumbers.push(i);
    };
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete');
        if (proceed) {


            fetch(`https://immense-caverns-71755.herokuapp.com/students/${id}`, {
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
    return (
        <div>
            <h2>All Students</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Age</th>
                        <th>Class</th>
                        <th>Hall</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((f, index) => <tr key={f._id}>
                        <td>{index}</td>
                        <td>{f.studentId}</td>
                        <td>{f.name}</td>
                        <td>{f.roll}</td>
                        <td>{f.age}</td>
                        <td>{f.class}</td>
                        <td>{f.hall}</td>
                        <td> {f.status}

                            <select placeholder='Status' onChange={(e) => setStatus(e.target.value)}>
                                <option value="active">Active</option>
                                <option value="inActive">InActive</option>

                            </select>
                            <button onClick={() => handleStatus(f._id)}>Submit</button>


                        </td>
                        <td>   <button onClick={() => handleDelete(f._id)}>Delete</button></td>
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

export default AllStudents;