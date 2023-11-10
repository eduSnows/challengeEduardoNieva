import {ChangeEvent,  useState} from 'react';
import {StyledText} from "../../styles/StyledText";
import {StyledSwitch} from "../../styles/toggleSwitch/StyledSwitch";
import {StyledInput} from "../../styles/toggleSwitch/StyledInput";
import {StyledLabel} from "../../styles/toggleSwitch/StyledLabel";
import {useTheme} from "../../context/ThemeContext";

const ToggleSwitch = () => {

    const [checked, setChecked] = useState(false);

    const{ toggleTheme} = useTheme()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        toggleTheme()
    }
    return (
        <StyledLabel>
            <StyledText> Dark Mode </StyledText>
            <StyledInput checked={checked} type="checkbox" onChange={handleChange} />
            <StyledSwitch />
        </StyledLabel>
    );
};

export default ToggleSwitch;