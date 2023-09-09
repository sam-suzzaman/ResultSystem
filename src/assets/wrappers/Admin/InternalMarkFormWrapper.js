import styled from "styled-components";

const Wrapper = styled.section`
    .form {
        display: grid;
        grid-template-columns: minmax(auto, 400px) 1fr;
        grid-column-gap: 0.75vw;
    }
    .mark_input_form_wrapper {
        width: 100%;
        max-height: 40vh;
        overflow-y: auto;
        padding: 10px;
        padding-top: 0;
        scrollbar-width: auto; /* width of the scrollbar */
        scrollbar-color: #888 #f2f2f2; /* thumb color and track color */
    }
    /* Customize scrollbar for Chrome, Safari, and newer versions of Edge */
    .mark_input_form_wrapper::-webkit-scrollbar {
        width: 5px; /* width of the vertical scrollbar */
    }

    .mark_input_form_wrapper::-webkit-scrollbar-thumb {
        background-color: #888; /* color of the thumb */
        border-radius: 5px; /* rounded corners for the thumb */
    }

    .mark_input_form_wrapper::-webkit-scrollbar-track {
        background-color: #f2f2f2; /* color of the track */
    }

    .mark_input_form_container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        justify-content: space-between;
        align-items: center;
        grid-row-gap: 10px;
        grid-column-gap: 4px;
    }
    .mark_input_form_container {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        overflow: -moz-scrollbars-none; /* Firefox */
    }
    .mark_input_form_container::-webkit-scrollbar {
        display: none;
    }

    /* Target the first row */
    .mark_input_form_container > *:nth-child(-n + 5) {
        background-color: rgb(235, 235, 235);
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        padding: 4px 0;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mark_input_form_container .mark h3 {
        color: #363636;
        font-size: 13px;
        font-weight: 600;
        text-align: center;
        text-transform: capitalize;
    }

    .mark_input_form_container input {
        width: 100%;
        /* max-width: 50%; */
        height: 22px;
        box-shadow: 0px 0px 0px 0.2px;
        border: none;
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        border-radius: 1.5px;
        outline: none;
        margin: 0 auto;
        padding: 4px 4px;
    }
    .mark_input_form_container input.idField {
        min-width: 80px;
        font-size: 11px;
        border: none;
        outline: none;
    }
    .mark_input_form_container input:focus {
        border: 1px solid #9e9e9e;
        outline: none;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export default Wrapper;
