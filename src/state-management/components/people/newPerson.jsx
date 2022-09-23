import { useRef } from "react";
import { useDispatch } from "react-redux";
import { personAdd } from "../../actions/personAction";

export const NewPerson = () => {
    const titleRef = useRef();
    const idRef = useRef();
    const dispatch = useDispatch();
    const addPerson = () => {
        let item = {
            id: idRef.current.value,
            title: titleRef.current.value,
        };
        dispatch(personAdd(item));
    }
    return (
        <>
            <div>
                <p>id</p>
                <input name="id" type={"number"} ref={idRef} />
                <p>title</p>
                <input name="titleRef" ref={titleRef} />
            </div>
            <button onClick={addPerson}>Add</button>
        </>
    );
}