import React from "react"
import { Form, FormKeys } from "../App"
import _ from 'lodash'
import pluralise from '../utils/Pluralise'


const getPluralisedQuestionTitle = pluralise(['вопрос', 'вопроса', 'вопросов'])

type Props = {
    returnToMainPage: () => void
    form: Form
}

function isCorrectAnswer(value: any, questionId: FormKeys): boolean {
    const rightAnswers: Form = {
        firstQuestion: '1995',
        secondQuestion: {
            check1: true,
            check2: false,
            check3: true,
            check4: false
        },
        thirdQuestion: 'answer4',
        fourthQuestion: '2',
        fifthQuestion: {
            check1: true,
            check2: true,
            check3: true,
            check4: false,
            check5: false,
        },
        sixthQuestion: 'answer3'
    }
    return _.isEqual(value, rightAnswers[questionId])
}

function getCorrectAnswersCount(values: Form): number {
    let quantity = 0;

    _.forIn(values, (value, key) => {
        if (isCorrectAnswer(value, key as FormKeys)) {
            quantity++
        }
    })
    return quantity
}

const ResultPage = (props: Props) => {
    const correctAnswerCount: number = getCorrectAnswersCount(props.form)

    return (
        <>
            <div className='header'>Основы JavaScript</div>
            <div className='container '>
                <div className='content'>
                    <h4 className='mb-4 '>Вы ответили на {correctAnswerCount} {getPluralisedQuestionTitle(correctAnswerCount)} из 6 </h4>
                    <div>
                        <p>1) В каком году появился язык программирования JavaScript?</p>
                        {isCorrectAnswer(props.form.firstQuestion, 'firstQuestion') ? <p className='text-success'>Вы ответили верно!</p> : <p className='text-danger'>Не верно! Это 1995 год.</p>}
                    </div>
                    <hr />
                    <div>
                        <p>2) Какие из вариантов задают массив из элементов "a", "b" ?</p>
                        {isCorrectAnswer(props.form.secondQuestion, 'secondQuestion') ? <p className='text-success'>Вы ответили верно!</p> :
                            <p className='text-danger'>Не верно! Правильный ответ: "var a = new Array("a","b")" и "var a = [ "a", "b" ]"</p>}
                    </div>
                    <hr />
                    <div>
                        <p>3) Сколько параметров можно передать функции ?</p>
                        {isCorrectAnswer(props.form.thirdQuestion, 'thirdQuestion') ? <p className='text-success'>Вы ответили верно!</p> : <p className='text-danger'>Не верно! Правильный ответ: 'Любое количество'</p>}
                    </div>
                    <hr />
                    <div>
                        <p>4) Где в документе может располагаться тэг script по стандарту HTML ?</p>
                        {isCorrectAnswer(props.form.fourthQuestion, 'fourthQuestion') ? <p className='text-success'>Вы ответили верно!</p> : <p className='text-danger'>Не верно! Правильный ответ: 'В HEAD или в BODY'</p>}
                    </div>
                    <hr />
                    <div>
                        <p>5) На что влияет описание DOCTYPE в начале документа?</p>
                        {isCorrectAnswer(props.form.fifthQuestion, 'fifthQuestion') ?
                            <p className='text-success'>Вы ответили верно!</p> :
                            <p className='text-danger'>Не верно! Правильные ответы: "На внешний валидатор при проверке соответствия стандарту",
                            "На отображение, работу CSS-свойств" и "На наличие и отсутствие некоторых свойств в DOM"</p>}
                    </div>
                    <hr />
                    <div>
                        <p>6) Что такое ECMAScript?</p>
                        {isCorrectAnswer(props.form.sixthQuestion, 'sixthQuestion') ? <p className='text-success'>Вы ответили верно!</p> : <p className='text-danger'>Не верно! Правильный ответ: 'Спецификация языка Javascript'</p>}
                    </div>

                    <div> <button type='button' className='btn btn-dark mt-5' value='Вернуться к вопросам' onClick={props.returnToMainPage}> Вернуться на главную </button></div>
                    <hr />
                </div>
            </div>
        </>
    )
}
export default ResultPage;