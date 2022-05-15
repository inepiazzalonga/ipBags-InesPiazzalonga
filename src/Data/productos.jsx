const products =[
  {
    id: "1",
    categoria: "Carteras",
    name: "Cartera Lily",
    price: "$ 6.500",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42593401_0_1_20211126120121.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Blanco"
  },
  {
    id: "2",
    categoria: "Carteras",
    name: "Cartera Spencer",
    price: "$ 5.400",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42621302_2_1_20220411182241.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Camel"
  },
  {
    id: "3",
    categoria: "Carteras",
    name: "Cartera City",
    price: "$ 6.500",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42628301_1_1_20220422120042.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Camel"
  },
  {
    id: "4",
    categoria: "Carteras",
    name: "Cartera Carrie",
    price: "$ 6.300",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42628501_0_1_20220329150622.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Camel"
  },
  {
    id: "5",
    categoria: "Carteras",
    name: "Cartera Chain",
    price: "$ 5.800",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42627601_0_1_20220329150622.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Negro"
  },
  {
    id: "6",
    categoria: "Mochilas",
    name: "Mochila Amber",
    price: "$ 6.700",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42623602_0_3_20220510150850.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Mostaza"
  },
  {
    id: "7",
    categoria: "Mochilas",
    name: "Mochila Crocco",
    price: "$ 6.300",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42624602_0_1_20220408150937.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Bordó"
  },
  {
    id: "8",
    categoria: "Mochilas",
    name: "Mochila Aria",
    price: "$ 6.700",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42622103_0_3_20220331180214.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Militar"
  },
  {
    id: "9",
    categoria: "Mochilas",
    name: "Mochila Voyage",
    price: "$ 6.700",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42622603_0_1_20220329210442.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Gris"
  },
  {
    id: "10",
    categoria: "Mochilas",
    name: "Mochila Jules",
    price: "$ 6.300",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42622104_2_1_20220329210442.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Gris"
  },
  {
    id: "11",
    categoria: "Shopper",
    name: "Shopper Market",
    price: "$ 6.700",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42627905_0_1_20220412180353.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Rosa"
  },
  {
    id: "12",
    categoria: "Shopper",
    name: "Shopper Julia",
    price: "$ 7.100",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42603701_0_3_20220126000159.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Beige"
  },
  {
    id: "13",
    categoria: "Shopper",
    name: "Shopper Patch",
    price: "$ 6.800",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42605402_0_1_20220201150531.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Marrón"
  },
  {
    id: "14",
    categoria: "Shopper",
    name: "Shopper Stripe",
    price: "$ 6.800",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42621403_0_1_20220329210442.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Negro"
  },
  {
    id: "15",
    categoria: "Shopper",
    name: "Shopper Version",
    price: "$ 6.500",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42656001_0_3_20220303180521.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Marrón"
  },
  {
    id: "16",
    categoria: "Riñonera",
    name: "Riñonera Fancy",
    price: "$ 5.300",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42620801_0_1_20220330120039.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Negro"
  },
  {
    id:"17",
    categoria: "Riñonera",
    name: "Riñonera Voyage",
    price: "$ 5.600",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42621002_1_1_20220329210442.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Gris"
  },
  {
    id: "18",
    categoria: "Riñonera",
    name: "Riñonera Pack n Go",
    price: "$ 4.500",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42619801_0_1_20220411182241.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Rosa"
  },
  {
    id: "19",
    categoria: "Riñonera",
    name: "Riñonera Pouch",
    price: "$ 5.000",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42626401_0_1_20220329210442.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Negro"
  },
  {
    id: "20",
    categoria: "Riñonera",
    name: "Riñonera Weekend",
    price: "$ 4.800",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42605301_0_1_20220126180546.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Negro"
  },
  {
    id: "21",
    categoria: "Bandolera",
    name: "Bandolera Gigi",
    price: "$ 5.800",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42624502_0_1_20220413180247.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Rosa"
  },
  {
    id: "22",
    categoria: "Bandolera",
    name: "Bandolera Snake",
    price: "$ 4.700",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42624001_0_1_20220322180330.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Snake"
  },
  {
    id: "23",
    categoria: "Bandolera",
    name: "Bandolera Kate",
    price: "$ 5.800",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42622902_0_1_20220331120227.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Gris"
  },
  {
    id: "24",
    categoria: "Bandolera",
    name: "Bandolera Idol",
    price: "$ 5.800",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42621703_0_1_20220322180330.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Blanco"
  },
  {
    id: "25",
    categoria: "Bandolera",
    name: "Bandolera Rue",
    price: "$ 6.200",
    img: "https://ar.isadoraonline.com/media/catalog/product/4/2/42626501_0_1_20220422120042.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",
    color: "Negro"
  }
]

export const getFetch = (detalleID) => {
  return new Promise((resolve)=>{
      setTimeout(()=>{
              const query = detalleID ? products.find(product => product.id === detalleID ) : products                                  
              resolve( query )                           
          }, 2000)
      })            
  
}

