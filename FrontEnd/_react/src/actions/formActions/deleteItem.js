import {FORM_DELETE_ITEM} from '../../constants/constants';

const deleteItem = index => {
    return {
      type: FORM_DELETE_ITEM,
      index: index
    };
  };

  export default deleteItem;
  