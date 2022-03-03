import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllDistributionList = () => {
    const [distribution, setDistribution] = useState([]);
    useEffect(() => {
        fetch(`https://immense-caverns-71755.herokuapp.com/distributions`)
            .then(res => res.json())
            .then(data => {
                setDistribution(data)


            });
    }, [])
    return (
        <div>
            <h2>DistributionList</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Distribution ID</th>
                        <th>Student ID</th>
                        <th>Date</th>
                        <th>Food List</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {distribution?.map((f, index) => <tr key={f._id}>
                        <td>{index}</td>
                        <td>{f.id}</td>
                        <td>{f.studentId}</td>
                        <td>{f.date}</td>
                        <td>{f.foodItem}</td>
                        <td>Morning: {f.status.morning} <br />
                            After Noon: {f.status.afterNoo}<br />
                            Night: {f.status.night}
                        </td>

                    </tr>

                    )}

                </tbody>
            </Table>
        </div>
    );
};

export default AllDistributionList;