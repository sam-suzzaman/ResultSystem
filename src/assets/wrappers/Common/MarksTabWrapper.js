import styled from "styled-components";

const Wrapper = styled.section`
    ul[role="tablist"] {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 16px;
        background-color: #eee;
        width: 100%;
        max-width: fit-content;
        margin: 0 auto;
        border-radius: 25px;
    }
    .react-tabs__tab {
        display: inline-block;
        border: none;
        border-radius: 30px;
        border-bottom: none;
        padding: 4px 12px;
        margin-right: 6px;
        cursor: pointer;
        border: 1px solid #ccc;
    }
    .react-tabs__tab:last-child {
        margin-right: 0;
    }

    .react-tabs__tab--selected::after {
        display: none;
    }
`;

export default Wrapper;
