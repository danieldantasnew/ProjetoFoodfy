export default function cards(){

    function createCard(srcImagem){
        //cria div
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.card;
    
        //cria div para inserir a imagem

        const cardImagem = document.createElement('div');
        cardImagem.classList.add('card_imagem');
        card.appendChild(cardImagem);
        
        //cria a tag img para inserir a imagem

        const imagem =  document.createElement('div');
        cardImagem.appendChild(imagem);
        imagem.id = srcImagem;
        imagem.classList.add('design-imagem-card');
    
        //cria a div para inserir as informações

        const divInfoCard = document.createElement('div');
        card.appendChild(divInfoCard);
        divInfoCard.classList.add('card_titulo');

        //cria o h1 para inserir dentro do titulo

    
        const h1 = document.createElement('h1');
        divInfoCard.appendChild(h1);

        //cria div card_autor

        const cardAutor = document.createElement('div');
        cardAutor.classList.add('card_autor');
        divInfoCard.appendChild(cardAutor);
    
        //cria o p para inserir dentro do autor

        const p = document.createElement('p');
        cardAutor.appendChild(p)
    

        return card;
    }

    async function fetchDados(){
        const dados = await fetch('./dados.json');
        const dadosJson = await dados.json(); 

        try {
            dadosJson.forEach((dado, index) => {
                const card =  createCard(dado.srcImagem);
                adicionaCard(card);
                const titulo = document.querySelectorAll('.card_titulo h1');
                const autor = document.querySelectorAll('.card_autor p');
     
                titulo[index].innerText = dado.titulo;
                autor[index].innerText = dado.autor;    
             });
        } catch (error) {
            console.log(error)
        }
    }

    
    function adicionaCard(card){
        const cards = document.querySelector('[data-card]');

        cards.appendChild(card);
    }

    fetchDados();

}

