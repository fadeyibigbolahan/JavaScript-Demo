// import { GET_TODOS } from '../actions/types';

const initialState = [
    {id: 1, text: 'Account', value: '0000' },
    {id: 2, text: 'Proxies', value: '0000' },
    {id: 3, text: 'Valid', value: '0000' },
    {id: 4, text: 'Invalid', value: '0000' },
    {id: 5, text: 'With hits', value: '0000' },
    {id: 6, text: 'Remaining', value: '0000'},
    {id: 7, text: 'Errors', value: '0000'}
];


const todoReducer = (state = initialState, action) => {
    return state;
};

export default todoReducer;