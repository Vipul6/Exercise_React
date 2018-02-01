import { QUIZ_DATA } from '../constants/constants'

export const getData = () => (
    new Promise(function(resolve, reject) {
        fetch(QUIZ_DATA)
        .then((response) => response.json())
        .then((res) => {
            const data = res.quiz
            setTimeout(() => resolve(data), 500)
        })
        .catch((error) => {
            reject(error);
        });
    })
)

export const submitData = (payload) => (
    new Promise(function(resolve, reject) {
        fetch(QUIZ_DATA, {
            method: 'post',
            body: JSON.stringify(payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response)
        .then((response) => setTimeout(() => resolve(response.json()), 500))
        .catch((error) => {
            reject(error);
        })
    })
)
