import React from "react";

interface ContadorValorProps {
    contador: number
}

const ContadorValor = (props: ContadorValorProps) => {
    return (
        <p>{props.contador}</p>
    )
}

export default ContadorValor;