import {
  Select,
  MenuItem,
  ListSubheader,
  FormControl,
  InputLabel,
  Box,
} from "../../node_modules/@mui/material";

function MyListSubheader(props) {
  return <ListSubheader {...props} />;
}
MyListSubheader.muiSkipListHighlight = true;

// my imports
import { useContext } from "react";
import { CityNameContext } from "@/MyContexts/Context";

export default function CitySelect() {
  // Define the custom styles
  const selectStyles = {
    // Styling for the entire FormControl, similar to the TextField wrapper
    "& .MuiOutlinedInput-root": {
      // Notched Outline for the Select input field
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "oklch(96.2% 0.059 95.617)",
      },
      // Hover state for the Select input field
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "oklch(96.2% 0.059 95.617)", // Same as normal state
      },
      // Focused state for the Select input field
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#FADA7A", // Gold color for focus
      },
      // Input text color (the selected value)
      "& .MuiSelect-select": {
        color: "oklch(96.2% 0.059 95.617)",
      },
      // Icon color (the dropdown arrow)
      "& .MuiSelect-icon": {
        color: "oklch(96.2% 0.059 95.617)",
      },
    },
    // Input Label for the Select
    "& .MuiInputLabel-root": {
      color: "oklch(96.2% 0.059 95.617)", // Default label color
    },
    // Focused Input Label color
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#FADA7A", // Gold color when focused
    },
    // Style for the Select label when it shrinks (like when a value is selected or the field is focused)
    "& .MuiInputLabel-shrink": {
      color: "#FADA7A", // Ensure the color is gold when shrunk/active
    },
  };
  const { city, setCity } = useContext(CityNameContext);

  return (
    <Box style={{ margin: "20px 0" }}>
      <FormControl
        fullWidth
        variant="outlined" // Select defaults to standard, so we must explicitly set it to "outlined"
        sx={selectStyles} // Apply the styles here
      >
        <InputLabel id="city-select-label">Select a City</InputLabel>
        <Select
          labelId="city-select-label"
          id="city-select"
          value={city}
          label="Select a City"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        >
          {/* Africa */}
          <MyListSubheader>Africa</MyListSubheader>
          <MenuItem value="Cairo">Cairo, Egypt</MenuItem>
          <MenuItem value="Lagos">Lagos, Nigeria</MenuItem>
          <MenuItem value="Johannesburg">Johannesburg, South Africa</MenuItem>
          <MenuItem value="Nairobi">Nairobi, Kenya</MenuItem>
          <MenuItem value="Casablanca">Casablanca, Morocco</MenuItem>
          <MenuItem value="Alexandria">Alexandria, Egypt</MenuItem>
          <MenuItem value="Cape Town">Cape Town, South Africa</MenuItem>
          <MenuItem value="Accra">Accra, Ghana</MenuItem>
          <MenuItem value="Addis Ababa">Addis Ababa, Ethiopia</MenuItem>
          <MenuItem value="Algiers">Algiers, Algeria</MenuItem>
          <MenuItem value="Dar es Salaam">Dar es Salaam, Tanzania</MenuItem>
          <MenuItem value="Khartoum">Khartoum, Sudan</MenuItem>
          <MenuItem value="Marrakech">Marrakech, Morocco</MenuItem>
          <MenuItem value="Tunis">Tunis, Tunisia</MenuItem>
          <MenuItem value="Kampala">Kampala, Uganda</MenuItem>
          <MenuItem value="Lusaka">Lusaka, Zambia</MenuItem>
          <MenuItem value="Dakar">Dakar, Senegal</MenuItem>
          <MenuItem value="Abidjan">Abidjan, Ivory Coast</MenuItem>
          <MenuItem value="Kigali">Kigali, Rwanda</MenuItem>
          <MenuItem value="Maputo">Maputo, Mozambique</MenuItem>

          {/* Asia */}
          <MyListSubheader>Asia</MyListSubheader>
          <MenuItem value="Tokyo">Tokyo, Japan</MenuItem>
          <MenuItem value="Beijing">Beijing, China</MenuItem>
          <MenuItem value="Shanghai">Shanghai, China</MenuItem>
          <MenuItem value="Mumbai">Mumbai, India</MenuItem>
          <MenuItem value="Delhi">Delhi, India</MenuItem>
          <MenuItem value="Seoul">Seoul, South Korea</MenuItem>
          <MenuItem value="Bangkok">Bangkok, Thailand</MenuItem>
          <MenuItem value="Hong Kong">Hong Kong, China</MenuItem>
          <MenuItem value="Singapore">Singapore</MenuItem>
          <MenuItem value="Dubai">Dubai, UAE</MenuItem>
          <MenuItem value="Istanbul">Istanbul, Turkey</MenuItem>
          <MenuItem value="Jakarta">Jakarta, Indonesia</MenuItem>
          <MenuItem value="Manila">Manila, Philippines</MenuItem>
          <MenuItem value="Kuala Lumpur">Kuala Lumpur, Malaysia</MenuItem>
          <MenuItem value="Tehran">Tehran, Iran</MenuItem>
          <MenuItem value="Baghdad">Baghdad, Iraq</MenuItem>
          <MenuItem value="Riyadh">Riyadh, Saudi Arabia</MenuItem>
          <MenuItem value="Bangalore">Bangalore, India</MenuItem>
          <MenuItem value="Ho Chi Minh City">
            Ho Chi Minh City, Vietnam
          </MenuItem>
          <MenuItem value="Osaka">Osaka, Japan</MenuItem>

          {/* Europe */}
          <MyListSubheader>Europe</MyListSubheader>
          <MenuItem value="London">London, United Kingdom</MenuItem>
          <MenuItem value="Paris">Paris, France</MenuItem>
          <MenuItem value="Berlin">Berlin, Germany</MenuItem>
          <MenuItem value="Madrid">Madrid, Spain</MenuItem>
          <MenuItem value="Rome">Rome, Italy</MenuItem>
          <MenuItem value="Amsterdam">Amsterdam, Netherlands</MenuItem>
          <MenuItem value="Vienna">Vienna, Austria</MenuItem>
          <MenuItem value="Barcelona">Barcelona, Spain</MenuItem>
          <MenuItem value="Athens">Athens, Greece</MenuItem>
          <MenuItem value="Prague">Prague, Czech Republic</MenuItem>
          <MenuItem value="Budapest">Budapest, Hungary</MenuItem>
          <MenuItem value="Stockholm">Stockholm, Sweden</MenuItem>
          <MenuItem value="Copenhagen">Copenhagen, Denmark</MenuItem>
          <MenuItem value="Brussels">Brussels, Belgium</MenuItem>
          <MenuItem value="Warsaw">Warsaw, Poland</MenuItem>
          <MenuItem value="Dublin">Dublin, Ireland</MenuItem>
          <MenuItem value="Lisbon">Lisbon, Portugal</MenuItem>
          <MenuItem value="Oslo">Oslo, Norway</MenuItem>
          <MenuItem value="Zurich">Zurich, Switzerland</MenuItem>
          <MenuItem value="Milan">Milan, Italy</MenuItem>

          {/* North America */}
          <MyListSubheader>North America</MyListSubheader>
          <MenuItem value="New York">New York City, USA</MenuItem>
          <MenuItem value="Los Angeles">Los Angeles, USA</MenuItem>
          <MenuItem value="Mexico City">Mexico City, Mexico</MenuItem>
          <MenuItem value="Toronto">Toronto, Canada</MenuItem>
          <MenuItem value="Chicago">Chicago, USA</MenuItem>
          <MenuItem value="Houston">Houston, USA</MenuItem>
          <MenuItem value="Miami">Miami, USA</MenuItem>
          <MenuItem value="Vancouver">Vancouver, Canada</MenuItem>
          <MenuItem value="San Francisco">San Francisco, USA</MenuItem>
          <MenuItem value="Guadalajara">Guadalajara, Mexico</MenuItem>
          <MenuItem value="Montreal">Montreal, Canada</MenuItem>
          <MenuItem value="Boston">Boston, USA</MenuItem>
          <MenuItem value="Las Vegas">Las Vegas, USA</MenuItem>
          <MenuItem value="Washington">Washington D.C., USA</MenuItem>
          <MenuItem value="Philadelphia">Philadelphia, USA</MenuItem>
          <MenuItem value="Phoenix">Phoenix, USA</MenuItem>
          <MenuItem value="Seattle">Seattle, USA</MenuItem>
          <MenuItem value="San Diego">San Diego, USA</MenuItem>
          <MenuItem value="Atlanta">Atlanta, USA</MenuItem>
          <MenuItem value="Dallas">Dallas, USA</MenuItem>

          {/* South America */}
          <MyListSubheader>South America</MyListSubheader>
          <MenuItem value="Sao Paulo">São Paulo, Brazil</MenuItem>
          <MenuItem value="Buenos Aires">Buenos Aires, Argentina</MenuItem>
          <MenuItem value="Rio de Janeiro">Rio de Janeiro, Brazil</MenuItem>
          <MenuItem value="Lima">Lima, Peru</MenuItem>
          <MenuItem value="Bogota">Bogotá, Colombia</MenuItem>
          <MenuItem value="Santiago">Santiago, Chile</MenuItem>
          <MenuItem value="Caracas">Caracas, Venezuela</MenuItem>
          <MenuItem value="Brasilia">Brasília, Brazil</MenuItem>
          <MenuItem value="Medellin">Medellín, Colombia</MenuItem>
          <MenuItem value="Quito">Quito, Ecuador</MenuItem>
          <MenuItem value="Montevideo">Montevideo, Uruguay</MenuItem>
          <MenuItem value="La Paz">La Paz, Bolivia</MenuItem>
          <MenuItem value="Asuncion">Asunción, Paraguay</MenuItem>
          <MenuItem value="Guayaquil">Guayaquil, Ecuador</MenuItem>
          <MenuItem value="Cali">Cali, Colombia</MenuItem>
          <MenuItem value="Salvador">Salvador, Brazil</MenuItem>
          <MenuItem value="Fortaleza">Fortaleza, Brazil</MenuItem>
          <MenuItem value="Belo Horizonte">Belo Horizonte, Brazil</MenuItem>
          <MenuItem value="Cordoba">Córdoba, Argentina</MenuItem>
          <MenuItem value="Cartagena">Cartagena, Colombia</MenuItem>

          {/* Oceania */}
          <MyListSubheader>Oceania</MyListSubheader>
          <MenuItem value="Sydney">Sydney, Australia</MenuItem>
          <MenuItem value="Melbourne">Melbourne, Australia</MenuItem>
          <MenuItem value="Brisbane">Brisbane, Australia</MenuItem>
          <MenuItem value="Perth">Perth, Australia</MenuItem>
          <MenuItem value="Auckland">Auckland, New Zealand</MenuItem>
          <MenuItem value="Adelaide">Adelaide, Australia</MenuItem>
          <MenuItem value="Wellington">Wellington, New Zealand</MenuItem>
          <MenuItem value="Christchurch">Christchurch, New Zealand</MenuItem>
          <MenuItem value="Gold Coast">Gold Coast, Australia</MenuItem>
          <MenuItem value="Canberra">Canberra, Australia</MenuItem>
          <MenuItem value="Hobart">Hobart, Australia</MenuItem>
          <MenuItem value="Darwin">Darwin, Australia</MenuItem>
          <MenuItem value="Suva">Suva, Fiji</MenuItem>
          <MenuItem value="Port Moresby">
            Port Moresby, Papua New Guinea
          </MenuItem>
          <MenuItem value="Noumea">Noumea, New Caledonia</MenuItem>
          <MenuItem value="Papeete">Papeete, French Polynesia</MenuItem>
          <MenuItem value="Port Vila">Port Vila, Vanuatu</MenuItem>
          <MenuItem value="Apia">Apia, Samoa</MenuItem>
          <MenuItem value="Nuku'alofa">Nuku'alofa, Tonga</MenuItem>
          <MenuItem value="Honiara">Honiara, Solomon Islands</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
