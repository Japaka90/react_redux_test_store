import { createStore } from 'redux';
//import Category from '../components/Category';

export default function initStore(){
    
    //функция редьюсер (будет изменять стейт и стор)
    function changeState(state = [], action) {
        if (action.type === 'CATEGORY_CHOOSEN') {
            return [
                ...state, action.index
            ]
        }
        console.log(17, action);
        return state;
    }  
    

    //создаю стор, передавая в него функцию редьюсер и плагин dev-tools 
    const store = createStore(changeState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


    // подписываю store на любые изменения в state
    store.subscribe(() => {
      console.log('subscribe', store.getState());
//        store.dispatch({ type: 'CATEGORY_CHOSEN', text: 'Category was chosen', index: 'category1' });
    });
    
   //проверка, что в стор хоть что-то диспачится   
      store.dispatch({ type: 'CATEGORY_CHOOSEN', index: 'category1' });
//    console.log(19, 'store.getState after dispatch', store.getState());
    

// диспачится по клику. это надо повесить на выбранную категорию 
    function testDispatchState(category) {
    store.dispatch({ type: 'CATEGORY_CHOOSEN', text: 'Category was chosen(test)', index: category }); 
    };

    return store
};

//export default function testDispatchState(store) {
//    store.dispatch({ type: 'CATEGORY_CHOSEN_test', text: 'Category was chosen(test)' }); 
//    };
