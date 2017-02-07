export const chooseCategory = (id) => {
    console.log('CATEGORY_CHOSEN but not dispatched', id);
    return {
        type: 'CATEGORY_CHOSEN', 
        text: 'Category was chosen', 
        index: id 
    }
};