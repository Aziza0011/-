let son1 = prompt('birinchi son')
let amal = prompt('1) * \n 2) / \n 3) + \n 4) -')
let son2 = prompt('ikkinchi son')

let natija;

if (amal == 1 ){
    natija = son1 * son2
}else if (amal == 2 ){
    natija = son1 / son2
}else if (amal == 3 ){
    natija = son1 + son2
}else if (amal == 4 ){
    natija = son1 - son2
}else{
    alert('xatolik')
}
alert(natija)