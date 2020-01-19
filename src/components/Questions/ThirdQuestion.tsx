import React, { Component, FormEventHandler } from 'react'
import { defaultFormState, Form } from '../../App';

type Props = {
    onChange: FormEventHandler;
    form: Form;
}
type State = {
    form: Form,
}

class ThirdQuestion extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            form: defaultFormState
        }
    }

    render() {
        return (
            <>
                <p>3) Сколько параметров можно передать функции ?</p>

                <div className="custom-control custom-radio">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="customControlValidation2"
                        name="radio"
                        value='answer1'
                        checked={this.props.form.thirdQuestion === 'answer1'}
                        onChange={this.props.onChange} />
                    <label className="custom-control-label" htmlFor="customControlValidation2">
                        Ровно столько, сколько указано в определении функции
                    </label>
                </div>
                <div className="custom-control custom-radio ">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="customControlValidation3"
                        name="radio"
                        value='answer2'
                        checked={this.props.form.thirdQuestion === 'answer2'}
                        onChange={this.props.onChange} />
                    <label className="custom-control-label" htmlFor="customControlValidation3">
                        Сколько указано в определении функции или меньше
                    </label>
                </div>
                <div className="custom-control custom-radio">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="customControlValidation4"
                        name="radio"
                        value='answer3'
                        checked={this.props.form.thirdQuestion === 'answer3'}
                        onChange={this.props.onChange} />
                    <label className="custom-control-label" htmlFor="customControlValidation4">
                        Сколько указано в определении функции или больше
                    </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                    <input
                        type="radio"
                        className="custom-control-input"
                        id="customControlValidation5"
                        name="radio"
                        value='answer4'
                        checked={this.props.form.thirdQuestion === 'answer4'}
                        onChange={this.props.onChange} />
                    <label className="custom-control-label" htmlFor="customControlValidation5">
                        Любое количество
                    </label>
                </div>
            </>
        )
    }
}


export default ThirdQuestion;