import React, { Component, FormEventHandler } from 'react'
import { defaultFormState, Form } from '../../App';

type Props = {
    onChange: FormEventHandler;
    form: Form;
}
type State = {
    form: Form,
}

class SixthQuestion extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            form: defaultFormState
        }
    }

    render() {
        return (
            <>
                <p>6) Что такое ECMAScript?</p>

                <div className="custom-control custom-radio">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="sixQuestionValidation1"
                        name="sixRadio"
                        value='answer1'
                        checked={this.props.form.sixthQuestion === 'answer1'}
                        onChange={this.props.onChange} />
                    <label className="custom-control-label" htmlFor="sixQuestionValidation1">
                        Новый язык программирования
                    </label>
                </div>
                <div className="custom-control custom-radio ">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="sixQuestionValidation2"
                        name="sixRadio"
                        value='answer2'
                        checked={this.props.form.sixthQuestion === 'answer2'}
                        onChange={this.props.onChange} />
                    <label className="custom-control-label" htmlFor="sixQuestionValidation2">
                        Переработанная реализация Javascript
                    </label>
                </div>
                <div className="custom-control custom-radio">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="sixQuestionValidation3"
                        name="sixRadio"
                        value='answer3'
                        checked={this.props.form.sixthQuestion === 'answer3'}
                        onChange={this.props.onChange} />
                    <label className="custom-control-label" htmlFor="sixQuestionValidation3">
                        Спецификация языка Javascript
                    </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="sixQuestionValidation4"
                        name="sixRadio"
                        value='answer4'
                        checked={this.props.form.sixthQuestion === 'answer4'}
                        onChange={this.props.onChange} />
                    <label className="custom-control-label" htmlFor="sixQuestionValidation4">
                        Что-то не известное
                    </label>
                </div>
            </>
        )
    }
}

export default SixthQuestion;