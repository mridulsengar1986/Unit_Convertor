/*1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound*/
let convert_Btn = document.getElementById("convert_btn")
let len_Input =  document.getElementById("len")
let vol_Input =  document.getElementById("vol")
let mass_Input = document.getElementById("mass")
let display_input = document.getElementById("convert")


function convert(){
    
len_Input.value  = display_input.value + " meter" + " = " + (display_input.value * 3.281).toFixed(3) 
                    + "  feet" 
                    + " |  " + display_input.value + " feet " + "= " + ((display_input.value)/3.281).toFixed(3)
                    + " meter"


vol_Input.value  = display_input.value + " liters" + " = "  + (display_input.value *0.264).toFixed(3)
                    + " gallons"
                    + " |  " + display_input.value + " gallons" + "= " + ((display_input.value)/0.264).toFixed(3)
                    + " liters"

mass_Input.value = display_input.value + " kg" + "= " + (display_input.value * 2.204).toFixed(3)
                     + "pounds"
                     + " |  " + display_input.value + " pounds" + "= " + ((display_input.value)/2.204).toFixed(3)
                     + " kg"
                    
                    

}

