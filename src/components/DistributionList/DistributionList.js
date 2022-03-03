import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const DistributionList = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [morning, setMorning] = useState('Not Served');
    const [noon, setNoon] = useState('Not Served');
    const [night, setNight] = useState('Not Served');
    console.log(morning, noon, night)
    const onSubmit = data => {
        data.status = { morning: morning, afterNoo: noon, night: night };
        fetch('https://immense-caverns-71755.herokuapp.com/distribution', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    reset();
                    alert('Added Successfully')
                }
                console.log(data)

            })
        console.log(data);
        reset()
    };
    return (
        <div className="col-md-12 text-center">
            <h3>Add Distribution List</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='ID'  {...register("id", { required: true })} /> <br />
                {errors.id && <span>This field is required</span>}<br />

                <input placeholder='studentId' {...register("studentId", { required: true })} /> <br />
                {errors.studentId && <span>This field is required</span>}<br />

                <input type='date' placeholder='date'  {...register("date", { required: true })} /> <br />
                {errors.date && <span>This field is required</span>}<br />

                <h4>Status</h4>
                <p>Morning</p>
                <select placeholder='Status' onChange={e => setMorning(e.target.value)} >
                    <option value="Not Served">Not Served</option>
                    <option value="Already Served">Already Served</option>

                </select>
                <p>Afternoon</p>
                <select placeholder='Status' onChange={e => setNoon(e.target.value)} >
                    <option value="Not Served">Not Served</option>
                    <option value="Already Served">Already Served</option>

                </select>
                <p>Night</p>
                <select placeholder='Status' onChange={e => setNight(e.target.value)} >
                    <option value="Not Served">Not Served</option>
                    <option value="Already Served">Already Served</option>

                </select> <br />



                <textarea placeholder='Food Item '  {...register("foodItem", { required: true })} /> <br />
                {errors.foodItem && <span>This field is required</span>}<br />






                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DistributionList;