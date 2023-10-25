const container = document.getElementById('container')
const btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    const daire = document.createElement('div')
    const goz1 =document.createElement('div')
    const goz2 =document.createElement('div')


    daire.classList.add('daireninclasadi')
    goz1.classList.add('goz1clasadi')
    goz2.classList.add('goz2clasadi')


    daire.append(goz1)
    daire.append(goz2)
    container.append(daire)
})