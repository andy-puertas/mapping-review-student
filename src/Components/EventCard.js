import React, {Component} from 'react'

export default class EventCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editToggle: false,
            editName: '',
            editTitle: '',
            editDesc: ''
        }
    }
    componentDidMount(){
        this.setState({
            editName: this.props.event.name, 
            editTitle: this.props.event.title, 
            editDesc: this.props.event.desc})
    }

    render() {
        console.log(this.props)
        return (
            <div className='eventCard'>
                {
                    this.state.editToggle
                        ?
                            <div>
                                <input value={this.state.editName}/>
                                <input value={this.state.editTitle} />
                                <textarea />
                            </div>
                            
                        :
                        <div>
                            <h4>{this.props.event.name}</h4>
                            <h4>{this.props.event.title}</h4>
                            <p>{this.props.event.desc}</p>
                        </div>
                }
            
                <button onClick={() => this.setState({editToggle: !this.state.editToggle })}>{this.state.editToggle ? 'Save' : 'Edit'}</button>
                <button>Delete</button>
        </div>
        )
    }
}