import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from '../state/reducer/index';
export {}

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;