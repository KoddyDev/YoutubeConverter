function changeLang() {
    
    let lingua = document.getElementById("select")
    fetch('/api/lang', {
        method: 'GET'
    }).then(res => {
        var titulolang = document.getElementById("titulolang")
        let valor = res.body

            if(lingua.value === "pt-br") {
                    titulolang.innerText = valor[0].title
            }
            if(lingua.value === "en") {
                    titulolang.innerText = valor[0].title
                }
    })
    
}