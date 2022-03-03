import React from 'react';
import { useForm } from 'react-hook-form';


const AddFood = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://immense-caverns-71755.herokuapp.com/food', {
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
    };
    return (
        <div className="col-md-12 text-center">
            <h3>Add Food</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='foodId' {...register("foodId", { required: true })} /> <br />
                {errors.foodId && <span>This field is required</span>}<br />
                <input placeholder='name'  {...register("name", { required: true })} /> <br />
                {errors.name && <span>This field is required</span>}<br />
                <input placeholder='Price'  {...register("price", { required: true })} /> <br />


                {errors.price && <span>This field is required</span>} <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddFood;