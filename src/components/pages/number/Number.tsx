import { FormEvent, useState } from 'react';
import pageClasses from '../Page.module.css';
import PhoneCircle from '../../inputs/phoneCircle/PhoneCircle';

const Number = () => {
    const [value, setValue] = useState<string>('')
    const submitForm = (event: FormEvent) => {
        event.preventDefault()
    }
    // const [oldObj, setObj] = useState<{variable: number}>({variable: 0})
    const getValueFromCircle = (e: number) =>{
        // console.log(e);
        if(e !== null && e !== undefined){
            setValue(value + e)

        }
    }
    // const smth = (obj: {})=> {

    // }
    // useEffect(() => {
    //     if(oldObj){
    //         let copy = {...oldObj}
    //         copy.variable += 1
    //         setObj(copy)
    //         smth(copy)
    //     }
  
    // },[value])
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