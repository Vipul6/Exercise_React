import React from 'react'
import Loader from 'react-loader'
import PropTypes from 'prop-types'
import _ from 'lodash'
import QuestionTemplate from './questionAnswer'
import Modal from './resultModal'
import Header from '../common/header'
import { LOADER_OPTIONS } from '../../constants/constants'

export default class QuizComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    
    componentDidMount() {
        this.props.actions.getDataRequest();
    }

    onCloseModal() {
        const { actions } = this.props;
        actions.closeModal();
    }

    submitForm() {
        const { actions } = this.props;
        let payload = {
            answer: [
                "de Boulogne",
                "de Boulogne",
                "de Boulogne",
                "de Boulogne"
            ]
        }
        actions.submitDataRequest(payload);
    }

    render() {
         const {
            actions, 
            errorMessage, 
            isFetching, 
            quiz,
            isModalOpen
        } = this.props
        return (
            <Loader loaded={!isFetching} className='spinner' options={LOADER_OPTIONS}>
                <div className="container-fluid">
                    <Header/>
                    <main className="main-container">
                        {quiz.length > 0 && 
                            _.map(quiz, (item, index) => (
                                <QuestionTemplate 
                                    key={ index + '_2' } 
                                    actions={ actions }
                                    questionItem={ item }
                                    isFetching={ isFetching }
                                    onClose={ this.onClose }
                                />
                            ))
                        }
                        <section className="submit-btn-container">
                            <button type='submit' className='btn-primary' onClick={ this.submitForm }>Submit</button>
                        </section>
                    </main>
                </div>
                <Modal isOpen={ isModalOpen } onClose={ this.onCloseModal }>
                </Modal>
            </Loader>
        )
    }
}

QuizComponent.propTypes = {
    actions: PropTypes.object.isRequired,
    errorMessage: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
};
