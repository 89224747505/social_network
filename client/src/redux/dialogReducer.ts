import {InitialStateType} from "./types/dialogReducerTypes"

let initState:InitialStateType = {
    dialogs:[
    {id: 1, name: 'Иван'},
    {id: 2, name: 'Иннокентий'},
    {id: 3, name: 'Петр'},
    {id: 4, name: 'Афонасий'},
]};

const dialogReducer = (state = initState, action):InitialStateType => {return state;}

export default dialogReducer;