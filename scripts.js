window.addEventListener('load', ()=>{

    let cleaner = document.querySelector('.clean')
    let searchInput = document.querySelector('.search input')
    let searchButton = document.querySelector('.search .loup')

    function searchCleaner(){
        searchInput.value = ''
    }
    function searchInputFocus(){
        searchInput.focus()
    }
    function getInput(){
        return searchInput.value

    }
    function goToSearchInGoogle(s){
        if (s){
            let searchRequest = encodeURI(s)
            let url = `https://www.google.ru/search?q=${searchRequest}`
            window.location.href = url
        }
    }
    function checkKey(e){
        if (e.key === "Enter"){
            let input = getInput()
            goToSearchInGoogle(input)
        }
    }

    cleaner.onclick = ()=>{searchCleaner(); searchInputFocus()}

    searchInput.onkeyup = (e)=>{checkKey(e)}
    searchButton.onclick = ()=>{goToSearchInGoogle(getInput())}

})
