import {getrecipelist} from './recipelist';
import {matchers} from 'jest-json-schema'; 
import {getrecipeschema} from './recipeschema';

expect.extend(matchers);
describe("RecipeList", () => {


    it('validates my json', () => {
        var schema = getrecipeschema();
        var recipelist = getrecipelist();
        recipelist.every(recipe => expect(recipe).toMatchSchema(schema));
      });




 
});

