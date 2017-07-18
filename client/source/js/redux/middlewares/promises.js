const middleware = store => next => action => {
    if (action.type !== 'PROMISE') {
        return next(action);
    }


    const [startAction, successAction, failureAction] = action.actions;
    store.dispatch({
        type: startAction,
        payload: {loading: true}
    });


        
        return action.promise(action.data)
        .then(data => {

            return store.dispatch({
                type: successAction,
                dataFront : action.data,
                data: data
            })

            error => store.dispatch({
                type: failureAction,
                error: error
            })
        });

}

export default middleware;