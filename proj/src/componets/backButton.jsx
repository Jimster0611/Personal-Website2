import { useNavigate } from "react-router-dom"
import s from './backButton.module.css'

export default function BackButton({ to }) {
  const navigate = useNavigate()

  return (
    <button className={s.backButton} onClick={() => navigate(to)}>
        Back
    </button>
  )
}