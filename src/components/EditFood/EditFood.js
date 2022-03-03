import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const EditFood = () => {
    const [food, setFood] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://immense-caverns-71755.herokuapp.com/foods/${id}`)
            .then(res => res.json())
            .then(data => {
                setFood(data)


            });
    }, [id])
    console.log(id)
    const onSubmit = data => {
        fetch(`https://immense-caverns-71755.herokuapp.com/foods/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    reset();
                    alert('Update Successfully')
                    reset()
                }
                console.log(data)

            })

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={food.foodId} placeholder='id' {...register("id", { required: true })} /> <br />
                {errors.foodId && <span>This field is required</span>}<br />
                <input defaultValue={food.name} placeholder='name'  {...register("name", { required: true })} /> <br />
                {errors.name && <span>This field is required</span>}<br />
                <input defaultValue={food.price} placeholder='Price'  {...register("price", { required: true })} /> <br />


                {errors.price && <span>This field is required</span>} <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EditFood;