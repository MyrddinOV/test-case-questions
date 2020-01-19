import React, { Component, createRef, RefObject } from "react"
import _ from 'lodash'
import { Form, defaultFormState } from "../App"
import { ModalWindow } from "../components/ModalWindow";
import FirstQuestion from "../components/Questions/FirstQuestion";
import localStorage from 'lockr'
import SecondQuestion from "../components/Questions/SecondQuestion";
import ThirdQuestion from "../components/Questions/ThirdQuestion";
import FourthQuestion from "../components/Questions/FourthQuestion";
import FifthQuestion from "../components/Questions/FifthQuestion";
import SixthQuestion from "../components/Questions/SixthQuestion";


type Props = {
    onQuestionSubmit: (values: Form) => void
}
type State = {
    form: Form,
}

export default class Questions extends Component<Props, State> {
    private modalRef: RefObject<any>
    static validate = (values: Form): boolean => {

        // validation for first, third forth and sixth questions
        if (!values.firstQuestion || !values.fourthQuestion || !values.thirdQuestion || !values.sixthQuestion) {
            return false
        }

        // validation for second question
        let hasSelectedSecondQuestion = false
        _.forIn(values.secondQuestion, (value) => {
            if (value) {
                hasSelectedSecondQuestion = true
            }
        })
        if (!hasSelectedSecondQuestion) {
            return false
        }

        // validation for fifth question
        let hasSelectedFifthQuestion = false
        _.forIn(values.fifthQuestion, (value) => {
            if (value) {
                hasSelectedFifthQuestion = true
            }
        })
        if (!hasSelectedFifthQuestion) {
            return false
        }
        return true
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            form: {
                firstQuestion: '',
                secondQuestion: { check1: false, check2: false, check3: false, check4: false, },
                thirdQuestion: '',
                fourthQuestion: '',
                fifthQuestion: { check1: false, check2: false, check3: false, check4: false, check5: false, },
                sixthQuestion: '',
            },
        };

        this.modalRef = createRef()
        this.onFirstQuestionChange = this.onFirstQuestionChange.bind(this);
        this.onSecondQuestionChange = this.onSecondQuestionChange.bind(this);
        this.onThirdQuestionChange = this.onThirdQuestionChange.bind(this);
        this.onFourthQuestionChange = this.onFourthQuestionChange.bind(this);
        this.onFifthQuestionChange = this.onFifthQuestionChange.bind(this);
        this.onSixthQuestionChange = this.onSixthQuestionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClearForm = this.onClearForm.bind(this);
    }

    onFirstQuestionChange(event: React.BaseSyntheticEvent) {
        event.persist()
        this.setState(prevState => {
            const form = {
                ...prevState.form,
                firstQuestion: event.target.value
            }
            localStorage.set('form', form)
            return { form }
        })


    }
    onSecondQuestionChange(event: React.BaseSyntheticEvent) {
        event.persist()
        this.setState(prevState => {
            const form = {
                ...prevState.form,
                secondQuestion: {
                    ...prevState.form.secondQuestion,
                    [event.target.name]: event.target.checked
                }
            }
            localStorage.set('form', form)
            return { form }
        })
    }
    onThirdQuestionChange(event: React.BaseSyntheticEvent) {
        event.persist()
        this.setState(prevState => {
            const form = {
                ...prevState.form,
                thirdQuestion: event.target.value
            }
            localStorage.set('form', form)
            return { form }
        })
    }
    onFourthQuestionChange(event: React.BaseSyntheticEvent) {
        event.persist()
        this.setState(prevState => {
            const form = {
                ...prevState.form,
                fourthQuestion: event.target.value
            }
            localStorage.set('form', form)
            return { form }
        })
    }
    onFifthQuestionChange(event: React.BaseSyntheticEvent) {
        event.persist()
        this.setState(prevState => {
            const form = {
                ...prevState.form,
                fifthQuestion: {
                    ...prevState.form.fifthQuestion,
                    [event.target.name]: event.target.checked
                }
            }
            localStorage.set('form', form)
            return { form }
        })
    }
    onSixthQuestionChange(event: React.BaseSyntheticEvent) {
        event.persist()
        this.setState(prevState => {
            const form = {
                ...prevState.form,
                sixthQuestion: event.target.value
            }
            localStorage.set('form', form)
            return { form }
        })
    }

    handleSubmit(event: React.FormEvent<any>) {
        event.preventDefault()
        const isValid = Questions.validate(this.state.form);

        if (isValid) {
            this.props.onQuestionSubmit(this.state.form)
        } else {
            if (this.modalRef.current) {
                this.modalRef.current.openModal()
            }
        }
    }

    onClearForm() {
        this.setState({ form: defaultFormState })
        localStorage.set('form', defaultFormState)
    }


    componentDidMount() {
        const saveFormDate: Form | undefined = localStorage.get('form')

        if (saveFormDate) {
            this.setState({ form: saveFormDate })
        }
    }

    render() {
        return (
            <>
                <div className='header'>Основы JavaScript</div>
                <div className='container' >
                    <form className="form-check" onSubmit={this.handleSubmit}>
                        <FirstQuestion
                            value={this.state.form.firstQuestion}
                            onChange={this.onFirstQuestionChange}
                        />
                        <hr />
                        <SecondQuestion
                            form={this.state.form}
                            onChange={this.onSecondQuestionChange}
                        />
                        <hr />
                        <ThirdQuestion
                            form={this.state.form}
                            onChange={this.onThirdQuestionChange}
                        />
                        <hr />
                        <FourthQuestion
                            value={this.state.form.fourthQuestion}
                            onChange={this.onFourthQuestionChange}
                        />
                        <hr />
                        <FifthQuestion
                            form={this.state.form}
                            onChange={this.onFifthQuestionChange}
                        />
                        <hr />
                        <SixthQuestion
                            form={this.state.form}
                            onChange={this.onSixthQuestionChange}
                        />
                        <div className='d-flex justify-content-between mb-5'>
                            <button type='button' className='btn btn-dark mt-2 ' onClick={this.onClearForm}> Очистить форму </button>
                            <button type='submit' className='btn btn-success mt-2'> Ответить </button>
                        </div>
                        <hr />
                    </form>

                    <ModalWindow
                        ref={this.modalRef}
                        onAccept={() => this.props.onQuestionSubmit(this.state.form)}
                    />
                </div>
            </>
        )
    }
}