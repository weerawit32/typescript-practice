import axios from 'axios';
import { ActionType} from '../action-types';
import { Action } from '../actions';
import { Dispatch } from 'redux';
import npmApi from '../../api/npmApi';

 export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type:  ActionType.SEARCH_REPOSITORIES
        });

        try { 
            // const { data } = await npmApi.get('https://registry.npmjs.org/-/v1/search', {
            //     params: {
            //         text: term
            //     }
            // });

            const { data } = await npmApi.get(`/${term}`);

            const names = data.objects.map((result: any) => result.package.name);

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })

        } catch (err: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message
            })
        }
    }
}