import {useForm} from 'react-hook-form'

function FormDemo() {

    const {register,handleSubmit,formState:{errors}}=useForm();

    function handleFormSubmit(obj){
        console.log(obj)

    }

    console.log('errors object is',errors)

  return (
    <div>
        <h1 className='display-2 text-info text-center '>Form Demo </h1>
        {/* Form */}
        <form className='w-50 mx-auto mt-4' onSubmit={handleSubmit(handleFormSubmit)}>
            {/* username */}
            <div className='mb-3'>
                <label className='form-label fs-5' htmlFor='username'>Username</label>
                <input type='text'  {...register('username',{required:true,minLength:4})}  id='username' className='form-control ' />
                {/* validation error message of username */}
                {errors.username?.type==='required' && <p className='text-warning'>Username is required</p>}
                {errors.username?.type==='minLength' && <p className='text-warning'>Min length should be 4</p>}
            </div>
            {/* email */}
            <div className='mb-3'>
                <label className='form-label fs-5' htmlFor='email'>Email</label>
                <input type='email'   {...register('email')} id='email' className='form-control ' />
            </div>
            {/* skills */}
            <div className='mb-3'>
                <label>Select your skills</label>

                <div className='form-check'>
                    <input className='form-check-input ' type='checkbox' id='' {...register('css')} />
                    <label htmlFor='css' className='form-check-label'>CSS</label> 
                </div>

                <div className='form-check'>
                    <input className='form-check-input' type='checkbox' id='' {...register('react')} />
                    <label htmlFor='react' className='form-check-label'>React</label> 
                </div>

                <div className='form-check'>
                    <input className='form-check-input ' type='checkbox' id='' {...register('js')} />
                    <label htmlFor='js' className='form-check-label'>JavaScript</label> 
                </div>

            </div>  
            {/* Radio  */}
            <label>Choose Gender</label>
            <div className='mb-3'>
                <div className='form-radio'>
                    <input className='form-check-input' type='radio' id='male' {...register('male')} />
                    <label htmlFor='male' className='form-check-label'>Male</label>
                </div>
                <div className='form-radio'>
                    <input className='form-check-input' type='radio' id='female' {...register('female')} />
                    <label htmlFor='female' className='form-check-label'>Female</label>
                </div>
            </div>

            {/* select state */}
            <div className='mb-3'>
                <label htmlFor='state' className='form-label'>Select state</label>
                <select {...register('state')} id='state' className='from-select'>
                    <option value='Telangana'>Telangana</option>
                    <option value='Tamil Nadu'>Tamil Nadu</option>
                    <option value='Kerala'>Kerala</option>
                </select>
            </div>

            {/* feedback */}
            <div className='mb-3'>
                <label htmlFor='feedback' className='form-label'>Feedback</label>
                <textarea {...register('feedback')} id='feedback' className='form-control'></textarea>
            </div>

            {/* submit button */}
            <button type='submit' className="btn btn-info">Signup</button>
        </form>
    </div>
  )
}

export default FormDemo