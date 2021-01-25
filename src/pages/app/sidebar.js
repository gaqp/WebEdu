import React, { Component } from 'react';
import './sidebar.css';
import sidebar from "./sidebarItems.js"
import welcomeBox from './boxes/welcomeBox'

function setType(type) {
    switch (type) {
        case ("Administrador"):
            return sidebar.admin

        case ("Professor"):
            return sidebar.teacher

        case ("Jovem ACE"):
            return sidebar.ace

        default:
            return sidebar.ace

    };
}
export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            box: welcomeBox(this.props.type),
            selected: null
        }
        this.selectOption = this.selectOption.bind(this)
    }
    selectOption(item) {
        this.setState(item.component ? { box: <item.component />, selected: item.name } : { box: welcomeBox(this.props.type), selected: null })
    }
    render() {
        const sidebarType = setType(this.props.type);
        return (
            <React.Fragment>
                <div id="sidebar">
                    <div id="sidebar-type">
                        <img src={sidebarType.logo} alt={sidebarType.name}></img>
                        <span id="sidebar-label">{sidebarType.name}</span>
                    </div>
                    <div id="sidebar-menu">
                        {sidebarType.items.map(item => (
                            <div className={(this.state.selected === item.name) ? "sidebar-option selected" : "sidebar-option"} key={item.name} onClick={() => this.selectOption(item)}>
                                <img src={(this.state.selected === item.name) ? item.logoAtivo : item.logo} alt={item.name} key={item.name} />
                                <p ><strong>{item.name}</strong></p>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="boxes">
                    {this.state.box}
                </div>
            </React.Fragment>
        );
    }
}