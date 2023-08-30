import {useForm} from 'react-hook-form'

export default function Form({onSubmit}){

    const {handleSubmit, register, formState: { errors }} = useForm()
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')}placeholder='Enter Name'/>
            <input {...register('number')}placeholder='Enter Number'/>
            <button type='submit'>Submit</button>
        </form>
    )
}