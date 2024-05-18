const pessoas = [
    {
        foto: "nadim.jpeg",
        nome: "Thiago Martinho",
        cargo: "Spendings Director"
    }, 
    {   
        foto: "satoh.jpeg",
        nome: "Victor Hoshikawa Satoh",
        cargo: "Vice-president of Conpec",
    },
    {
        foto: "takaki1.jpg",
        nome: "João Yukio Takaki",
        cargo: "President of Conpec",
    }
]

const createCard = (pessoa) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = 
    `<div class="image-side">
        <div class="img">
            <img src="${pessoa.foto}" alt="foto">
        </div>
    </div>
    <div class="content-side">
        <div class="name-title">${pessoa.nome}</div>
        <div class="role">${pessoa.cargo}</div>
        <div class="social-medias-container">
            <div class="follow-btn">
                Follow
                <span>+</span>
            </div>
        </div>
    </div>`
    return card;
}

const addCard = () => {
    container.appendChild(createCard(pessoas[parseInt(Math.random() * 3)]));
}

const container = document.getElementById("container");

const addButton = document.getElementById("add");
addButton.addEventListener("click", addCard);