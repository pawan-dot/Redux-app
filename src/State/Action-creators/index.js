export const deposit = (amount) => {
    return (despatch) => {
        despatch({
            type: "deposit",
            payload: amount

        })

    }

}
export const withdrow = (amount) => {
    return (despatch) => {
        despatch({
            type: "withdrow",
            payload: amount


        })

    }

}


