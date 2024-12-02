import book from '../../assets/book.png';
import justice from '../../assets/justice.png';
import peoples from '../../assets/peoples.png';
import resi from '../../assets/resi.png';

import S from './inicio.module.scss';


export default function Inicio() {
  return (
    <main>
      <section className={S.container}>
        <h2>
          VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO </h2>
      </section>

      <section className={S.devoDoar}>
        <div>

          <h2>Por que devo doar?</h2>

        </div>
      </section>

      <section className={S.box}>
        <article>
          <img src={book} alt="" />
          <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
        </article>

        <article>
          <img src={peoples} alt="" />
          <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
        </article>

        <article>
          <img src={justice} alt="" />
          <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
        </article>

        <article>
          <img src={resi} alt="" />
          <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
        </article>

      </section>
    </main>
  );
}

