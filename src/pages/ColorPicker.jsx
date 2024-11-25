import { useState, createContext } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import '../style/Test/color-picker.css';

// Create a context to share the navbar background color across components
export const NavbarContext = createContext();

const ColorPicker = () => {
    
    // State to store the currently selected color for text, background, and navbar
    const [color, setColor] = useState("white"); // Default text color is white
    const [background, setBackground] = useState(); // Background color is initially undefined
    const [navbar, setNavbar] = useState(); // Navbar background color is also initially undefined

    // Event handler to update the color when the user selects a new color
    const handleColorChange = (e) => {
        setColor(e.target.value); // Update the color state with the new value
    }

    // Event handler to update the background color when the user selects a new color
    const handleBackgroundChange = (e) => {
        setBackground(e.target.value); // Update the background state with the new value
    }

    // Event handler to update the navbar background color when the user selects a new color
    const handleNavbarBackgroundChange = (e) => {
        setNavbar(e.target.value); // Update the navbar background color state
    }

    return (
        <>
            {/* Provide the navbar background color to the Navbar component via context */}
            <NavbarContext.Provider value={navbar}>
                <Navbar />
            </NavbarContext.Provider>

            {/* Wrapper div that holds the color picker section and dynamically sets the background color */}
            <div className="color-picker-wrapper" style={{ backgroundColor: background }}>
                
                {/* Title for the color picker */}
                <Title title="Color picker" />
            
                {/* Section where users can interact with the color pickers */}
                <section className="color-picker-container">

                    {/* Display the current selected color as a box */}
                    <div className="display" style={{ backgroundColor: color }}></div>
                    
                    {/* Label and input to choose a color for the text */}
                    <label htmlFor="color">Choose a color</label>
                    <input 
                        type="color" // Input type color lets the user pick a color
                        name="color" 
                        id="myColor" 
                        onChange={handleColorChange} // Call handleColorChange when the color changes
                    />
                    
                    {/* Label and input to change the background color */}
                    <label htmlFor="background-color">Change background color</label>
                    <input 
                        type="color" // Another color picker for changing the background color
                        name="color" 
                        id="background-color"
                        onChange={handleBackgroundChange} // Call handleBackgroundChange when the background color changes
                    />

                    {/* Label and input to change the navbar background color */}
                    <label htmlFor="navbar-background-color">Change navbar background color</label>
                    <input 
                        type="color" // Another color picker for changing the navbar background
                        name="color" 
                        id="navbar-background-color"
                        onChange={handleNavbarBackgroundChange} // Call handleNavbarBackgroundChange when the navbar color changes
                    />
                </section>
            </div>
        </>
    );
}

export default ColorPicker;
