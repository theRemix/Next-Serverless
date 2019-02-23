import { Fragment } from 'react'

export default ({ id, name }) => <Fragment key={id}>
  <h3>{name}</h3>
</Fragment>
