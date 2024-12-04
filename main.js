import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
})

document.querySelector('#app').innerHTML = `
  <div class="container">
    <img src="/cowboy-cat.png" alt="Cowboy Cat Logo" class="logo" data-aos="zoom-in">
    
    <div class="description" data-aos="fade-up" data-aos-delay="200">
      <h1>🤠🐱 <span class="highlight">Cowboy Cat</span> has arrived!</h1>
      <p>
        Saddle up for a thrilling adventure where freedom, security, and big rewards are always on the horizon. 💎
      </p>
      <p>
        🎮 Ready for some fun? Our Telegram Mini App Game is launching soon! Collect coins, grow your treasures, 
        and see if you've got what it takes to become the ultimate Cowboy Cat master. 🏆
      </p>
    </div>

    <div class="social-buttons" data-aos="fade-up" data-aos-delay="400">
      <a href="https://t.me/cowcatoken" target="_blank" class="social-button telegram">
        <i class="fab fa-telegram-plane"></i>
        Join Telegram
      </a>
      <a href="https://twitter.com/cowcatoken" target="_blank" class="social-button twitter">
        <i class="fab fa-twitter"></i>
        Follow Twitter
      </a>
    </div>
  </div>
`