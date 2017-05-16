import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './Comment.css'

const Comment = (props) => {
  return (
    <li className='comment clearfix'>
      <div className='author-info'>        
        <span className='author-name'>{props.authorName}</span>
        <span className='udpate-time'>{moment(props.updateTime).format('YYYY-MM-DD HH:mm:ss')}</span>
      </div>
      <img className='icon' src={props.authorIcon} alt={props.authorName} />
      <div className='content'>
        <p>{props.content}</p>
      </div>
    </li>
  )
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  updateTime: PropTypes.number.isRequired,
  authorId: PropTypes.number.isRequired,
  authorName: PropTypes.string.isRequired,
  authorIcon: PropTypes.string.isRequired
}

export default Comment
