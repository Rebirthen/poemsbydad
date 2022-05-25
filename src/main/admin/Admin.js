import React from 'react';
import './converter.css'
import DB from "../../db.json";
import { Input } from 'antd';

const { TextArea } = Input;
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
        let { db,result } = this.state;
        let poems = this.state.db[result.category]['poems'];
        poems.push(result);
        console.log(poems);

        db[result.category]['poems'] = poems;
        this.setState({ db , result: {
            name: "",
            citate: "",
            citateAuthor: "",
            imageUrl: "",
            text: "",
            footer: "",
            category: 0
        }});

        


    }

    onChange = (event) => {
        let { name, value } = event.target;
        console.log(name, value);
        this.setState({ result: { ...this.state.result, [name]: value } })


    }

    render() {
        let {result} =this.state;
        return (
            <section className="contact-form" >
                <h1>Create a poem</h1>
                <p>Use this handy contact form to get in touch with me.</p>

                    <div className="input-group">
                        <label >category</label>
                        <select id="category" name="category" type="citate" value={result.category} onChange={this.onChange} >
                            {console.log(this.state.db.length)}
                            {this.state.db.map(e => <option key={e.key} value={e.key}>{e.label}</option>)}
                        </select>
                    </div>

                    <div className="input-group">
                        <label >name</label>
                        <TextArea id="name" name="name" type="text" value={result.name}  onChange={this.onChange} />
                    </div>

                    <div className="input-group">
                        <label >text</label>
                        <TextArea rows={4} id="text" name="text" type="text" value={result.text}  onChange={this.onChange} />
                    </div>
                    <div className="input-group">
                        <label >footer</label>
                        <TextArea rows={4} id="footer" name="footer" type="footer" value={result.footer}  onChange={this.onChange} />
                    </div>

                    <button onClick={this.handleFormSubmit}>Send It!</button>

                    <div className="input-group">
                        <label >citate</label>
                        <TextArea rows={4} id="citate" name="citate" type="citate" value={result.citate} onChange={this.onChange} />
                    </div>



                    <div className="input-group">
                        <label >citateAuthor</label>
                        <input id="citateAuthor" name="citateAuthor" type="citateAuthor" value={result.citateAuthor} onChange={this.onChange} />
                    </div>

                    <div className="input-group">
                        <label >imageUrl</label>
                        <input id="imageUrl" name="imageUrl" type="imageUrl" value={result.imageUrl}  onChange={this.onChange} />
                    </div>

                  
                    <button onClick={this.handleFormSubmit}>Send It!</button>
                <button
                    onClick={() => navigator.clipboard.writeText(JSON.stringify(this.state.db))}
                >
                    Copy
                </button>
                <p>{JSON.stringify(this.state.db)} </p>
              
            </section>
        )
    }
}
