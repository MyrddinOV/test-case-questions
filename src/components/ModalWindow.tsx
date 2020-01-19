import React, { Component } from 'react'
import Modal from 'react-modal'
import '../index.scss'

Modal.setAppElement('#root')

type State = {
  isOpen: boolean;
}

type Props = {
  onAccept: () => void
}

export class ModalWindow extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }


  openModal() {
    this.setState({ isOpen: true })
  }

  closeModal() {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <Modal
        isOpen={this.state.isOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={this.closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >

        <p className='modal-text'>Все вопросы, на которые не даны ответы, считаются <strong> неверными</strong>,
        Вы уверены что хотите продолжить?
        </p>
        <div className='modal-button'>
          <button className='btn btn-success mr-5 btn-size' onClick={this.props.onAccept}>Да</button>
          <button className='btn btn-danger ml-5 btn-size' onClick={this.closeModal}>Нет</button>
        </div>
      </Modal>
    )
  }
}

