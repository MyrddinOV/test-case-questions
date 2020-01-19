import React, { Component } from 'react'
import Questions from './pages/Questions';
import ResultPage from './pages/ResultPage';


export const defaultFormState = {
    firstQuestion: '',
    secondQuestion: {
        check1: false,
        check2: false,
        check3: false,
        check4: false,
    },
    thirdQuestion: '',
    fourthQuestion: '',
    fifthQuestion: {
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
    },
    sixthQuestion: '',
}

type SecondQuestion = {
    check1: boolean;
    check2: boolean;
    check3: boolean;
    check4: boolean;
}

type FifthQuestion = {
    check1: boolean;
    check2: boolean;
    check3: boolean;
    check4: boolean;
    check5: boolean;
}

export type Form = {
    firstQuestion: string;
    secondQuestion: SecondQuestion;
    thirdQuestion: string;
    fourthQuestion: string;
    fifthQuestion: FifthQuestion;
    sixthQuestion: string
}

export type FormKeys = 'firstQuestion'
    | 'secondQuestion'
    | 'thirdQuestion'
    | 'fourthQuestion'
    | 'fifthQuestion'
    | 'sixthQuestion'

type State = {
    form: Form;
    renderResultStep: boolean;
}

type Props = {}

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            form: defaultFormState,
            renderResultStep: false,
        }

        this.onQuestionSubmit = this.onQuestionSubmit.bind(this)
        this.returnToMainPage = this.returnToMainPage.bind(this)
    }

    onQuestionSubmit(value: Form) {
        this.setState({ form: value })
        this.setState({ renderResultStep: true })
        window.scrollTo(0, 0)
    }

    returnToMainPage() {
        this.setState({ renderResultStep: false })
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className='App'>
                {this.state.renderResultStep ? <ResultPage returnToMainPage={this.returnToMainPage} form={this.state.form} /> : <Questions onQuestionSubmit={this.onQuestionSubmit} />}
            </div>
        );
    }
}

export default App;
