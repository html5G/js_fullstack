// import createStore from "./createStore";

export default function(...middleWares) {
    return (createStore) => (...arg) => {
        const store =  createStore(...arg)
    }
}