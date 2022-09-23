import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PERSON_GET_ALL } from "../../actions/actionTypes";
import { getAllPosts, personRemove } from "../../actions/personAction";

export const PeopleList = () => {
    const posts = useSelector(store => store.postState.items);
    const isLoading = useSelector(store => store.postState.isLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("postState")).length > 0) {
            getAllPosts(dispatch);
        }
        else {
            //do nothing
        }
    }, []);
    const deletePerson = (person) => {
        dispatch(personRemove(person));
    }
    return (
        <>
            <button onClick={() => {
                getAllPosts(dispatch);

            }}>load</button>
            {isLoading ? <p>data is loading ....</p> :
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => {
                            return (
                                <>
                                    <tr>
                                        <td>
                                            {post.id}
                                        </td>
                                        <td>
                                            {post.title}
                                        </td>
                                        <td><button onClick={() => { deletePerson(post) }}>delete</button></td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>}
        </>
    );
}