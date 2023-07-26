window.addEventListener('DOMContentLoaded', (event) =>{
    getVisionCount();
})

const functoinApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functoinApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
