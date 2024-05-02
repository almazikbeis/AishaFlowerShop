import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Получи скидку на  первый заказ</h1>
        <p>Подпишись чтобы не пропустить обновления </p>
        <div>
        <input type="email" placeholder='Укажите прочту!'/>
        <button>Подписаться</button>

        </div>
    </div>

  )
}
