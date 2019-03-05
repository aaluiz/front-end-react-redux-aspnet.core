import ItemsList from '../components/ItemsList';
import addItem from '../actions/formActions/addItem';
import deleteItem from '../actions/formActions/deleteItem';
import {connect } from "react-redux";

const mapStateToProps = state => {
    return {
      items: state.formReducer
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onAdd: (name, price) => {
        dispatch(addItem(name, price));
      },
      onDelete: id => {
        dispatch(deleteItem(id));
      }
    };
  };
  
  //container components
  const ItemsListContainer = connect(mapStateToProps, mapDispatchToProps)(
    ItemsList
  );

  export default ItemsListContainer;