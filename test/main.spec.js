import { assert } from 'chai';
import app from './main';

describe('App', function(){
    it('app should return hello', function(){
        assert.equal(app(), 'hello');
    })
})