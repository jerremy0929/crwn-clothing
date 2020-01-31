import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './directory.style.scss'

import MenuItem from '../menu-item/menu-item.component'

import { selectDirectorySections } from '../../redux/directory/directory.selector'

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
