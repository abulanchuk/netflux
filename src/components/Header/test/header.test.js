import React from "react";
import renderer from "react-test-renderer";
import Header from "../Header";
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';


test("First snapshot test ", () => {
    const component = renderer.create(
        <Header/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test("show button ADD MOVIE if showButton is true and selected movie is false ", () => {
    const component = renderer.create(
        <Header showButton={true}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})


Enzyme.configure({adapter: new Adapter()});
it('show button ADD MOVIE if showButton is true and selected movie is false', () => {
    const component = shallow(<Header showButton={true}/>);
    expect(component.find(".header-container__add-movie-button").exists()).toBeTruthy();
    expect(component.find(".header-container__loop").exists()).toBeFalsy();
});

it('show loop button if showButton is true and selected movie is true', () => {
    const component = shallow(<Header showButton={true} selectedMovie={true}/>);
    expect(component.find(".header-container__add-movie-button").exists()).toBeFalsy();
    expect(component.find(".header-container__loop").exists()).toBeTruthy();
});

it('should call setSelectedMovie with null on button click', () => {
    const mock = jest.fn();
    const component = shallow(<Header showButton={true} selectedMovie={true} setSelectedMovie={mock}/>);
    const button = component.find(".header-container__loop");
    button.simulate("click");
    expect(mock).toHaveBeenCalledWith(null);
});

it('should show movie modal on click ADD MOVIE button ', () => {
    const component = shallow(<Header showButton={true}/>);
    const button = component.find(".header-container__add-movie-button");
    expect(component.find("AddMovie").exists()).toBeFalsy();
    button.simulate("click");
    expect(component.find("AddMovie").exists()).toBeTruthy();
});



