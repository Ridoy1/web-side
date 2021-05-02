import React from 'react';
import { useForm } from "react-hook-form";

const Message = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='w-100 text-center d-flex justify-content-center' style={{backgroundColor: '#F8F9FA'}}>
            <form className=' w-75 p-5' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='p-5 text-primary'>Contact form</h1>
                <div className='row '>
                    <div className="col-md-6 col-sm-3">
                        <input placeholder='enter your name' className='form-control m-2' {...register("name", { required: true })} />
                        <input placeholder='enter your email ' className='form-control m-2' {...register("email", { required: true })} />
                        <input placeholder=' subject' className='form-control m-2' {...register("subject", { required: true })} />
                    </div>
                    <div className="col-md-6 col-sm-3">
                        <textarea placeholder='describe what you want to know' style={{ height: '130px' }} className='form-control m-2' {...register("details", { required: true })} />
                    </div>

                </div>
                <input className='btn btn-primary m-3' type="submit" />
            </form>
        </div>
    );
};

export default Message;