import React from 'react'
import './Footer.css'
import inst from '../Assets/inst.png';
import teleg from '../Assets/teleg.png'
import wb from '../Assets/wb.png'   
export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <p>AISHA</p>
        </div>
        <ul className="footer-links">
            <li>Продукты</li>
            <li>Комапания</li>
            <li>Офисы</li>
        </ul>
        <div className="footer-copyright">
            <hr />
            <p>Сайт написан Бейсеновым Алмазом Легендой</p>
        </div>
    </div>
  )
}
