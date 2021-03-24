import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            hidden: false
        }
        this.be = this.be.bind(this);
        this.changeVisiblity = this.changeVisiblity.bind(this);
    }

    render() {
        const { event } = this.props;
        const { active, hidden } = this.state

        return (
            <div
                className="w-1/2 flex justify-center project bg-cover bg-center"
                style={{ backgroundImage: `url(${event.thumbnail.url})` || "" }}
                onMouseEnter={(e) => this.changeVisiblity()}
                onMouseLeave={(e) => this.changeVisiblity()}
                >
                <img
                    className={`logo bg-transparent w-7/12 my-16 ${this.be(active)}`}
                    src={event.logo.url}
                    alt={event.logo.alt || ""}
                ></img>
                <div className={`title bg-transparent ${this.be(hidden)}`}>
                    <h3 className="bg-transparent">{event.title[0].text}</h3>
                </div>
            </div>
        );
    }

    be(v) {
        if (v) {
            return "active"
        }
        else if (!v) {
            return "hide"
        }
        else {
            return
        }
    }
    
    changeVisiblity() {
        this.setState({
            active: !this.state.active,
            hidden: !this.state.hidden
        })
    }
}

export default Project;