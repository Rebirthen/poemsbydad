import React from 'react';
import './converter.css'
import DB from "../../db.json";

export class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            result: {
                name: "",
                citate: "",
                citateAuthor: "",
                imageUrl: "",
                text: "",
                footer: "",
                category: 0
            },
            db: DB
        }
    };


    handleFormSubmit = (event) => {
        event.preventDefault();
        let {db} = this.state;
        let poems = this.state.db[this.state.result.category]['poems'];
        poems.push(this.state.result);
        console.log(poems);

        db[this.state.result.category]['poems'] = poems;
       this.setState({db}, () => console.log("dbbbbbbb",this.state.db));
       
        
    }

    onChange = (event) => {
        let { name, value } = event.target;
        console.log(name, value);
        this.setState({ result: {...this.state.result, [name]: value} })
    

    }

    render() {
        return (
            <section className="contact-form" >
                <h1>Send Me a Message</h1>
                <p>Use this handy contact form to get in touch with me.</p>

                <form>
                <div className="input-group">
                        <label >category</label>
                        <select id="category"  name="category" type="citate" onChange={this.onChange} >
                            {console.log(this.state.db.length)}
                            {this.state.db.map(e => <option key={e.key} value={e.key}>{e.label}</option>)}
                            </select>
                    </div> 

                    <div className="input-group">
                        <label >name</label>
                        <input id="name" name="name" type="text" onChange={this.onChange} />
                    </div>

                    <div className="input-group">
                        <label >citate</label>
                        <input id="citate" name="citate" type="citate" onChange={this.onChange} />
                    </div>

                    

                    <div className="input-group">
                        <label >citateAuthor</label>
                        <input id="citateAuthor" name="citateAuthor" type="citateAuthor" onChange={this.onChange} />
                    </div>

                    <div className="input-group">
                        <label >imageUrl</label>
                        <input id="imageUrl" name="imageUrl" type="imageUrl" onChange={this.onChange} />
                    </div>

                    <div className="input-group">
                        <label >text</label>
                        <input id="text" name="text" type="text" onChange={this.onChange} />
                    </div>
                    <div className="input-group">
                        <label >footer</label>
                        <input id="footer" name="footer" type="footer" onChange={this.onChange} />
                    </div>
                    <button type="submit" onClick={this.handleFormSubmit}>Send It!</button>
                </form>

                <p>{JSON.stringify(this.state.db)} </p>
            </section>
        )
    }
}
