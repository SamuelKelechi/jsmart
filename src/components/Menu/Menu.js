import React, { useState } from "react";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import './Menu.css'

const Menu = () => {
  const [menuType, setMenuType] = useState("drinks");


  const foodMenu = [
    { id: 1, name: "Chicken vegetable with Ugba", price: "$10" },
    { id: 2, name: "Vegetable snail with Ugba", price: "$15" },
    { id: 3, name: "Catfish pepper soup", price: "$12" },
    { id: 4, name: "Pepper Meat", price: "$12" },
    { id: 5, name: "Pepper Turkey", price: "$12" },
    { id: 6, name: "Spaghetti with Turkey", price: "$12" },
    { id: 7, name: "Yam & Egg sauce", price: "$12" },
    { id: 8, name: "Barbeque (catfish&croka)", price: "$12" },
    { id: 9, name: "Shawarma", price: "$12" },
    { id: 10, name: "Smoody", price: "$12" },
    { id: 11, name: "Isi Ewu", price: "$12" },
    { id: 12, name: "Nkwobi", price: "$12" },
    { id: 13, name: "Grilled Chicken", price: "$12" },
    { id: 14, name: "Roasted fish", price: "$12" },
    { id: 15, name: "Stockfish Vegetable with Ugba", price: "$12" },

  ];

  return (
    <div className='Menu_Container'>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='Menu_Hero'>
                <GiKnifeFork size={80}/>
                <br/>
                <h1 className='Menu_Header'>OUR MENU</h1>
                <h4 className='Menu_Texts'>ORDER & TASTE</h4>
        </div>
        <div className='Menu_Container_Wrapper'>
            <MenuContainer>
              {/* Toggle Buttons */}
              <ToggleButtonGroup>
                <ToggleButton
                  isActive={menuType === "drinks"}
                  onClick={() => setMenuType("drinks")}
                >
                  Drinks Menu
                </ToggleButton>
                <ToggleButton
                  isActive={menuType === "food"}
                  onClick={() => setMenuType("food")}
                >
                  Food Menu
                </ToggleButton>
              </ToggleButtonGroup>

              {/* Render the Selected Menu */}
              <MenuList>
                {menuType === "drinks" &&
                  <>
                  <MenuHeader>BRANDY</MenuHeader>
                    <MenuItem>
                        <span>HENNESSEY VS</span>
                        <span>₦80,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>HENNESSEY VSOP</span>
                        <span>₦140,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>REMY MARTINS</span>
                        <span>₦120,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>MARTEL BLUE SWIFT</span>
                        <span>₦130,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>MARTEL VS</span>
                        <span>₦80,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>HENNESSEY XO</span>
                        <span>₦500,000</span>
                    </MenuItem>

                    <MenuHeader>WHISKY</MenuHeader>
                    <MenuItem>
                        <span>GLENFIDDICH 21 YEARS</span>
                        <span>₦550,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>GLENFIDDICH 18 YEARS</span>
                        <span>₦150,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>GLENFIDDICH 12 YEARS</span>
                        <span>₦60,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>JAMESON BLACK</span>
                        <span>₦55,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>BLACK LABEL</span>
                        <span>₦55,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>JACK DANIEL</span>
                        <span>₦40,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>JAMESON ORIGINAL</span>
                        <span>₦40,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>RED LABEL</span>
                        <span>₦30,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>WILLIAM LAWSON</span>
                        <span>₦22,000</span>
                    </MenuItem>
                    
                    <MenuHeader>TEQUILA</MenuHeader>
                    <MenuItem>
                        <span>AZUL</span>
                        <span>₦550,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>OLMECA</span>
                        <span>₦50,000</span>
                    </MenuItem>

                    <MenuHeader>CHAMPAGNE</MenuHeader>
                    <MenuItem>
                        <span>MOET ROSE</span>
                        <span>₦180,000</span>
                    </MenuItem>

                    <MenuHeader>WINE</MenuHeader>
                    <MenuItem>
                        <span>DON JULO</span>
                        <span>₦500,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>BELAIRE ROSE</span>
                        <span>₦85,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>CAMPARI BIG</span>
                        <span>₦35,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>CAMPARI MEDIUM</span>
                        <span>₦25,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>ANDRE</span>
                        <span>₦20,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>VERVE DE NEUVE</span>
                        <span>₦16,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>CARLO ROSIE</span>
                        <span>₦15,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>LAVITA ROSE</span>
                        <span>₦15,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>FOUR COUSINS</span>
                        <span>₦15,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>KAOS</span>
                        <span>₦10,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>CHAMDOR</span>
                        <span>₦5,000</span>
                    </MenuItem>

                    <MenuHeader>BEER</MenuHeader>
                    <MenuItem>
                        <span>HEINEKEN & BUDWEISER</span>
                        <span>₦3,500</span>
                    </MenuItem>
                    <MenuItem>
                        <span>OTHER BEERS</span>
                        <span>₦2,000</span>
                    </MenuItem>

                    <MenuHeader>NON-ALCOHOLIC</MenuHeader>
                    <MenuItem>
                        <span>HOLLANDIA</span>
                        <span>₦4,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>WATER, SMALL</span>
                        <span>₦500</span>
                    </MenuItem>
                    <MenuItem>
                        <span>COKE</span>
                        <span>₦1,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>BIG WATER</span>
                        <span>₦1,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>VITA MILK</span>
                        <span>₦3,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>ACTIVE</span>
                        <span>₦3,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>EXOTIC</span>
                        <span>₦3,000</span>
                    </MenuItem>

                    <MenuHeader>ENERGY DRINK</MenuHeader>
                    <MenuItem>
                        <span>FEARLESS</span>
                        <span>₦3,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>REDBULL</span>
                        <span>₦4,000</span>
                    </MenuItem>
                    <MenuItem>
                        <span>BLACK BULLET</span>
                        <span>₦3,000</span>
                    </MenuItem>

                    <MenuHeader>BITTERS</MenuHeader>
                    <MenuItem>
                        <span>ORIGIN PLASTIC</span>
                        <span>₦3,000</span>
                    </MenuItem>
                    <h5>DEAR CUSTOMER, WE APPRECIATED YOUR PATRONAGE AND WISH TO INFORM YOU THAT SALE OF BEERS IN THE VIP IS CONSIDERED AFTER YOUR INITIAL ORDER OF OUR WINE WHISKEY OR BRANDY. THANKS FOR YOUR UNDERSTANDING AND COOPERATION</h5>
                  </>
                    
                }

                {menuType === "food" &&
                  foodMenu.map((item) => (
                    <MenuItem key={item.id}>
                      <span>{item.name}</span>
                      <span>
                        <Order
                            href="https://wa.me/234"
                            text="I would like to order for "
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Order Now
                        </Order>
                      </span>
                    </MenuItem>
                  ))}
              </MenuList>
        </MenuContainer>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
  )
}


const MenuContainer = styled.div`
  text-align: center;
  width: 700px;
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const ToggleButton = styled.button`
  padding: 10px 10px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: ${({ isActive }) => (isActive ? "white" : "#333")};
  background-color: ${({ isActive }) => (isActive ? "#333" : "#f0f0f0")};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#333" : "#ddd")};
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Order = styled.a`
  padding: 5px 8px;
  text-decoration: none;
  border-radius: 15px;
  font-weight: bold;
  border: 1px solid green;
  color: #333333;
  
  &:hover {
    border: 1px solid green;
  }
`

const MenuItem = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  margin: 2px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  font-weight: bold;

  span {
    font-size: 16px;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;
const MenuHeader = styled.h4`
  max-width: 400px;
  width: 100%;
  text-align: left;
  margin-bottom: 3px;
  color:rgb(7, 160, 86);
  font-weight: bold;
`


export default Menu