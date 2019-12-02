import { User } from 'Store/types';
import reducer, { UserState } from './user.reducer';
import * as types from './user.types';

describe('userReducer tests', () => {
  it(`should handle ${types.REQUEST_LOG_USER_IN}`, () => {
    //* Arrange
    const initialState: UserState = {
      id: '',
      username: '',
      loading: {
        login: false
      }
    };
    const expectedState: UserState = { ...initialState, id: '', username: '', loading: { login: true } };

    //* Act
    const result = reducer(initialState, { type: types.REQUEST_LOG_USER_IN });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.SUCCESS_LOG_USER_IN}`, () => {
    //* Arrange
    const testData: User = {
      id: 'testId',
      username: 'nichsecord'
    };
    const initialState: UserState = {
      id: '',
      username: '',
      loading: {
        login: true
      }
    };
    const expectedState: UserState = { ...initialState, ...testData, loading: { login: false } };

    //* Act
    const result = reducer(initialState, { type: types.SUCCESS_LOG_USER_IN, payload: testData });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.FAIL_LOG_USER_IN}`, () => {
    //* Arrange
    const initialState: UserState = {
      id: '',
      username: '',
      loading: {
        login: true
      }
    };
    const expectedState: UserState = { ...initialState, id: '', username: '', loading: { login: false } };

    //* Act
    const result = reducer(initialState, { type: types.FAIL_LOG_USER_IN, payload: 'Oops, something went wrong' });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.LOG_USER_OUT}`, () => {
    //* Arrange
    const initialState: UserState = {
      id: 'testId',
      username: 'nichsecord',
      loading: {
        login: false
      }
    };
    const expectedState: UserState = { ...initialState, id: '', username: '' };

    //* Act
    const result = reducer(initialState, { type: types.LOG_USER_OUT });

    //* Assert
    expect(result).toEqual(expectedState);
  });
});
