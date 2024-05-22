import React from 'react'
import './Hero.css'
import heroImg from '../../assets/heroImg.webp'
import { Link } from 'react-router-dom';
import { GoChevronRight } from 'react-icons/go';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__banner">
          <div className="hero__banner-left">
            <Link
              to={
                "https://promotion.aliexpress.ru/wow/gcp/aer/daily/aer/nn/GNhAhQrcKG?spm=a2g2w.home.homePageBanner.1.75df55867LUEB8&wh_weex=true&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&nnSwitchNewPc=true&_ga=2.57773546.1773727852.1716300451-1158400750.1716300451"
              }
            >
              <h2>ONE PRICE</h2>
              <h3>For orders from 3 to 10 items</h3>
              <button>
                <span>BUY</span>
                <GoChevronRight size={22} />
              </button>
            </Link>
          </div>
          <div className="hero__banner-right">
            <img src={heroImg} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
