const container = document.querySelector('.canvas')
const boringColor = document.querySelector('#boring')
const funColor = document.querySelector('#fun')
const reset = document.querySelector("#reset-btn")
const gridSizeSlider = document.querySelector('#grid-size-slider')
const gridSizeValue1 = document.querySelector('#grid-size-value-1')
const gridSizeValue2 = document.querySelector('#grid-size-value-2')
let isAltPressed = false
let color = false

document.addEventListener('keydown', (e) => {
    if (e.key === 'Shift') {
        isAltPressed = true;
        console.log(isAltPressed)
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Shift') {
        isAltPressed = false;
    }
});

reset.addEventListener('click', () => {
    const defaultSize = 16;
    gridSizeSlider.value = defaultSize;
    gridSizeValue1.textContent = defaultSize;
    gridSizeValue2.textContent = defaultSize;
    color = false;
    boringColor.style.borderColor = "#E3D16CFF";
    funColor.style.borderColor = "#ff4081";
    createGridSquare(defaultSize, color);
})

boringColor.addEventListener('click', () => {
    color = false
    boringColor.style.borderColor = "#E3D16CFF"
    funColor.style.borderColor = "#ff4081"
    createGridSquare(parseInt(gridSizeSlider.value), color);
})

funColor.addEventListener('click', () => {
    color = true
    boringColor.style.borderColor = "#ff4081"
    funColor.style.borderColor = "#E3D16CFF"
    createGridSquare(parseInt(gridSizeSlider.value), color);
})

gridSizeSlider.addEventListener('input', () => {
    const gridSize = parseInt(gridSizeSlider.value)
    gridSizeValue1.textContent = gridSize
    gridSizeValue2.textContent = gridSize
    createGridSquare(gridSize)
})



function createGridSquare(size, useColor) {
    container.innerHTML = ''
    const squareSize = 640 / size

    for (let i = 0; i < size * size; i ++) {
        const gridSquare = document.createElement('div')
        gridSquare.classList.add('square')
        gridSquare.style.width = `${squareSize}px`
        gridSquare.style.height = `${squareSize}px`

        gridSquare.addEventListener('mouseenter', () => {

            if (isAltPressed) {
                gridSquare.style.background = '#1F2937'
            } else {
                if (useColor) {
                    const r = Math.floor(Math.random() * 256)
                    const g = Math.floor(Math.random() * 256)
                    const b = Math.floor(Math.random() * 256)
                    gridSquare.style.background = `rgb(${r}, ${g}, ${b})`

                } else {
                    gridSquare.style.background = 'Black'
                }
            }
            gridSquare.classList.add('pop-effect')
            setTimeout(() => {
                gridSquare.classList.remove('pop-effect')
            }, 200)
        })

        container.appendChild(gridSquare)
    }
}

createGridSquare(parseInt(gridSizeSlider.value));