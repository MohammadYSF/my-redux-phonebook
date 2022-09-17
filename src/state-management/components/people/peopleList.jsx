import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PERSON_GET_ALL } from "../../actions/actionTypes";
import { personGetAll, personRemove } from "../../actions/personAction";

export const PeopleList = () => {
    const people = useSelector(store => store.personState);
    console.log("p is : ", people);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(personGetAll());
    }, []);
    const deletePerson = (person) => {
        dispatch(personRemove(person));
    }
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person) => {
                        return (
                            <>
                                <tr>
                                    <td>
                                        {person.id}
                                    </td>
                                    <td>
                                        {person.name}
                                    </td>
                                    <td>{person.phone}</td>
                                    <td><button onClick={() => { deletePerson(person) }}>delete</button></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}