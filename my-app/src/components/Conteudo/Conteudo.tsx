import imgQuadrado from "../../img/Quadrado.png";
 
export default function Conteudo() {
    return (
        <main>
            <section>
                <h2>Conteúdo</h2>
 
                <figure>
                    <img src="https://placehold.co/300x200/0000ff/FFFFFF/png" alt="figura de demonstração" />
                    <figcaption>Imagem Externa</figcaption>
                </figure>
                <figure>
                    <img src={imgQuadrado} alt="figura de demonstração" />
                    <figcaption>Imagem Interna</figcaption>
                </figure>
                 <figure>
                    <img src="/image/quadrado-b.png"alt="figura de demonstração" />
                    <figcaption>Imagem Estático</figcaption>
                </figure>
 
               
               
 
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam sequi tenetur hic pariatur. Ullam optio repudiandae quaerat suscipit id in animi nemo expedita incidunt. Suscipit aut laborum necessitatibus fuga illo!</p>
            </section>
        </main>
    )
}