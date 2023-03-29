import Header from '../../Components/Header/Header'
import style from './MountainsPage.module.css'
import Footer from '../../Components/Footer/Footer'
import MountainsSlider from '../../Components/mountainsPage/Sliders/MountainsSlider'
import MountainsSlider2 from '../../Components/mountainsPage/Sliders/SliderRecent'
import s1img1 from '../../Images/mountainsPage/Slider1/image 33.svg'
import s1img2 from '../../Images/mountainsPage/Slider1/image 34.svg'
import s1img3 from '../../Images/mountainsPage/Slider1/image 35.svg'
import s1img4 from '../../Images/mountainsPage/Slider1/image 36.svg'
import s2img1 from '../../Images/mountainsPage/Slider2/image 24.svg'
import s2img2 from '../../Images/mountainsPage/Slider2/image 25.svg'
import s2img3 from '../../Images/mountainsPage/Slider2/image 31.svg'
import s3img1 from '../../Images/mountainsPage/Slider3/image 27.svg'
import s3img2 from '../../Images/mountainsPage/Slider3/image 28.svg'
import s3img3 from '../../Images/mountainsPage/Slider3/image 29.svg'

function MountainsPage() {
  let array1 = [
    {
      img:s1img1,
      desc:'Swiss Apls'
    },
    {
      img:s1img2,
      desc:'Hallstatt'
    },
    {
      img:s1img3,
      desc:'Island'
    },
    {
      img:s1img4,
      desc:'Innsbruck'
    },
  ]
  let array2 = [
    {
      img:s2img1,
      desc:'Val di Funes'
    },
    {
      img:s2img2,
      desc:'Ushuaia'
    },
    {
      img:s2img3,
      desc:'Berchtesgaden'
    },
    {
      img:s2img1,
      desc:'Fussen'
    },
  ]
  let array3 = [
    {
      img:s3img1,
      desc:'Mauritius'
    },
    {
      img:s3img2,
      desc:'Havelock'
    },
    {
      img:s3img3,
      desc:'Islands'
    },
    {
      img:s3img1,
      desc:'Maldives'
    },
  ]
  return (
    <div className={style.parent}>
      <Header para='Popular Beach Destinations'/>
      <MountainsSlider array={array1}/>
    <div className={style.slider2}>
      <p className='font-bold text-[32px]'>Recently Viewed</p>
      <MountainsSlider2 img1={s1img1} img2={s1img4}/>
    </div>
    <div className={style.slider3}>
      <p className='font-bold text-[32px]'>All Inclusive Packages!</p>
      <MountainsSlider array={array2}/>
    </div>
    <div className={style.slider4}>
      <p className='font-bold text-[32px]'>Honeymoon Freebies Special</p>
      <MountainsSlider array={array3}/>
    </div>
    <Footer />
    </div>
  )
}

export default MountainsPage
