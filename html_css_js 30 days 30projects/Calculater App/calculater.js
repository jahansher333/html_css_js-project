let result = document.getElementById("result")


function apendtodiplay(input){
    result.value += input
}

function cleardisplay(){
    result.value = ""
}

function calulate() {
    try {
        if (!result) return;
        if (result.value.trim() === "") return;
        result.value = eval(result.value)
         setTimeout(() => {
            result.value = ""
            result.style.color = ""
        }, 100000)
    } catch (error) {
        if (!result) return;
        result.value = "Invalid Argument"
        result.style.color = "red"
        setTimeout(() => {
            result.value = ""
            result.style.color = ""
        }, 500)
    }
}