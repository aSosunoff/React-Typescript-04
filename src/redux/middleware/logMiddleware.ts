import { Middleware } from 'redux'
import { RootState } from '../reducers'

export const logMiddleware: Middleware<{}, RootState> = () =>
    (next) => (action) => {
        console.log(action.type);
        return next(action);

    }