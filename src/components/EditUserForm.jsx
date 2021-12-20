import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {
    console.log(props.currentUser)
    let format_props =   {
        name:props.currentUser.name,
        email:props.currentUser.email,
        password:props.currentUser.password,
        number:props.currentUser.phone.number,
        citycode:props.currentUser.phone.citycode,
        contrycode:props.currentUser.phone.contrycode
    
    };
    //console.log(format_props)
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm({
        defaultValues: format_props
    });

    setValue('name', props.currentUser.name);
    setValue('email', props.currentUser.email);
    setValue('password', props.currentUser.password);
    setValue('number', props.currentUser.phone.number);
    setValue('citycode', props.currentUser.phone.citycode);
    setValue('contrycode', props.currentUser.phone.contrycode);


    const onSubmit = (data) => {
    //console.log(data);
    let arr_data = {
        id:props.currentUser.id,
        name:data.name,
        email:data.email,
        password:data.password,
        phone:{
            number:data.number,
            citycode:data.number,
            contrycode:data.contrycode
        }
    }
    props.updateUser(props.currentUser.id, arr_data)

    reset();
}

    
return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" name='name' {...register("name", { required: true}
        ) } />
        {errors.name && <div>Campo requerido*</div> }
    
      <label>E-mail</label>
      <input type="text" name='email' {...register("email", { required: true}
        ) } />
        {errors.email && <div>Campo requerido*</div> }
      <label>Password</label>
      <input type="password" name='password' {...register("password", { required: true}
        ) } />
        {errors.password && <div>Campo requerido*</div> }
      <label>Phone Number</label>
      <input type="text" name="number" {...register("number", { required: true}
        ) } />
        {errors.number && <div>Campo requerido*</div> }
      <label>City Code</label>
      <input type="text" name="citycode" {...register("citycode", { required: true}
        ) } />
        {errors.citycode && <div>Campo requerido*</div> }
      <label>Contry Code</label>
      <input type="text" name="contrycode" {...register("contrycode", { required: true}
        ) } />
        {errors.contrycode && <div>Campo requerido*</div> }
      <button>Edit user</button>
    </form>
  )
}

export default EditUserForm