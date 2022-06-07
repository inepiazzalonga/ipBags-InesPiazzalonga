import { Link } from 'react-router-dom'
import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import instagram from "../../assets/instagram.png"
import "./footer.css"

export const Footer = () => {
  return (
    <footer>
          <div className="redes">
            <Link to='wa.link/zequw7'>
              <img src={whatsapp}/> 
            </Link>
            <Link to='https://www.instagram.com/inepiazzalonga/'>
              <img src={linkedin}/> 
            </Link>
            <Link to='https://github.com/inepiazzalonga'>
              <img src={github}/> 
            </Link>
            <Link to='https://www.linkedin.com/in/ines-piazzalonga-she-her-6b3a52207'>
              <img src={instagram}/> 
            </Link>
            {/* <a href="https://www.instagram.com/inepiazzalonga/"><img src="./img/whatsapp.png" alt="" class="icon"></a>
            <a href="https://github.com/inepiazzalonga"><img src="./img/github.png" alt="" class="icon"></a>
            <a href="https://www.linkedin.com/in/ines-piazzalonga-she-her-6b3a52207/"><img src="./img/linkedin.png" alt="" class="icon"></a> */}
            
        </div>
        <p>Copyright ©️ Inés Piazzalonga <br /> Proyecto final ReactJs</p>
    </footer>
  )
}
