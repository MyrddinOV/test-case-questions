import React, { Component, FormEventHandler } from 'react'
import { defaultFormState, Form } from '../../App';

type Props = {
    onChange: FormEventHandler;
    form: Form;
}
type State = {
    form: Form,
}

class FifthQuestion extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            form: defaultFormState
        }
    }

    render() {
        return (
            <>
                <p>5) На что влияет описание DOCTYPE в начале документа?</p>

                <div className="custom-control custom-checkbox mb-3 pl-1">
                    <div className="form-check">
                        <input
                            className="custom-control-input"
                            type="checkbox"
                            name='check1'
                            id="Check1"
                            checked={this.props.form.fifthQuestion.check1}
                            onChange={this.props.onChange} />
                        <label className="custom-control-label" htmlFor="Check1">
                            На внешний валидатор при проверке соответствия стандарту
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="custom-control-input"
                            type="checkbox"
                            name='check2'
                            id="Check2"
                            checked={this.props.form.fifthQuestion.check2}
                            onChange={this.props.onChange} />
                        <label className="custom-control-label" htmlFor="Check2">
                            На отображение, работу CSS-свойств
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="custom-control-input"
                            type="checkbox"
                            name='check3'
                            id="Check3"
                            checked={this.props.form.fifthQuestion.check3}
                            onChange={this.props.onChange} />
                        <label className="custom-control-label" htmlFor="Check3">
                            На наличие и отсутствие некоторых свойств в DOM
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="custom-control-input"
                            type="checkbox"
                            name='check4'
                            id="Check4"
                            checked={this.props.form.fifthQuestion.check4}
                            onChange={this.props.onChange} />
                        <label className="custom-control-label" htmlFor="Check4">
                            На особенности работы XmlHttpRequest
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="custom-control-input"
                            type="checkbox"
                            name='check5'
                            id="Check5"
                            checked={this.props.form.fifthQuestion.check5}
                            onChange={this.props.onChange} />
                        <label className="custom-control-label" htmlFor="Check5">
                            DOCTYPE - атавизм, он ни на что не влияет.
                        </label>
                    </div>
                </div>
            </>
        )
    }
}


export default FifthQuestion;