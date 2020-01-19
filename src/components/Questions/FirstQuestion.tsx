import React, { FormEventHandler } from 'react'

type Props = {
    value: string;
    onChange: FormEventHandler
}

const FirstQuestion = ({ value, onChange }: Props) => (
    <div className="mb-3">
        <p>1) В каком году появился язык программирования JavaScript?</p>
        <textarea
            className="form-control "
            id="validationTextarea"
            placeholder="Введите правльный ответ"
            value={value}
            onChange={onChange} />
    </div>
)

export default FirstQuestion;
