import React from 'react';
import { useForm } from 'react-hook-form';

const AddStudent = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://immense-caverns-71755.herokuapp.com/student', {
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
        <div className="col-md-4 text-center">
            <h3>Add Student</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='studentId' {...register("studentId", { required: true })} /> <br />
                {errors.studentId && <span>This field is required</span>}<br />
                <input placeholder='Student Name'  {...register("name", { required: true })} /> <br />
                {errors.name && <span>This field is required</span>}<br />
                <input placeholder='Roll'  {...register("roll", { required: true })} /> <br />
                {errors.roll && <span>This field is required</span>}<br />
                <input type='number' placeholder='age'  {...register("age", { required: true })} /> <br />
                {errors.age && <span>This field is required</span>}<br />
                <input placeholder='Class'  {...register("class", { required: true })} /> <br />
                {errors.class && <span>This field is required</span>}<br />
                <input placeholder='Hall'  {...register("hall", { required: true })} /> <br />
                {errors.hall && <span>This field is required</span>}<br />


                <select placeholder='Status' {...register("status")}>
                    <option value="active">Active</option>
                    <option value="inActive">InActive</option>

                </select>
                {errors.status && <span>This field is required</span>}<br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddStudent;