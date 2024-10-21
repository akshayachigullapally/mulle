import { useForm } from 'react-hook-form';

function FormAss() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function handleFormSubmit(data) {
    console.log(data);
  }

  return (
    <div className='form-container bg-dark text-white m-5 p-5 '>
      <h1 className='text-info text-center'>Registration Form</h1>
      <form className='form w-50 mx-auto' onSubmit={handleSubmit(handleFormSubmit)}>
        <div className='row mb-3'>
          <div className='col'>
            <label htmlFor='firstname' className='form-label'>First Name</label>
            <input type='text' id='firstname' {...register('firstname', { required: true })} className='form-control' />
            {errors.firstname && <span className='text-danger'>First Name is required</span>}
          </div>
          <div className='col'>
            <label htmlFor='lastname' className='form-label'>Last Name</label>
            <input type='text' id='lastname' {...register('lastname', { required: true })} className='form-control' />
            {errors.lastname && <span className='text-danger'>Last Name is required</span>}
          </div>
        </div>
        
        <div className='row mb-3'>
          <div className='col'>
            <label htmlFor='birthday' className='form-label'>Birthday</label>
            <input type='date' id='birthday' {...register('birthday', { required: true })} className='form-control' />
            {errors.birthday && <span className='text-danger'>Birthday is required</span>}
          </div>
          <div className='col'>
            <label className='form-label'>Gender</label>
            <div className='row'>
                <div className='col'>
                    <div className='form-check'>
                        <input type='radio' id='male' {...register('gender', { required: true })} value='male' className='form-check-input' />
                        <label htmlFor='male' className='form-check-label'>Male</label>
                    </div>
                </div>
                <div className='col'>
                    <div className='form-check'>
                        <input type='radio' id='female' {...register('gender', { required: true })} value='female' className='form-check-input' />
                        <label htmlFor='female' className='form-check-label'>Female</label>
                    </div>
                </div>
            </div>
            {errors.gender && <span className='text-danger'>Gender is required</span>}
          </div>
        </div>
        
        <div className='row mb-3'>
          <div className='col'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' id='email' {...register('email', { required: true })} className='form-control' />
            {errors.email && <span className='text-danger'>Email is required</span>}
          </div>
          <div className='col'>
            <label htmlFor='phone' className='form-label'>Phone Number</label>
            <input type='text' id='phone' {...register('phone', { required: true, minLength: 10, maxLength: 10 })} className='form-control' />
            {errors.phone && <span className='text-danger'>Phone Number must be 10 digits</span>}
          </div>
        </div>
        
        <div className='mb-3'>
          <label htmlFor='subject' className='form-label'>Subject</label>
          <select id='subject' {...register('subject', { required: true })} className='form-select'>
            <option value=''>Choose option</option>
            <option value='Maths'>Maths</option>
            <option value='Physics'>Physics</option>
            <option value='Chemistry'>Chemistry</option>
            <option value='Biology'>Biology</option>
          </select>
          {errors.subject && <span className='text-danger'>Subject is required</span>}
        </div>
        
        <button type='submit' className='btn btn-info mt-3 '>Submit</button>
      </form>
    </div>
  );
}

export default FormAss;
