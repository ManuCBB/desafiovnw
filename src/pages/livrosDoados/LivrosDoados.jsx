import livro from '../../assets/livro.png';
import S from './livrosDoados.module.scss';

export default function LivrosDoados() {
  return (
    <main>
      <section className={S.boxlivros}>
        <h2>Livros Doados</h2>
        <section className={S.cardbox}>
          <article>
            <img src={livro} alt="imagem de um livro que se chama o protagonista" />

            <h3>O Protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>

          </article>
        </section>
      </section>

    </main>
  );
}

