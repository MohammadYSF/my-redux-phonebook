import { useRef } from "react";
import { useDispatch } from "react-redux";
import { personAdd } from "../../actions/personAction";

export const NewPerson = () => {
    const nameRef = useRef();
    const phoneRef = useRef();
    const idRef = useRef();
    const dispatch = useDispatch();
    const addPerson = () => {
        let item = {
            id: idRef.current.value,
            name: nameRef.current.value,
            phone: phoneRef.current.value
        };
        console.log(item);
        dispatch(personAdd(item));
    }
    return (
        <>
            <div>
                <p>id</p>
                <input name="id" type={"number"} ref={idRef} />
                <p>name</p>
                <input name="name" ref={nameRef} />
                <p>phone</p>
                <input type="phone" ref={phoneRef} />
            </div>
            <button onClick={addPerson}>Add</button>
        </>
    );
}