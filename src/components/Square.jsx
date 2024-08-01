export default function Square({children, number, onAnimation}){
    return (
        <div
            onClick={(event) => onAnimation(event)}
            className={`square${number}`}
        >
            {children}
        </div>
    )
}