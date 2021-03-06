import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  props: {
    questions: React.PropTypes.array.isRequired,
    onLinkClick: React.PropTypes.func.isRequired
  },
  render () {
    const questionList = this.props.questions.map((elem) => {
      return (
        <div key={elem.id}>
          <Link id={elem.id} onClick={this.props.onLinkClick} to='/questiondetails'>{elem.title}</Link>
          <p>{elem.created}</p>
        </div>
      )
    })
    return (
      <div className="question-list">
        {questionList}
      </div>
    )
  }
})
