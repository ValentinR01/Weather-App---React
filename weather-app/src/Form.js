import { Component } from "react";

export default class Form extends Component{
    city = this.props.city;
    setCity = this.props.setCity

    constructor(props){
        super(props);

        this.state = {
            city: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getCity = (e) => {
        this.setState({city: e.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        const newItem = {city: this.state.city}
        this.setCity(newItem)
    };

    

    render() {
        return (
            <div>
                <form className="cityAsk"  onSubmit={this.handleSubmit}>
                    <input type="text" className="city" placeholder="Paris" onChange={this.getCity}></input>
                    <button className="" type={"submit"}>search weather</button>
                </form>
            </div>
        )

    }
   
    
}