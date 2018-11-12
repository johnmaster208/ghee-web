import React, {Component} from 'react'
import {Header, Sidebar, Content} from './components/layout'
import {Button, List, Link} from './components/elements'
import {Image, ImageGrid} from './components/media'
import {connect} from 'react-redux'
import { allPeople, topTenPeople, peopleNamedJohn } from './components/reducers/Selectors'

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {topTenPeople} = this.props
        return(
            <div>
                <Header>
                    <h1 style={{fontSize: '100%', textTransform: 'uppercase', fontVariant: ''}}>Banner Text Goes here</h1>
                </Header>
                <Sidebar fullScreen={false} align="left">
                    <Content>
                        lorem ipsum
                    </Content>
                </Sidebar>
                <div className="app">
                    <Content>
                        <List items={topTenPeople} type="bullet" ordered="true" />
                    </Content>
                    <Content>
                        <List items={["one","two","three"]} />
                        <Link href="http://google.com" text="Google" />
                        {/* <Image width={100} height={200} type="circle" dynamic /> */}
                        <ImageGrid dimensions={{width: 4, height: 4}} />
                     </Content>
                    <Content>
                        <List items={topTenPeople} type="bullet" />
                    </Content>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        allPeople: allPeople(state),
        topTenPeople: topTenPeople(state),
        peopleNamedJohn: peopleNamedJohn(state)
    }
}

export default connect(mapStateToProps)(App)