import React from "react";
import './Raffle.css'

import { useState } from "react";


const Raffle = (props) => {


    const generateNumbers = (qtde) => {

        if(qtde > 12){
            alert('Máximo 12 números')
            setQuantity(+6)
        }else{
            const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const newNumber = getNewNumber(1, 60, nums)
                return [...nums, newNumber]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros
        }
    }

    const getNewNumber = (max, min, array) => {

        const randomNumber = parseInt(Math.random() * (max + 1 - min) + min)
        return array.includes(randomNumber) ?
            getNewNumber(max, min, array) :
            randomNumber

    }


    const [quantity, setQuantity] = useState(props.qtde || 6)
    const initialNumber = generateNumbers(quantity)
    const [numbers, setNumbers] = useState(initialNumber)

    return (
        <div className="Raffle-container">
            <h2>Mega</h2>
            <h3>{numbers.join('-')}</h3>
            <div>
                <label >Quantidade de números:</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={e => {
                        setQuantity(+e.target.value)
                    }}
                    min={1}
                    max={12}
                />
            </div>
            <button onClick={_ => setNumbers(generateNumbers(quantity))} >Gerar números</button>
        </div>
    )
}

export default Raffle