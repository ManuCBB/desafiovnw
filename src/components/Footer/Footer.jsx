import facebook from '../../assets/face.png'
import instagram from '../../assets/insta.png'
import linkedin from '../../assets/linkedin.png'
import x from '../../assets/twitt.png'
import youtube from '../../assets/youtube.png'
import S from './footer.module.scss'

export default function Footer() {
  return (
    <footer>
      <section className={S.boxredes}>
        <h3>4002-8922</h3>
        <nav>
          <a href=""><img src={facebook} alt="" />  </a>
          <a href=""><img src={x} alt="" />  </a>
          <a href=""><img src={youtube} alt="" /> </a>
          <a href=""><img src={linkedin} alt="" />  </a>
          <a href=""><img src={instagram} alt="" />  </a>
        </nav>
      </section>
      <section className={S.boxtext}>
        <p>Layout desenvolvido por Emanoel para fins educativos do Vai Na Web - 2024</p>
      </section>
    </footer>
  )
}
