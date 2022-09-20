const Button = ({ onClick, text, delta }) => {

    const handleClick = (e) => onClick(e.target.dataset.delta)

    return <button data-delta={delta} onClick={handleClick}>{text}</button>
}

export default Button