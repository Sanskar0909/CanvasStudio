import { useDispatch, useSelector } from 'react-redux'

// Thin wrappers over react-redux's hooks. In a TS project these carry the
// RootState/AppDispatch types; in JS they buy you a single import site and a
// place to add store-specific behaviour later. Use these, not the raw hooks.
export const useAppDispatch = useDispatch
export const useAppSelector = useSelector
