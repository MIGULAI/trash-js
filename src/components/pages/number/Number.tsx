import { FormEvent, useState } from 'react';
import pageClasses from '../Page.module.css';
import PhoneCircle from '../../inputs/phoneCircle/PhoneCircle';

const Number = () => {
    const [value, setValue] = useState<string>('')
    const submitForm = (event: FormEvent) => {
        event.preventDefault()
    }
    const getValueFromCircle = (e: number) =>{
        console.log(e);
        if(e !== null && e !== undefined){
            setValue(value + e)

        }
    }
    return (
        <div className={pageClasses.bigCentralPage}>
            <form onSubmit={submitForm}>
                <label htmlFor='phone'>Please enter your phone number</label>
                <input type="text" defaultValue={value} readOnly={true}/>
                <PhoneCircle id={'phone'} circleSize={300} callback={getValueFromCircle}/>
            </form>
        </div>
    )
}

export default Number