const h1 = document.querySelector('h1')
const happyBtn = document.querySelector('#happy')
const angryBtn = document.querySelector('#angry')
const nervousBtn = document.querySelector('#nervous')
const tiredBtn = document.querySelector('#tired')

happyBtn.addEventListener('click', (e) => {
    store.dispatch({type: 'HAPPY', payload: "(•‿•)"})
    const state = store.getState()
    h1.innerText = state.mood
})

angryBtn.addEventListener('click', (e) => {
    store.dispatch({type: 'ANGRY', payload: "(◣_◢)"})
    const state = store.getState()
    h1.innerText = state.mood
})

nervousBtn.addEventListener('click', (e) => {
    store.dispatch({type: 'NERVOUS', payload: "ゞ◎Д◎ヾ"})
    const state = store.getState()
    h1.innerText = state.mood
})

tiredBtn.addEventListener('click', (e) => {
    store.dispatch({type: 'TIRED', payload: "（；￣д￣）"})
    const state = store.getState()
    h1.innerText = state.mood
})