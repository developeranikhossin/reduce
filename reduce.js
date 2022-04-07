// const nums = [15,44,54,54,54,63,46,100];
// nums.map(num => num *2);
// nums.filter(num => 20);
// nums.find(num => num > 23);
// const total = nums.reduce( (sum, num) => sum + num , 0);
// console.log(total);

const friends = [
    {name: 'Rashed', money: 11},
    {name: 'kashed', money: 20},
    {name: 'pashed', money: 30},
    {name: 'aashed', money: 40},
    {name: 'deshed', money: 111}
];

const total = friends.reduce( (sum, friend) => {
    console.log(sum, friend);
    return sum + friend.money;
}
, 0)
console.log(total);

const final = friends.reduce( (sum, friend) => sum + friend.money, 0);
console.log(final);




