import * as types from '../../src/constants/ActionTypes';
import catalogReducer from '../../src/reducers/catalog';

describe('Catalog reducer', () => {
  const initialSate = {
    loading: true,
    catalog: [],
    selectedItem: {},
    currentId: null
  };
  const fakeCatalog = [{ name: 'my name' }];

  it('should return initial state', () => {
    expect(catalogReducer(undefined, { loading: true, selectedItem: {}, currentId: null })).toEqual(initialSate)
  });

  it('should handle FETCH_CATALOG', () => {
    const fakeAction = {
      type: types.FETCH_CATALOG
    };
    const expectedResult = { loading: true, selectedItem: {}, currentId: null };
    expect(catalogReducer({}, fakeAction)).toEqual(expectedResult);
  });

  it('should handle FETCH_CATALOG_SUCCESS', () => {
    const fakeAction = {
      type: types.FETCH_CATALOG_SUCCESS,
      catalog: fakeCatalog
    };
    const expectedResult = { loading: false, catalog: fakeCatalog }
    expect(catalogReducer({}, fakeAction)).toEqual(expectedResult);
  });

  it('should handle FETCH_CATALOG_FAILURE', () => {
    const fakeAction = {
      type: types.FETCH_CATALOG_FAILURE
    };
    expect(catalogReducer({}, fakeAction)).toEqual({ selectedItem: {}, currentId: null });
  });
});
