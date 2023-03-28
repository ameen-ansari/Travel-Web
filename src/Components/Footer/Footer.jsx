import style from './Footer.module.css'
import img1 from '../../Images/footer/facebook (1).svg'
import img2 from '../../Images/footer/instagram (1).svg'
import img3 from '../../Images/footer/twitter (1).svg'
import img4 from '../../Images/footer/youtube.svg'

function Footer() {
  return (
    <div className={style.parent}>
      <div>
        <p>Trxvl.</p>
      </div>
      <div>
        <p>Seslendirme ve Alt Jazz</p>
        <p>Media Market</p>
        <p>Gillie</p>
        <p>Size Last</p>
        <button>Helmet KOD</button>
        <p>© 1997-2021 Netflix, Inc.  i-062d573a0ee099242</p>
      </div>
      <div>
        <p>Self Betimes</p>
        <p>Yatırımcı İlişkileri</p>
        <p>Basal Himmler</p>
      </div>
      <div>
        <p>Yard Market</p>
        <p>Is İmkanları</p>
        <p>Car Tercihleri</p>
      </div>
      <div>
        <p>Hedge Karla</p>
        <p>Mullein Koşulları</p>
        <p>Autumnal Bulgier</p>
      </div>
      <div className={style.imagesParent}>
        <img src={img1} alt="facebook" />
        <img src={img2} alt="instagram" />
        <img src={img3} alt="twitter" />
        <img src={img4} alt="youtube" />
      </div>
    </div>
  )
}

export default Footer
