import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions'
import Navbar from './navbar'


const mapStateToProps = (state) => ({
    user: state.entities.user
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())  
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
