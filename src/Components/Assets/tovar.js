import p1_img from './rose (1).jpg';
import p2_img from './rose (2).jpg';
import p3_img from './rose (3).jpg';
import p4_img from './rose (4).jpg';
import p5_img from './rose (5).jpg';
import p6_img from './rose (6).jpg';
import p7_img from './rose (7).jpg';
import p8_img from './rose (8).jpg';
import p9_img from './rose (9).jpg';
import p10_img from './rose (10).jpg';
import p11_img from './rose (11).jpg';
import p12_img from './rose (12).jpg';
import p13_img from './chrys (1).jpg';
import p14_img from './chrys (2).jpg';
import p15_img from './chrys (3).jpg';
import p16_img from './chrys (4).jpg';
import p17_img from './chrys (5).jpg';
import p18_img from './chrys (6).jpg';
import p19_img from './chrys (7).jpg';
import p20_img from './chrys (8).jpg';
import p21_img from './chrys (9).jpg';
import p22_img from './chrys (10).jpg';
import p23_img from './new1 (1).jpg';
import p24_img from './new1 (2).jpg';
import p25_img from './new1 (3).jpg';
import p26_img from './new1 (4).jpg';
import p27_img from './new1 (5).jpg';
import p28_img from './new1 (6).jpg';
import p29_img from './new1 (7).jpg';
import p30_img from './new1 (8).jpg';
const data_product = [
  {
    id: 1,
    name: "Коробка белых роз 25",
    image: p1_img,
    category: "rose",
    new_price: 12000.00,
    old_price: 8050.00,
    review: "Изысканная коробка, наполненная нежными белыми розами. Идеальный подарок для особого случая."
  },
  {
    id: 2,
    name: "Букет белых роз",
    image: p2_img,
    category: "rose",
    new_price: 8500.00,
    old_price: 12050.00,
    review: "Белоснежный букет, который наполняет пространство свежестью и нежностью. Подходит для любого повода."
  },
  {
    id: 3,
    name: "Коробка розовых роз 17",
    image: p3_img,
    category: "rose",
    new_price: 10000.00,
    old_price: 9500.00,
    review: "Роскошная коробка, в которой спрятаны невероятно нежные розовые розы. Создайте волшебный момент вместе с ними."
  },
  {
    id: 4,
    name: "Букет красных кустовых роз 15",
    image: p4_img,
    category: "rose",
    new_price: 7000.00,
    old_price: 11000.00,
    review: "Этот букет красных роз вдохновляет страстью и энергией. Прекрасный выбор для любителей ярких оттенков."
  },
  {
    id: 5,
    name: "Коробка оранжевых роз 13",
    image: p5_img,
    category: "rose",
    new_price: 9500.00,
    old_price: 13550.00,
    review: "Солнечные оранжевые розы в стильной коробке. Этот букет приносит радость и тепло в любое время года."
  },
  {
    id: 6,
    name: "Букет пионовидных роз",
    image: p6_img,
    category: "rose",
    new_price: 9500.00,
    old_price: 7000.00,
    review: "Уникальный букет, вдохновленный формой пионов. Идеальное сочетание нежности и элегантности."
  },
  {
    id: 7,
    name: "Микс роз",
    image: p7_img,
    category: "rose",
    new_price: 7500.00,
    old_price: 10500.00,
    review: "Разноцветный микс роз, создающий веселое и праздничное настроение. Подходит для любых праздников."
  },
  {
    id: 8,
    name: "Свадебный букет классический",
    image: p8_img,
    category: "rose",
    new_price: 13500.00,
    old_price: 9500.00,
    review: "Классический свадебный букет, который придаст особенность вашему торжеству. Воплощение любви и красоты."
  },
  {
    id: 9,
    name: "Европейский мини букет",
    image: p9_img,
    category: "rose",
    new_price: 10500.00,
    old_price: 9500.00,
    review: "Миниатюрный букет в европейском стиле. Отличный выбор для тех, кто ценит изысканность в мельчайших деталях."
  },
  {
    id: 10,
    name: "Европейский средний букет",
    image: p10_img,
    category: "rose",
    new_price: 15500.00,
    old_price: 9500.00,
    review: "Элегантный средний букет в европейском стиле. Создайте волшебную атмосферу с этим изысканным подарком."
  },
  {
    id: 11,
    name: "Свадебный букет классический",
    image: p11_img,
    category: "rose",
    new_price: 13500.00,
    old_price: 9500.00,
    review: "Классический свадебный букет, который придаст особенность вашему торжеству. Воплощение любви и красоты."
  },
  {
    id: 12,
    name: "Маленький букет",
    image: p12_img,
    category: "rose",
    new_price: 8500.00,
    old_price: 9500.00,
    review: "Крошечный букет, который хранит в себе великолепие. Подарите радость в миниатюре с этим невероятным букетом."
  },
  {
    id: 13,
    name: "Маленький букет",
    image: p13_img,
    category: "chrys",
    new_price: 8500.00,
    old_price: 9500.00,
    review: "Маленький букет из изысканных хризантем. Создайте уют и тепло с этим чарующим компактным букетом."
  },
  {
    id: 14,
    name: "Маленький букет",
    image: p14_img,
    category: "chrys",
    new_price: 8500.00,
    old_price: 9500.00,
    review: "Невероятно милый и компактный букет. Отличный способ выразить свои чувства в маленьком формате."
  },
  {
    id: 15,
    name: "Маленький букет",
    image: p15_img,
    category: "chrys",
    new_price: 8500.00,
    old_price: 9500.00,
    review: "Изысканный маленький букет, наполненный нежными хризантемами. Идеальный подарок для особых случаев."
  },
  {
    id: 16,
    name: "Маленький букет",
    image: p16_img,
    category: "chrys",
    new_price: 8500.00,
    old_price: 9500.00,
    review: "Компактный букет, который приносит радость своей простотой. Уникальный выбор для любого повода."
  },
  {
    id: 17,
    name: "Маленький букет",
    image: p17_img,
    category: "chrys",
    new_price: 8500.00,
    old_price: 9500.00,
    review: "Очаровательный маленький букет. Подарите этот волшебный момент своим близким с этим удивительным букетом."
  },
  {
    id: 18,
    name: "Маленький букет",
    image: p18_img,
    category: "chrys",
    new_price: 8500.00,
    old_price: 9500.00,
    review: "Маленький букет, который заставит сердца трепетать. Прекрасный выбор для тех, кто ценит маленькие радости."
  },
  {
    id: 19,
    name: "Маленький букет",
    image: p19_img,
    category: "chrys",
    new_price: 8500.00,
    old_price: 9500.00,
    review: "Крошечный букет, полный тепла и нежности. Отправьте этот замечательный подарок вашим близким."
  },
  {
    id: 20,
    name: "Маленький букет",
    image: p20_img,
    category: "chrys",
    new_price: 8500.00,
    old_price: 9500.00,
    review: "Маленький букет, который приносит радость и улыбки. Удивите своих близких этим милым и компактным букетом."
  },
  {
    id: 21,
    name: "Маленький букет",
    image: p21_img,
    category: "chrys",
    new_price: 8500.00,
    old_price: 9500.00,
    review: "Крошечный букет, полный элегантности и стиля. Прекрасный подарок для тех, кто ценит утонченность в каждой детали."
  },
  {
    id: 22,
    name: "Маленький букет",
    image: p22_img,
    category: "chrys",
    new_price: 8500.00,
    old_price: 9500.00,
    review: "Невероятно милый и компактный букет. Подарите этот маленький кусочек счастья своим близким."
  },
  {
    id: 23,
    name: "Подарочный букет роз",
    category: "gift",
    image: p23_img,
    new_price: 9800.00,
    old_price: 13500.00,
},
{
    id: 24,
    name: "Эксклюзивный подарочный набор",
    category: "gift",
    image: p24_img,
    new_price: 12000.00,
    old_price: 15800.00,
},
{
    id: 25,
    name: "Подарочная коробка с розами и шоколадом",
    category: "gift",
    image: p25_img,
    new_price: 8900.00,
    old_price: 12000.00,
},
{
    id: 26,
    name: "Букет 'Счастье внутри'",
    category: "gift",
    image: p26_img,
    new_price: 7500.00,
    old_price: 9800.00,
},
{
    id: 27,
    name: "Набор для уюта в доме",
    category: "gift",
    image: p27_img,
    new_price: 10500.00,
    old_price: 13800.00,
},
{
  id: 666,
  name: "Букет Гербер и Ромашек",
  image: p28_img,
  category: "gift",
  new_price: 4500.00, // 4500 тенге
  old_price: 7000.00, // 7000 тенге
},
{
  id: 777,
  name: "Букет Пионов и Анютиных Глазок",
  image: p29_img,
  category: "gift",
  new_price: 7500.00, // 7500 тенге
  old_price: 10500.00, // 10500 тенге
},
{
  id: 888,
  name: "Букет Камелий и Жасмина",
  image: p30_img,
  new_price: 6500.00, // 6500 тенге
  old_price: 9500.00, // 9500 тенге

},
];

export default data_product;