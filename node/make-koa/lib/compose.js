

function compose() {
    return function(context) {
        return dispatch(0);
        function dispatch(i) {
            const fn = middleware[i]
            fn(context,() => {
               return dispatch( i + 1 )
            })
        }
    }
}

module.exports = compose