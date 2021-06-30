'use strict';
//Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.
let locations=[];
let am=6;
let pm=12;
let totolHr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let totalOfTotals=0;
console.log(totolHr);
function ShopLocation(name,MinCust,MaxCust,AvgCookieSale){
  this.name=name;
  this.MinCust=MinCust,
  this.MaxCust=MaxCust,
  this.AvgCookieSale=AvgCookieSale,
  this.customersperhour= 0,
  this.purchasedCookies= [],
  // this.am= 6,
  // this.pm=12,
  this.total=0,

  locations.push(this);
}

ShopLocation.prototype.getCustomersperhour= function (max, min) {

  this.customersperhour = Math.floor(Math.random() * (max - min + 1) + min);
  return this.customersperhour;
};

ShopLocation.prototype.getAmountsOfCookies= function () {
  for (let i = 0; i < 15; i++) {
    let cookies = Math.floor(this.getCustomersperhour(this.MaxCust, this.MinCust) * this.AvgCookieSale);
    this.purchasedCookies.push(cookies);
    this.total+=cookies;
    totolHr[i]+=this.purchasedCookies[i];
    console.log(this.purchasedCookies[i]);
  }
};

//Each cookie stand location should have a separate render() method that creates and appends its row to the table
ShopLocation.prototype.render= function () {
  let divEl = document.getElementById('locations');
  let articleEl = document.createElement('article');
  divEl.appendChild(articleEl);

  let h2El = document.createElement('h2');
  articleEl.appendChild(h2El);
  h2El.textContent = this.name;

  let pEl = document.createElement('p');
  pEl.textContent = 'simulated amounts of cookies purchased for each hour';
  articleEl.appendChild(pEl);


  let ulEl = document.createElement('ul');
  for (let i = 0; i < 6; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = `${am}am: ${this.purchasedCookies[i]} cookies`;
    ulEl.appendChild(liEl);
    am++;
  }

  for (let i = 6 ; i < this.purchasedCookies.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = `${pm}pm: ${this.purchasedCookies[i]} cookies`;
    ulEl.appendChild(liEl);
    pm++;
  }
  let liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.total} cookies`;
  ulEl.appendChild(liEl);
  articleEl.appendChild(ulEl);
};

//table
// createTableHeader
let container = document.getElementById('locations1');
let tableEl = document.createElement('table');
container.appendChild(tableEl);
let trEl = document.createElement('tr');
let thEl = document.createElement('th');
thEl.textContent = '     ';
trEl.appendChild(thEl);
tableEl.appendChild(trEl);

for (let i = 0; i < 6; i++) {
  let thEl1 = document.createElement('th');
  thEl1.textContent = `${am} am`;
  trEl.appendChild(thEl1);
  tableEl.appendChild(trEl);
  am++;
}
am=6;
for (let i = 6 ; i < 15 ; i++) {
  let thEl1 = document.createElement('th');
  thEl1.textContent = `${pm}pm`;
  trEl.appendChild(thEl1);
  tableEl.appendChild(trEl);
  pm++;
}
pm=12;
let thE = document.createElement('th');
thE.textContent ='Total';
trEl.appendChild(thE);
tableEl.appendChild(trEl);



//creating obj's

let Seattle= new ShopLocation('Seattle',23,65,6.3);
Seattle.getAmountsOfCookies();

let Tokyo= new ShopLocation('Tokyo',3,24,1.2);
Tokyo.getAmountsOfCookies();

let Dubai= new ShopLocation('Dubai',11,38,3.7);
Dubai.getAmountsOfCookies();

let Paris= new ShopLocation('Paris',20,38,2.3);
Paris.getAmountsOfCookies();

let Lima= new ShopLocation('Lima',2,16,4.6);
Lima.getAmountsOfCookies();


ShopLocation.prototype.render= function(){

  let trEl = document.createElement('tr');
  let td1 = document.createElement('td');
  td1.textContent = this.name;
  trEl.appendChild(td1);
  tableEl.appendChild(trEl);

  for (let i = 0; i <this.purchasedCookies.length; i++) {
    let td2 = document.createElement('td');
    td2.textContent = this.purchasedCookies[i];
    trEl.appendChild(td2);
    tableEl.appendChild(trEl);
  }
  let td3 = document.createElement('td');
  td3.textContent = this.total;
  trEl.appendChild(td3);
  tableEl.appendChild(trEl);
  tableEl.appendChild(trEl);
};

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

let trElf = document.createElement('tr');
tableEl.appendChild(trElf);
let tdElTot = document.createElement('td');
tdElTot.textContent = 'Total';
trElf.appendChild(tdElTot);

for (let i = 0; i < totolHr.length; i++) {
  let tdEl = document.createElement('td');
  tdEl.textContent = totolHr[i];
  trElf.appendChild(tdEl);
}
for (let i=0;i<15;i++){
  totalOfTotals+=totolHr[i];
}
let tdE10 = document.createElement('td');
tdE10.textContent = totalOfTotals;
trElf.appendChild(tdE10);
tableEl.appendChild(trElf);



//form

let myForm = document.getElementById('addinfo');
console.log(myForm);
myForm.addEventListener('submit', addLocShope);
function addLocShope(event) {
  event.preventDefault();

  let name = event.target.locName.value;
  let min = event.target.MinCust.value;
  let max = event.target.MaxCust.value;
  let avg = event.target.AvgCookieSale.value;

  let adding = new ShopLocation(name, min, max, avg);
  adding.getAmountsOfCookies();
  adding.render();

  //   totolHr[i]+=this.purchasedCookies[i];
  // }
  trElf.textContent='';
  tdElTot.textContent = 'Total';
  trElf.appendChild(tdElTot);
  for (let i = 0; i < totolHr.length; i++) {
    let tdEl = document.createElement('td');
    tdEl.textContent = totolHr[i];
    trElf.appendChild(tdEl);
  }
  console.log(totolHr);
  for (let i=0;i<15;i++){
    totalOfTotals+=totolHr[i];
  }
  tdE10.textContent = totalOfTotals;
  trElf.appendChild(tdE10);
  tableEl.appendChild(trElf);

}


