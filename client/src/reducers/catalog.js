import { FETCH_CATALOG, FETCH_CATALOG_SUCCESS, FETCH_CATALOG_FAILURE, GET_INFO_DETAIL } from '../constants/ActionTypes';

const initialSate = {
  loading: true,
  catalog: [],
  selectedItem: [],
  currentId: null
};

export default function (state = initialSate, action) {
  switch (action.type) {
    case FETCH_CATALOG:
      return {
        ...state,
        selectedItem: [],
        currentId: null,
        loading: true
      };
    case FETCH_CATALOG_SUCCESS:
      return {
        ...state,
        loading: false,
        catalog: action.catalog
      };
    case FETCH_CATALOG_FAILURE:
      return {
        ...state,
        selectedItem: [],
        currentId: null,
      };
    case GET_INFO_DETAIL:
      return {
        ...state,
        currentId: action.currentId,
        selectedItem: state.catalog.filter(item => item.phoneId === parseInt(action.currentId, 10))
      }
    default:
      return state;
  }
}

