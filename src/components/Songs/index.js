import './index.css'
import {MdDelete} from 'react-icons/md'

const Songs = props => {
  const {songsDetails, deleteSong} = props
  const {imageUrl, name, genre, duration, id} = songsDetails

  const onDelete = () => {
    deleteSong(id)
  }

  return (
    <li className="list-item">
      <div className="list-item-container">
        <img src={imageUrl} alt="track" className="image" />
        <div>
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>
      <div className="list-item-container">
        <p>{duration}</p>
        <button
          data-testid="delete"
          type="button"
          className="button"
          onClick={onDelete}
        >
          <MdDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default Songs
