import Loadable from 'react-loadable'
import Loader from './Loader'

const Loadmang = func =>
  Loadable({
    loading: Loader,
    loader: func
  })

export default Loadmang
