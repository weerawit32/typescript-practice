import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../state";
import { useActions } from "../hooks/useAction";
// import { useSelector } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const {searchRepositories} = useActions();
    const { data, error, loading } = useTypeSelector((state) => state.repositories)
    // const dispatch = useDispatch();
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
            <div>
                {error && error}
                {loading && 'Loading ....'}
                {!error && !loading && data.map(result => (<div key={result}>{result}</div>))}
            </div>
        </div>
    )
  }

    

export default RepositoriesList