import React from "react";
function Footer(){
     return (
        <div className="bg-dark text-light fixed-bottom">
           <footer className="footer">
  <div className="footer__container container grid m-0 p-4 m-auto">
    <div className="footer__content grid">
      <span  >Fuse</span>

      <ul className="footer__links">
      <span className="footer__copy">
      &#169; Fuse 2024. All right reserved
    </span>
      </ul>

      <div className="footer__social">
        <a href="https://www.linkedin.com/in/Ravi-Shankar-Linkdein/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="footer__social-link" style={{width:"25px"}}>
          <img src="linkedin.png" alt="" />
        </a>

        <a href="https://github.com/ravishankar2004" target="_blank" className="footer__social-link" style={{width:"25px"}}>
        <img src="github.png" alt="" />
        </a>

        <a href="https://twitter.com/RaviSha02630493" target="_blank" className="footer__social-link" style={{width:"25px"}}>
        <img src="twitter.webp" alt="" />
        </a>

        <a href="https://www.instagram.com/_.__.ravi.__._/" target="_blank" className="footer__social-link" style={{width:"25px"}}>
        <img src="instagram.webp" alt="" />
        </a>
      </div>
    </div>

    
  </div>
</footer>
        </div>
    );
}

export default Footer;