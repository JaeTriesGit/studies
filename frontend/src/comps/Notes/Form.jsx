import {useForm} from 'react-hook-form'

export default function Form({onSubmit}){

    const {handleSubmit, register, formState: { errors }} = useForm()
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('content')}placeholder='Enter Note'/>
            <button type='submit'>Submit</button>
        </form>
    )
}