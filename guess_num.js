function addDiv_outputlist(parent, outputnum) {
    var newdiv = document.createElement("div");
    //newdiv.setAttribute("class", "outputlist_div");
    parent.appendChild(newdiv);
    newdiv.style.height = "15%";
    newdiv.style.width = "95%";
    newdiv.style.margin = "0 auto"
    for (let index = 0; index < 10; index++) {
        addDiv_in_outputlist(newdiv, outputnum[index])
    }
}

function addDiv_in_outputlist(parent, outputchar) {
    var newindiv = document.createElement("div");
    parent.appendChild(newindiv);
    newindiv.textContent = outputchar;
    newindiv.style.height = "100%";
    newindiv.style.width = "10%";
    newindiv.style.margin = "0 auto"
    newindiv.style.float = "left"
    newindiv.style.fontSize = "108px"
    newindiv.style.textAlign = "center"
}

var correct_ans = ['0', '3', '1', '5']
var now_ans = []

function now_ans_show() {
    
    if(now_ans.length==0){
        console.log(now_ans)
        for (let i = 0; i <outnum.length; i++) {
            outnum[i].textContent = "";
        }
    }
    for (let i = 0; i < now_ans.length; i++) {
        outnum[i].textContent = now_ans[i];
    }
}

function compare() {
    let compare_result = [0, 0];
    for (let i = 0; i < correct_ans.length; i++) {
        for (let j = 0; j < now_ans.length; j++) {
            if (correct_ans[i] == now_ans[j] && i == j) {
                compare_result[0] += 1;
            } else if (correct_ans[i] == now_ans[j]) {
                compare_result[1] += 1
            }
        }
    }
    return compare_result
}

function click_submit() {
    if (now_ans.length = 4) {
        var compare_result = compare()

        let outputlist_parement = [];
        outputlist_parement=outputlist_parement.concat(now_ans);
        
        outputlist_parement.push( ' ', ' ',compare_result[0],'A',compare_result[1],"B")
        if(compare_result[0]==4){
            alert("BINGO!!!");
        }
        addDiv_outputlist(outputlist,outputlist_parement);
    }

    now_ans=[]
    now_ans_show()
}
function click_delete() {

}
function click_num(e) {
    if (now_ans.length < 4) {
        if (now_ans.includes(this.textContent) == false)
            now_ans.push(this.textContent)
    } else {
        console.log("over")
    }
    now_ans_show()

    //console.log(now_ans)
}

var outputlist = document.getElementById("outputlist");
var outnum = document.getElementsByClassName("outnum");
var num_but = document.getElementsByClassName("input_click");
for (i = 0; i < num_but.length; i++) {
    num_but[i].addEventListener("click", click_num, false);
}
document.getElementById("submit_but").addEventListener("click", click_submit, false);
document.getElementById("delete_but").addEventListener("click", click_submit, false);