import cloudCake from './images/cloud-cake.jpg';
import cubesUnicorn from './images/cubes-cake-unicorn.jpg';
import cubesOrchid from './images/cubes-cake-orchid.jpg';
import cubesYellow from './images/cubes-cake-yellow.jpg';
import roundBorddeaux from './images/round-cake-bordeaux.jpg';
import roundBubbles from './images/round-cake-bubbles.jpg';
import roundFigs from './images/round-cake-figs.jpg';
import roundWhite from './images/round-cake-white.jpg';

import uniqid from 'uniqid';

const cakesArr = [
    {
        id: uniqid(),
        name : "Cloud Cake",
        price: 28,
        src : cloudCake,
        count : 0
    },
    {
        id: uniqid(),
        name : "Cubes Cake with Unicorn",
        price: 35,
        src : cubesUnicorn,
        count : 0
    },
    {
        id: uniqid(),
        name : "Cubes Cake with Orchid",
        price: 35,
        src : cubesOrchid,
        count : 0
    },
    {
        id: uniqid(),
        name : "Cubes Cake, Yellow Theme",
        price: 39,
        src : cubesYellow,
        count : 0
    },
    {
        id: uniqid(),
        name : "Round Cake Bordeaux",
        price: 18,
        src : roundBorddeaux,
        count : 0
    },
    {
        id: uniqid(),
        name : "Round Cake Bubbles",
        price: 18,
        src : roundBubbles,
        count : 0
    },
    {
        id: uniqid(),
        name : "Round Cake Figs",
        price: 18,
        src : roundFigs,
        count : 0
    },
    {
        id: uniqid(),
        name : "Round Cake White",
        price: 18,
        src : roundWhite,
        count : 0
    },
]

export default cakesArr;