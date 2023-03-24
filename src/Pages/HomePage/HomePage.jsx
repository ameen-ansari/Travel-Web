import Header from '../../Components/Header/Header'
import SimpleSlider from '../../Components/Sliders/Slider1'
import style from './HomePage.module.css'

function HomePage() {
  return (
    <div className={style.parent}>
   <Header />
   <SimpleSlider />
    </div>
  )
}

export default HomePage