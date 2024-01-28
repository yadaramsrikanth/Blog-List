// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachList} = props
  const {title, description, publishedDate} = eachList
  return (
    <li className="list-items-container">
      <div className="title-description-container">
        <h1 className="title">{title}</h1>
        <p className="publishedDate">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}
export default BlogItem
