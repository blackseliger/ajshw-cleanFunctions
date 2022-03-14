export default function showColor(obj) {
    return obj.health > 50 ? 'healthy' : obj.health <= 50 && obj.health >= 15 ? 'wounded' : 'critical'; 
}

// console.log(showColor({name: 'Маг', health: 14}));
