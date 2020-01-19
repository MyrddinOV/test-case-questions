import React, { Component, FormEventHandler } from 'react'
import { defaultFormState, Form } from '../../App';

type Props = {
    onChange: FormEventHandler;
    form: Form;
}
type State = {
    form: Form,
}

class SecondQuestion extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            form: defaultFormState
        }
    }

    render() {
        return (
            <>
                <p>2) Какие из этих вариантов задают массив из элементов "a", "b"?</p>

                <div className="custom-control custom-checkbox mb-3 pl-1">
                    <div className="form-check">
                        <input
                            className="custom-control-input"
                            type="checkbox"
                            name='check1'
                            id="defaultCheck1"

                            checked={this.props.form.secondQuestion.check1}
                            onChange={this.props.onChange} />
                        <label className="custom-control-label" htmlFor="defaultCheck1">
                            var a = new Array("a","b")
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="custom-control-input"
                            type="checkbox"
                            name='check2'
                            id="defaultCheck2"
                            checked={this.props.form.secondQuestion.check2}
                            onChange={this.props.onChange} />
                        <label className="custom-control-label" htmlFor="defaultCheck2">
                            var a = "a", "b"
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="custom-control-input"
                            type="checkbox"
                            name='check3'
                            id="defaultCheck3"
                            checked={this.props.form.secondQuestion.check3}
                            onChange={this.props.onChange} />
                        <label className="custom-control-label" htmlFor="defaultCheck3">
                            var a = [ "a", "b" ]
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="custom-control-input"
                            type="checkbox"
                            name='check4'
                            id="defaultCheck4"
                            checked={this.props.form.secondQuestion.check4}
                            onChange={this.props.onChange} />
                        <label className="custom-control-label" htmlFor="defaultCheck4">
                            var a = ( "a", "b" )
                        </label>
                    </div>
                </div>
            </>
        )
    }
}


export default SecondQuestion;