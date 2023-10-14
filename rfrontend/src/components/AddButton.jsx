import { Link } from "react-router-dom"
import add from '../assets/add.svg'

const AddButton = () => {
  return (
    <Link to='/note/new' className="floating-button">
        <img src={add} alt="" />
    </Link>
  )
}

export default AddButton