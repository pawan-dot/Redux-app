import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../State/index';

function Shop() {
    const dispatch = useDispatch();
    //const action = bindActionCreators(ActionCreators, dispatch)
    //or destructured
    const { deposit, withdrow } = bindActionCreators(ActionCreators, dispatch)
    const amount = useSelector(state => state.amount)

    return (
        <div>
            <h2 className="my-5">Shell/Buy Pencil Bunddle Rs:30</h2>
            {/* <button className="btn-primary mx-2" onClick={() => { dispatch(ActionCreators.withdrow(30)) }}>-</button>
            add to cart
            <button className="btn-primary mx-2" onClick={() => { dispatch(ActionCreators.deposit(30)) }}>+</button> */}

            {/* //from action */}
            {/* <button className="btn-primary mx-2" onClick={() => { action.withdrow(30) }}>-</button>
            add to cart: ({amount})
            <button className="btn-primary mx-2" onClick={() => { action.deposit(30) }}>+</button> */}

            {/* from destructured */}
            <button className="btn-primary mx-2" onClick={() => { withdrow(30) }}>-</button>
            add to cart: ({amount})
            <button className="btn-primary mx-2" onClick={() => { deposit(30) }}>+</button>

        </div >
    )
}

export default Shop
