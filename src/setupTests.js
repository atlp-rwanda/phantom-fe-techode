import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import "core-js"


Enzyme.configure({ 
    adapter: new Adapter(),
    esModuleInterop: true,
});