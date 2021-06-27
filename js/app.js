'use strict';
let Seattle = {
  //Stores the min/max hourly customers, and the average cookies per customer, in object properties
  name: 'Seattle',
  MinCust: 23,
  MaxCust: 65,
  AvgCookieSale: 6.3,
  customersperhour: 0,
  purchasedCookies: [],
  am: 6,
  pm:12,
  total:0,
  //Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
  getCustomersperhour: function (max, min) {
    this.customersperhour = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(this.customersperhour );
    return this.customersperhour;
  },
  // Seattle.getCustomersperhour(Seattle.MaxCust,Seattle.MinCust);
  //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  getAmountsOfCookies: function () {
    for (let i = 0; i < 15; i++) {
      let cookies = this.getCustomersperhour(this.MaxCust, this.MinCust) * Math.floor(this.AvgCookieSale);
      this.purchasedCookies[i] = cookies;
      this.total+=cookies;
      console.log(this.purchasedCookies[i]);
    }

 
  },

  render: function () {
    let divEl = document.getElementById('locations');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);

    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;

    let pEl = document.createElement('p');
    pEl.textContent = 'simulated amounts of cookies purchased for each hour';
    articleEl.appendChild(pEl);

    // let ulEl = document.createElement('ul');
    // for (let i = 0; i <this.purchasedCookies.length; i++) {
    //   let liEl = document.createElement('li');
    //   liEl.textContent = this.purchasedCookies[i];
    //   ulEl.appendChild(liEl);


    let ulEl = document.createElement('ul');
    for (let i = 0; i < 6; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = `${this.am}am: ${this.purchasedCookies[i]} cookies`;
      ulEl.appendChild(liEl);
      this.am++;
    }
    for (let i = 6 ; i < this.purchasedCookies.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = `${this.pm}pm: ${this.purchasedCookies[i]} cookies`;
      ulEl.appendChild(liEl);
      this.pm++;
    }
    let liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.total} cookies`;
    ulEl.appendChild(liEl);
   

    articleEl.appendChild(ulEl);


  },

};


Seattle.getAmountsOfCookies();
Seattle.render();


//Tokyo obj
let Tokyo = {
  //Stores the min/max hourly customers, and the average cookies per customer, in object properties3	24	1.2
  name: 'Tokyo',
  MinCust: 3,
  MaxCust: 24,
  AvgCookieSale: 1.2,
  customersperhour: 0,
  purchasedCookies: [],
  am: 6,
  pm:12,
  total:0,
  //Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
  getCustomersperhour: function (max, min) {
    this.customersperhour = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(this.customersperhour );
    return this.customersperhour;
  },
  // Seattle.getCustomersperhour(Seattle.MaxCust,Seattle.MinCust);
  //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  getAmountsOfCookies: function () {
    for (let i = 0; i < 15; i++) {
      let cookies = this.getCustomersperhour(this.MaxCust, this.MinCust) * Math.floor(this.AvgCookieSale);
      this.purchasedCookies[i] = cookies;
      this.total+=cookies;
      console.log(this.purchasedCookies[i]);
    }
  },

  render: function () {
    let divEl = document.getElementById('locations');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);

    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;

    let pEl = document.createElement('p');
    pEl.textContent = 'simulated amounts of cookies purchased for each hour';
    articleEl.appendChild(pEl);

    // let ulEl = document.createElement('ul');
    // for (let i = 0; i <this.purchasedCookies.length; i++) {
    //   let liEl = document.createElement('li');
    //   liEl.textContent = this.purchasedCookies[i];
    //   ulEl.appendChild(liEl);


    let ulEl = document.createElement('ul');
    for (let i = 0; i < 6; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = `${this.am}am: ${this.purchasedCookies[i]} cookies`;
      ulEl.appendChild(liEl);
      this.am++;
    }
    for (let i = 6 ; i < this.purchasedCookies.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = `${this.pm}pm: ${this.purchasedCookies[i]} cookies`;
      ulEl.appendChild(liEl);
      this.pm++;
    }
    let liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.total} cookies`;
    ulEl.appendChild(liEl);
    articleEl.appendChild(ulEl);


  },

};


Tokyo.getAmountsOfCookies();
Tokyo.render();


//Dubai	11	38	3.7
let Dubai = {
  //Stores the min/max hourly customers, and the average cookies per customer, in object properties3	24	1.2
  name: 'Dubai',
  MinCust: 11,
  MaxCust: 38,
  AvgCookieSale: 3.7,
  customersperhour: 0,
  purchasedCookies: [],
  am: 6,
  pm:12,
  total:0,
  //Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
  getCustomersperhour: function (max, min) {
    this.customersperhour = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(this.customersperhour );
    return this.customersperhour;
  },
  // Seattle.getCustomersperhour(Seattle.MaxCust,Seattle.MinCust);
  //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  getAmountsOfCookies: function () {
    for (let i = 0; i < 15; i++) {
      let cookies = this.getCustomersperhour(this.MaxCust, this.MinCust) * Math.floor(this.AvgCookieSale);
      this.purchasedCookies[i] = cookies;
      this.total+=cookies;
      console.log(this.purchasedCookies[i]);
    }
  },

  render: function () {
    let divEl = document.getElementById('locations');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);

    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;

    let pEl = document.createElement('p');
    pEl.textContent = 'simulated amounts of cookies purchased for each hour';
    articleEl.appendChild(pEl);

    // let ulEl = document.createElement('ul');
    // for (let i = 0; i <this.purchasedCookies.length; i++) {
    //   let liEl = document.createElement('li');
    //   liEl.textContent = this.purchasedCookies[i];
    //   ulEl.appendChild(liEl);


    let ulEl = document.createElement('ul');
    for (let i = 0; i < 6; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = `${this.am}am: ${this.purchasedCookies[i]} cookies`;
      ulEl.appendChild(liEl);
      this.am++;
    }
    for (let i = 6 ; i < this.purchasedCookies.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = `${this.pm}pm: ${this.purchasedCookies[i]} cookies`;
      ulEl.appendChild(liEl);
      this.pm++;
    }
    let liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.total} cookies`;
    ulEl.appendChild(liEl);
    articleEl.appendChild(ulEl);


  },

};


Dubai.getAmountsOfCookies();
Dubai.render();

//Paris	20	38	2.3
let Paris = {
  //Stores the min/max hourly customers, and the average cookies per customer, in object properties3	24	1.2
  name: 'Paris',
  MinCust: 20,
  MaxCust: 38,
  AvgCookieSale: 2.3,
  customersperhour: 0,
  purchasedCookies: [],
  am: 6,
  pm:12,
  total:0,
  //Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
  getCustomersperhour: function (max, min) {
    this.customersperhour = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(this.customersperhour );
    return this.customersperhour;
  },
  // Seattle.getCustomersperhour(Seattle.MaxCust,Seattle.MinCust);
  //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  getAmountsOfCookies: function () {
    for (let i = 0; i < 15; i++) {
      let cookies = this.getCustomersperhour(this.MaxCust, this.MinCust) * Math.floor(this.AvgCookieSale);
      this.purchasedCookies[i] = cookies;
      this.total+=cookies;
      console.log(this.purchasedCookies[i]);
    }
  },

  render: function () {
    let divEl = document.getElementById('locations');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);

    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;

    let pEl = document.createElement('p');
    pEl.textContent = 'simulated amounts of cookies purchased for each hour';
    articleEl.appendChild(pEl);

    // let ulEl = document.createElement('ul');
    // for (let i = 0; i <this.purchasedCookies.length; i++) {
    //   let liEl = document.createElement('li');
    //   liEl.textContent = this.purchasedCookies[i];
    //   ulEl.appendChild(liEl);


    let ulEl = document.createElement('ul');
    for (let i = 0; i < 6; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = `${this.am}am: ${this.purchasedCookies[i]} cookies`;
      ulEl.appendChild(liEl);
      this.am++;
    }
    for (let i = 6 ; i < this.purchasedCookies.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = `${this.pm}pm: ${this.purchasedCookies[i]} cookies`;
      ulEl.appendChild(liEl);
      this.pm++;
    }
    let liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.total} cookies`;
    ulEl.appendChild(liEl);
    articleEl.appendChild(ulEl);


  },

};


Paris.getAmountsOfCookies();
Paris.render();


//Lima	2	16	4.6
let Lima = {
  //Stores the min/max hourly customers, and the average cookies per customer, in object properties3	24	1.2
  name: 'Lima',
  MinCust: 2,
  MaxCust: 16,
  AvgCookieSale: 4.6,
  customersperhour: 0,
  purchasedCookies: [],
  am: 6,
  pm:12,
  total:0,
  //Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
  getCustomersperhour: function (max, min) {
    this.customersperhour = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(this.customersperhour );
    return this.customersperhour;
  },
  // Seattle.getCustomersperhour(Seattle.MaxCust,Seattle.MinCust);
  //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  getAmountsOfCookies: function () {
    for (let i = 0; i < 15; i++) {
      let cookies = this.getCustomersperhour(this.MaxCust, this.MinCust) * Math.floor(this.AvgCookieSale);
      this.purchasedCookies[i] = cookies;
      this.total+=cookies;
      console.log(this.purchasedCookies[i]);
    }
  },

  render: function () {
    let divEl = document.getElementById('locations');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);

    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;

    let pEl = document.createElement('p');
    pEl.textContent = 'simulated amounts of cookies purchased for each hour';
    articleEl.appendChild(pEl);

    // let ulEl = document.createElement('ul');
    // for (let i = 0; i <this.purchasedCookies.length; i++) {
    //   let liEl = document.createElement('li');
    //   liEl.textContent = this.purchasedCookies[i];
    //   ulEl.appendChild(liEl);


    let ulEl = document.createElement('ul');
    for (let i = 0; i < 6; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = `${this.am}am: ${this.purchasedCookies[i]} cookies`;
      ulEl.appendChild(liEl);
      this.am++;
    }
    for (let i = 6 ; i < this.purchasedCookies.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = `${this.pm}pm: ${this.purchasedCookies[i]} cookies`;
      ulEl.appendChild(liEl);
      this.pm++;
    }
    let liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.total} cookies`;
    ulEl.appendChild(liEl);
    articleEl.appendChild(ulEl);


  },

};


Lima.getAmountsOfCookies();
Lima.render();
