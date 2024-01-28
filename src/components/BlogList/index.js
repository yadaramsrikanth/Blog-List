// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="container">
      {blogsList.map(eachList => (
        <BlogItem eachList={eachList} key={eachList.id} />
      ))}
    </ul>
  )
}

export default BlogList
