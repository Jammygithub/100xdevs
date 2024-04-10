import React, { useState } from "react";
import Select, { components } from "react-select";
import Multiselect from "multiselect-react-dropdown";
import "./App.css";

function App() {
  const colourOptions = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "YELLOW", label: "YELLOW" },
    { value: "PINK", label: "PINK" },
    { value: "WHITE", label: "WHITE" },
    // ... add more options
  ];

  const checkboxStyles = {
    marginRight: "5px",
    backgroundColor: "#007bff", // Blue background for checked state
    borderColor: "#007bff", // Blue border for checked state
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const CheckboxOption = (props) => {
    const isSelected = selectedOptions.some(
      (option) => option.value === props.data.value
    );

    const handleChange = (event) => {
      handleOptionToggle(props.data);
    };

    return (
      <components.Option {...props}>
        <span onClick={(e) => e.stopPropagation()}>
          {" "}
          {/* Prevent label click from affecting dropdown */}
          <input
            type="checkbox"
            checked={isSelected}
            onChange={handleChange}
            // style={{ marginRight: "5px" }}
            style={isSelected ? checkboxStyles : null}
          />
          {props.label}
        </span>
      </components.Option>
    );
  };

  const handleOptionToggle = (option) => {
    const newSelectedOptions = [...selectedOptions]; // Create a copy
    const optionIndex = newSelectedOptions.findIndex(
      (item) => item.value === option.value
    );

    if (optionIndex !== -1) {
      // Option is already selected, deselect it
      newSelectedOptions.splice(optionIndex, 1);
    } else {
      // Option is not selected, select it
      newSelectedOptions.push(option);
    }

    setSelectedOptions(newSelectedOptions);
  };

  return (
    <div>
      <Select
        value={selectedOptions}
        isMulti
        name="colors"
        options={colourOptions}
        components={{ Option: CheckboxOption }}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={(selectedValues) => setSelectedOptions(selectedValues)}
        closeMenuOnSelect={false}
      />

      <Multiselect
        displayValue="key"
        onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        onSearch={function noRefCheck() {}}
        onSelect={function noRefCheck() {}}
        options={[
          {
            cat: "Group 1",
            key: "Option 1",
          },
          {
            cat: "Group 1",
            key: "Option 2",
          },
          {
            cat: "Group 1",
            key: "Option 3",
          },
          {
            cat: "Group 2",
            key: "Option 4",
          },
          {
            cat: "Group 2",
            key: "Option 5",
          },
          {
            cat: "Group 2",
            key: "Option 6",
          },
          {
            cat: "Group 2",
            key: "Option 7",
          },
        ]}
        showCheckbox
      />
    </div>
  );
}

export default App;
