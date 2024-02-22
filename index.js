let numbers = [4, 5, 6, 7, 8, 9, 10]
function elevados() {
    return numbers.map(num => Math.pow(num, num))
}
elevados(numbers)

let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']

let result2 = foodList.map((comida, i) => {
    let pais = ['Italia', 'Japón', 'Valencia']

    if (i <= 2) {
        return `Como soy de ${pais[i]}, amo comer ${comida}`;
    } else {
        return `Aunque no como carne, el ${comida} es sabroso`
    }
})

const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];


let result3 = staff.map(cosas => cosas.name + " es " + cosas.role + " y le gusta " + cosas.hobbies[0] + " y " + cosas.hobbies[1])


const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result4 = numbers2.filter((impar) => impar%2 === 1)

const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];

let condicion = foodList2.filter((comida, i) => comida.isVeggie === true)
let result5 = condicion.map((item,i) => {
    if (i == 0) {
        return `Que rico ${item.name} me voy a comer!`
    } else {
        return `Que rica ${item.name} me voy a comer!`
    }
})

const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];
  
  let filtrado = inventory.filter(objeto => objeto.price > 300)

  let result6 = filtrado.map((mayor300,i) => {
      if (i == 0) {
          return mayor300.name
      } else {
          return 'Viaje a Cancún'
      }
  })


const numeros3 = [39, 2, 4, 25, 62]

let result7 = numeros3.reduce((acc, item) => acc * item)


const sentenceElements = [
    'Me',
    'llamo',
    "Alber-Angel",
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];

let result8 = sentenceElements.reduce((acc, item) => acc + " " + item)

const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];

  result9 = books.reduce((accum,item)=>{ accum + item
    if (books.category == "code"){

    }
})

/*
let code = books.filter(soloCode => soloCode.category === 'code')

let precios = code.map(valorCode => valorCode.price)

let result9 = precios.reduce((acc, item) => acc + item)
*/
    
