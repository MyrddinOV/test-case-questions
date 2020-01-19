import React, { FormEventHandler } from 'react'

type Props = {
    value: string;
    onChange: FormEventHandler
}

const FourthQuestion = ({ value, onChange }: Props) => (
    <div className="form-group">
        <p>4) Где в документе может располагаться тэг script по стандарту HTML ?</p>
        <select className="custom-select" value={value} onChange={onChange}>
            <option value="">Выберите правильный ответ</option>
            <option value="1">Где угодно, главное чтоб был</option>
            <option value="2">В HEAD или в BODY</option>
            <option value="3">Только в HEAD</option>
            <option value="4">Только в BODY</option>
        </select>
    </div>
)

export default FourthQuestion;
