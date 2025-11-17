
import { card } from './Card.module.css'
export default function Card({title, content}) {
    
  return (
    <div className={card}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}