import {useForm} from 'react-hook-form'

export default function Form({onSubmit}){

    const {handleSubmit, register, formState: { errors }} = useForm()
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')}placeholder='Enter Name'/>
            <input {...register('username')}placeholder='Enter Username'/>
            <input type='password' {...register('password')}placeholder='Enter Password'/>
            <button type='submit'>Submit</button>
        </form>
    )
}