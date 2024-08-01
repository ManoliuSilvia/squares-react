import Square from "./components/Square";

const animations = {
    square1 : {
        transition1: 'translateX(calc(100vw - 20rem))',
        transition2: 'translateX(0)'
    },
    square2: {
        transition1: 'translate(calc(-100vw + 20rem), calc(100vh - 20rem))',
        transition2: 'translate(0,0)'
    },
    square3: {
        transition1: `translateX(calc(100vw - 20rem))`,
        transition2: `translate(calc(100vw - 20rem), calc(-100vh + 20rem))`,
        transition3: `translate(0,0)`
    },
    square4: {
        transition1: `translate(calc((-100vw + 20rem)/2), calc((-100vh + 20rem)/2))`,
        transition2: `translate(calc((-100vw + 20rem)/2), calc((-100vh + 20rem)/2)) scale(6)`,
        transition3: `translate(0,0) scale(1)`
    }
}

function App() {
    function handleAnimation(event){
        const square = event.target;
        const squareName = event.target.className;
        if( squareName === 'square1' || squareName === 'square2'){
            square.style.transform = animations[squareName].transition1
                square.addEventListener('transitionend', () => {
                    square.style.transform = animations[squareName].transition2
                })
        }
        if(squareName === 'square3' || squareName === 'square4'){
            square.style.transform = animations[squareName].transition1
            square.addEventListener('transitionend', () => {
                square.style.transform = animations[squareName].transition2
                square.addEventListener('transitionend', () => {
                    square.style.transform = animations[squareName].transition3
                })
            })
        }
    }

    return (
        <div className='squares'>
            <Square number={1} onAnimation={handleAnimation}>1st square</Square>
            <Square number={2} onAnimation={handleAnimation}>2nd square</Square>
            <Square number={3} onAnimation={handleAnimation}>3rd square</Square>
            <Square number={4} onAnimation={handleAnimation}>4th square</Square>
        </div>
    );
}

export default App;
