import { MainNavigation } from '../MainNavigation';
import { shallow } from 'enzyme';
import { fakeUser } from '../../../../tests';

describe('<MainNavigation/>', () => {
    it('It renders a bootstrap navbar with brand with alt text', async() =>{
        const wrapper = shallow(<MainNavigation currentUser={null}/>);
        const Brand = wrapper.find('Styles__Brand');
        expect(Brand.exists()).toBe(true);
        const BrandLogo = Brand.find("img");
        expect(BrandLogo.prop('alt').length).toBeGreaterThan(0);

    });
})