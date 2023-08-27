
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import MenuList from '../../Shared/MenuList/MenuList';

const PopularMenu = () => {
    const [menus, loading] = useMenu();
    const popular = menus.filter(menu => menu.category === 'popular');
    if (loading) {
        return <>
            <span className="loading loading-infinity loading-lg"></span>
            <span className="loading loading-infinity loading-lg"></span>
            <span className="loading loading-infinity loading-lg"></span>

        </>
    }
    return (
        <div className='mx-[100px]'>
            <div className='mt-[92px]'>
                <SectionTitle
                    heading={"FROM OUR MENU"}
                    subheading={"---Check it out---"}
                ></SectionTitle>
            </div>
            <MenuList
                item={popular}
            ></MenuList>
        </div>
    );
};

export default PopularMenu;