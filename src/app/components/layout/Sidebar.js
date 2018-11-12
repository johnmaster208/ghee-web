import React, {Component} from 'react'
import { Spring } from 'react-spring'
import { Openable } from '../render'

class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.align = this.props.align ? this.props.align : undefined;
    }

    render() {
        const {align, fullScreen, toggleSidebar} = this.props;
        return (
            <Openable>
                {
                    ({open, toggle}) =>
                    <div className={`sidebar-wrapper-${align ? align : "left"}`}>
                        <div onClick={toggle} className={`sidebar-toggle-${align ? align : "left"} button square`}>
                            {open ? "Close X" : "Open +"}
                        </div>
                        <Spring
                            from={ open ? { width: 0} : { width: 'auto'} } //styles before opening : after opening
                            to={ open ? { width: 'auto', opacity: 1 } : { width: 0, opacity: 0 } }  //styles before closing : after closing
                        >
                            { 
                                styles =>
                                    <div style={styles} className={`sidebar ${align ? align : "left"}`}>
                                        <div className={`sidebar-content ${fullScreen ? "fullscreen " : ""}`} >
                                            {open && this.props.children}
                                        </div>
                                    </div>
                            }
                        </Spring>
                    </div>
                }
            </Openable>
        )
    }
}

export default Sidebar