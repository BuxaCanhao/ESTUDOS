const Component = () => {
    const num1 = 5
    const num2 = 3
    const val = num1+num2

    const soma = () => {
        console.log(val)
    }

    return (
        <div>
            <button type="button" onClick={soma}>clique aqui!</button>
        </div>
    )
}

export default Component