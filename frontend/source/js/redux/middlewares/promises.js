const middleware = store => next => action => {
    if (action.type !== 'PROMISE' && action.type !== 'PROMISE_DATA') {
        return next(action);
    }


    const [startAction, successAction, failureAction] = action.actions;
    store.dispatch({
        type: startAction,
        payload: 'loading'
    });

    if (action.type == 'PROMISE_DATA') {
        return action.promise(action.data).then((data) => store.dispatch({
            type: successAction,
            data: data
        }), (error) => store.dispatch({
            type: failureAction,
            error: error
        }));
    } else if(action.type == 'PROMISE' ){
        return action.promise().then((data) => store.dispatch({
            type: successAction,
            data: data
        }), (error) => store.dispatch({
            type: failureAction,
            error: error
        }));
    }
}

export default middleware;