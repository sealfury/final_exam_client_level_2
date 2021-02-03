import React from 'react'
import { Segment, Menu} from 'semantic-ui-react'

const SubHeader = ({course}) => {
  return (
    <Menu>
      <Menu.Item name={course.title} />
    </Menu>
  )
}

export default SubHeader
