import {FORM_ADD_ITEM} from '../constants/constants';

const addItem = (name, price) => {
    return {
      type: FORM_ADD_ITEM,
      item: {
        name: name,
        price: price
      }
    };
  };

  export default addItem;