

function redirectPages() {
    const root = document.getElementById('root')

    const Router = {
        '#login': {component: '', path: '#login'}
    }
    const route = Router[window.location.hash] || Router['#404']
    root.innerHTML = null
    window.history.pushState(null, null, route.path)
}

window.addEventListener('load', () =>{
    redirectPages()
    window.addEventListener('hashchange', redirectPages)
})