const productos = [
    {
        id: '1',
        name: 'Head Prestige',
        category:'head',
        description:'Head Prestige 315Gr',
        imagen:'/img/head3.webp',
        price: 199,
        stock:10,
    },
    {
        id: '2',
        name: 'Head Radical',
        category:'head',
        description:'Head Radical 2022',
        imagen:'/img/head5.webp',
        price: 149,
        stock: 15,
    },
    {
        id: '3',
        name: 'Head Radical Pro',
        category:'head',
        description:'Head Radical Pro Lite',
        imagen:'/img/head6.webp',
        price: 203,
        stock:5,
    },
    {
        id: '4',
        name: 'Head Speed Pro',
        category:'head',
        description:'Head Speed Pro MP',
        imagen:'/img/head2.webp',
        price: 240,
        stock: 7,
    },
    {
        id: '5',
        name: 'Wilson Blade 98',
        category:'Wilson',
        description:'Wilson Blade 98 300Gr',
        imagen:'/img/w5.jpg',
        price: 196,
        stock:11,
    },
    {
        id: '6',
        name: 'Wilson Clash',
        category:'wilson',
        description:'Wilson Clash 305Gr',
        imagen:'/img/w7.jpg',
        price: 197,
        stock: 10,
    },
    {
        id: '7',
        name: 'Wilson Blade 100',
        category:'wilson',
        description:'Wilson Blade 100 285Gr',
        imagen:'/img/w3.jpg',
        price: 186,
        stock: 8,
    },
    {
        id: '8',
        name: 'Wilson Pro Staff',
        category:'wilson',
        description:'Wilson Pro Staff',
        imagen:'/img/w9.webp',
        price: 250,
        stock: 5,
    },
    {
        id: '9',
        name: 'Babolat Pure Aero',
        category:'babolat',
        description:'Babolat Pure Aero 315Gr',
        imagen:'/img/img1.jpg',
        price: 198,
        stock:10,
    },
    {
        id: '10',
        name: 'Babolat Boost Rafa',
        category:'babolat',
        description:'Babolat Boost Rafa MP',
        imagen:'/img/img3.jpg',
        price: 280,
        stock: 15,
    },
    {
        id: '11',
        name: 'Babolat Pure Drive',
        category:'babolat',
        description:'Babolat Pure Drive 265gr',
        imagen: '/img/img2.jpg',
        price: 205,
        stock: 10,
    },

    {
        id: '12',
        name: 'Babolat Pure Drive',
        category:'babolat',
        description:'Babolat Pure Drive 265gr',
        imagen: '/img/img4.png',
        price: 145,
        stock: 8,
    },
]

export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
    let error = false 
    setTimeout(()=>{
        if (error){
            reject('No hay data')
        }else{
            resolve(productos)
        }
    },1500)
  })
}

export const getOneProduct = (id) =>{
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout (()=>{
        if(error){
            reject('No existe prod')
        }else{
            let OneProduct = productos.find((prod)=> prod.id === id)
            resolve(OneProduct)
        }
    },1500)
    })
}
