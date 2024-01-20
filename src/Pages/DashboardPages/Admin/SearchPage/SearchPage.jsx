import React, { useState } from "react";
import styled from "styled-components";
import SearchSection from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SearchPageCom/SearchSection";
import BeforeSearch from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SearchPageCom/BeforeSearch";
import ResultTable from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SearchPageCom/ResultTable";
import { useQuery } from "react-query";
import { getAllHandler } from "../../../../utils/fetchHandlers";

const SearchPage = () => {
    // States
    const [student, setStudent] = useState(true);
    const [roll, setRoll] = useState("");
    const {
        isLoading,
        isError,
        data: studentData,
        error,
    } = useQuery(
        ["search-result", roll],
        () =>
            getAllHandler(
                `https://student-management-delta.vercel.app/result/specific-student/${roll}`
            ),
        {
            enabled: !!roll,
        }
    );

    if (studentData) {
        console.log(studentData);
    }

    return (
        <Wrapper>
            {/* search form row */}
            <SearchSection setRoll={setRoll} />

            {/* Without Result */}
            {!studentData && <BeforeSearch />}

            {/*with search result row */}
            {student && (
                <div className="search-res-container w-full ">
                    {studentData?.map((data) => {
                        return <ResultTable data={data} key={data?._id} />;
                    })}
                </div>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .search-res-container {
        width: 100%;
        width: 1145px;
    }
`;

export default SearchPage;
