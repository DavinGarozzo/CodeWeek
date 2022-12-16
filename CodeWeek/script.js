const urlArray = []; //creo un array vuoto che conterrà gli url singoli

for (let i = 1; i <= 10; i++) {
  urlArray.push(`https://jsonplaceholder.typicode.com/users/${i}`); //pusho gli url nell'array
}

let request = urlArray.map((url) => {
  return fetch(url).then((res) => res.json()); //creo un array di promise mappando urlArray
});

// arrayInit.map(objInit => {...objInit, pointEl: pointEl})

Promise.all(request).then((res) => res.map((r) => createUserCard(r)));

//dichiarazione bottoni
const bodyEl = document.querySelector("body");
const btnBa = document.querySelector("btn1");
const btnMe = document.querySelector("btn2");

//funzione createCard
const createUserCard = (data) => {
  const cardEl = document.createElement("div");
  const cardNameEl = document.createElement("h2");
  const emailEl = document.createElement("a");
  const pointEl = `#POINT: ${createRank(data.rank)}`;

  const contCard = document.createElement("div");

  cardEl.className = "bgColore";
  emailEl.className = "emailClass";
  contCard.className = "contCard";
  cardNameEl.className = "nameClass";
  cardNameEl.textContent = "Name: " + data.name;
  emailEl.textContent = "Email: " + data.email;

  //aprire il collegamento per inviare una mail direttamente all'indirizzo visibile nel dom
  emailEl.href = `mailto: ${data.email}`;

  //funzione per ottenere il point randomico
  function createRank(min, max) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //aggiungere il colore dinamico come background
  let numero = pointEl;
  switch (numero) {
    case "#POINT: 1":
      cardEl.classList.add(`bgColoreMin`);
      break;
    case "#POINT: 2":
      cardEl.classList.add(`bgColoreMin`);
      break;
    case "#POINT: 3":
      cardEl.classList.add(`bgColoreMin`);
      break;
    case "#POINT: 4":
      cardEl.classList.add(`bgColoreMin`);
      break;
    case "#POINT: 5":
      cardEl.classList.add(`bgColoreMin`);
      break;
    case "#POINT: 6":
      cardEl.classList.add(`bgColoreMed`);
      break;
    case "#POINT: 7":
      cardEl.classList.add(`bgColoreMed`);
      break;
    case "#POINT: 8":
      cardEl.classList.add(`bgColoreMed`);
      break;
    case "#POINT: 9":
      cardEl.classList.add(`bgColoreMax`);
      break;
    case "#POINT: 10":
      cardEl.classList.add(`bgColoreMax`);
      break;
  }
  cardEl.append(pointEl, cardNameEl, emailEl);
  contCard.append(cardEl);
  bodyEl.append(contCard);

  //FUNZIONE PER I BOTTONI CHE NASCONDONO IN BASE AL FILTRO "FILTRO BASSO"
  function noShowBa(numero) {
    if (
      numero === "#POINT: 1" ||
      numero === "#POINT: 2" ||
      numero === "#POINT: 3" ||
      numero === "#POINT: 4" ||
      numero === "#POINT: 5"
    )
      return cardEl.classList.toggle("noShow");
  }

  btn1.addEventListener("click", (e) => noShowBa(numero));

  //FUNZIONE PER FILTRO "MEDIO"
  function noShowMed(numero) {
    if (
      numero === "#POINT: 6" ||
      numero === "#POINT: 7" ||
      numero === "#POINT: 8"
    )
      return cardEl.classList.toggle("noShow");
  }

  btn2.addEventListener("click", (e) => noShowMed(numero));

  //FUNZIONE PER FILTRO "ALTO"
  function noShowAlt(numero) {
    if (numero === "#POINT: 9" || numero === "#POINT: 10")
      return cardEl.classList.toggle("noShow");
  }

  btn3.addEventListener("click", (e) => noShowAlt(numero));
};
