import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../state";
import { useActions } from "../hooks/useAction";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    // const dispatch = useDispatch();
    const {searchRepositories} = useActions();
// delete 'Handler' to clear error at onSubmit
    const onSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        searchRepositories(term);
        // dispatch(actionCreators.searchRepositories(term));
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)}/>
                <button>Search</button>
            </form>
        </div>
    )
  }

    

export default RepositoriesList