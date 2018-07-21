var pizzaData = [{pizzaName: "The Main Event",description: "A delightful combination of organic onions, peppers and tomatoes mixed with grass-fed 100% wagyu beef makes this pizza, dare we say.....Dynamic!", price: 39.99},{pizzaName: "My Subways",description: "Paying homage to our favorite sandwich shop Subways, we create your favorite sub as a pizza! Don't you dare miss this train!",price: 21.99},{pizzaName: "Panda Express",description: "East definitely meets West in this terrific union. Enjoy your favorite Panda Express flavors of Orange Chicken, Broccoli Beef, Kung Pao Chicken or Honey Walnut Shrimp in a different way.",price: 16.88},
{pizzaName: "Tex Mex",description: "Build pizzas not walls is the theme for this mex. We draw inspiration from your local cantina to create this masterpiece.",price: 21.21}];

for (var i = 0; i < pizzaData.length; i++){
    console.log(pizzaData[i].pizzaName);
    console.log(pizzaData[i].description);
    console.log(pizzaData[i].price);


var pizzaDiv = document.createElement('div');
pizzaDiv.className = 'pizzaMain';
main.appendChild(pizzaDiv);
console.log(pizzaDiv);

var pName = document.createElement('div');
pName.className = 'name';
pName.innerHTML = pizzaData[i].pizzaName;
pizzaDiv.appendChild(pName);

var dName = document.createElement('div');
dName.className = 'desc';
dName.innerHTML = pizzaData[i].description;
pizzaDiv.appendChild(dName);

var cost = document.createElement('div');
cost.className = 'price';
cost.innerHTML = pizzaData[i].price;
pizzaDiv.appendChild(cost);
}