import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useMenu from '../../../Hooks/useMenu';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../FoodCard/FoodCard';
import TabFood from '../TabFood/TabFood';

const ShopTab = () => {
    const [menu] = useMenu();
    // const [newCategory, setNewCategory] = useState('a');
    const [tabIndex, setTabIndex] = useState(0);
    const salads = menu.filter(salad => salad.category === 'salad')
    const desserts = menu.filter(dessert => dessert.category === 'dessert');
    const pizzas = menu.filter(pizza => pizza.category === 'pizza');
    const soups = menu.filter(soup => soup.category === 'soup');
    const drinks = menu.filter(drink => drink.category === 'drinks');
    return (
        <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={'flex justify-center tabs'}>

                    <Tab>salad</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <TabFood
                        items={salads}
                    ></TabFood>
                </TabPanel>
                <TabPanel>
                    <TabFood
                        items={desserts}
                    ></TabFood>
                </TabPanel>
                <TabPanel>
                    <TabFood
                        items={pizzas}
                    ></TabFood>
                </TabPanel>
                <TabPanel>
                    <TabFood
                        items={soups}
                    ></TabFood>
                </TabPanel>
                <TabPanel>
                    <TabFood
                        items={drinks}
                    ></TabFood>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopTab;