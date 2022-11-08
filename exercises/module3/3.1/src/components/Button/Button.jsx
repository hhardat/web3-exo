const Button = ({ onClick, text }) => {

    const handleClick = () => onClick()

    return <button onClick={handleClick}>{text}</button>
}

export default Button