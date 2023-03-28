import Header from '../../Components/Header/Header'
import style from './MountainsPage.module.css'
import MountainsSlider from '../../Components/mountainsPage/Sliders/MountainsSlider'
import MountainsSlider2 from '../../Components/mountainsPage/Sliders/SliderRecent'
import s1img1 from '../../Images/mountainsPage/Slider1/image 33.svg'
import s1img2 from '../../Images/mountainsPage/Slider1/image 34.svg'
import s1img3 from '../../Images/mountainsPage/Slider1/image 35.svg'
import s1img4 from '../../Images/mountainsPage/Slider1/image 36.svg'

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
  return (
    <div className={style.parent}>
      <Header para='Popular Beach Destinations'/>
      <MountainsSlider array={array1}/>
    <div className={style.slider2}>
      <p className='font-bold text-[32px]'>Recently Viewed</p>
      <MountainsSlider2 img1={s1img1} img2={s1img4}/>
    </div>
    </div>
  )
}

export default MountainsPage
