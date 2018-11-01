import { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let _modalRoot

const getModalRoot = () => {
  if (typeof _modalRoot === 'undefined') {
    _modalRoot = document.createElement('div')
    _modalRoot.classList.add('vtex-modal-root')
    const container = document.querySelector('.render-container')
    container.appendChild(_modalRoot)
  }

  return _modalRoot
}

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  el = document.createElement('div')

  modalRoot = getModalRoot()

  componentDidMount() {
    this.modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

export default Modal

