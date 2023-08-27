import React from 'react';
import img from '../../../assets/menu/dessert-bg.jpeg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'
import salad from '../../../assets/menu/salad-bg.jpg'
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../Hooks/useMenu';
import MenuList from '../../Shared/MenuList/MenuList';

const CategoryMenu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(dessert => dessert.category === 'dessert');
    const pizzas = menu.filter(pizza => pizza.category === 'pizza');
    const soups = menu.filter(soup => soup.category === 'soup');
    const salads = menu.filter(salad => salad.category === 'salad')
    return (
        <div>
            <Cover
                imgheading={"DESSERTS"}
                imgtext={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                img={img}
            ></Cover>
            <MenuList
                item={desserts}
                title={"dessert"}
            ></MenuList>

            {/* pizza section */}
            <Cover
                imgheading={"pizza"}
                imgtext={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                img={pizza}
            ></Cover>
            <MenuList
                item={pizzas}
                title={"pizza"}
            ></MenuList>

            {/* soup section */}
            <Cover
                imgheading={"soup"}
                imgtext={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                img={soup}
            ></Cover>
            <MenuList
                item={soups}
                title={"soup"}
            ></MenuList>

            {/* salad section  */}
            <Cover
                imgheading={"salad"}
                imgtext={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                img={salad}
            ></Cover>
            <MenuList
                item={salads}
                title={"salad"}
            ></MenuList>


        </div>
    );
};

export default CategoryMenu;