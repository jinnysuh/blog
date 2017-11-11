import React from 'react'
import {Modal} from 'react-bootstrap'

export default function Popup({onHide, show, text}) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <h4>Hello {text} welcome to my blog!!!</h4>
            </Modal.Header>
            <Modal.Body>
                <p>your username is {text}</p>
            </Modal.Body>
            <Modal.Footer>
                <div
                    className="btn btn-default"
                    onClick={onHide}
                >
                    OK
                </div>
            </Modal.Footer>
        </Modal>
    )
}