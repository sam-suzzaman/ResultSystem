import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";

// Semester Data
const semesters = [
    {
        _id: 1,
        value: 1,
        name: "First Semester",
    },
    {
        _id: 2,
        value: 2,
        name: "Second Semester",
    },
    {
        _id: 3,
        value: 3,
        name: "Third Semester",
    },
    {
        _id: 4,
        value: 4,
        name: "Fourth Semester",
    },
    {
        _id: 5,
        value: 5,
        name: "Fifth Semester",
    },
    {
        _id: 6,
        value: 6,
        name: "Sixth Semester",
    },
    {
        _id: 7,
        value: 7,
        name: "Seventh Semester",
    },
    {
        _id: 8,
        value: 8,
        name: "Eighth Semester",
    },
];

const SearchSection = ({ setRoll, setSearchQuery }) => {
    // States
    const [filter, setFilter] = useState([]);

    // hooks
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const query = `semester=${filter.join(",")}`;
        setSearchQuery(query);
    }, [filter]);

    // handle checked or unchecked
    const checkUncheckHandler = (data, isChecked) => {
        if (isChecked) {
            if (!filter.includes(data.value)) {
                setFilter([...filter, data.value]);
            } else {
                return;
            }
        } else {
            if (filter.includes(data.value)) {
                const temp = filter.filter((value) => value !== data.value);
                setFilter(temp);
            } else {
                return;
            }
        }
    };
    //  form submit handler
    const onSubmit = (data) => {
        setRoll(data.roll);
    };

    return (
        <Wrapper>
            <div className="search-sec-container">
                {/* <h2 className="text-sm capitalize text-neutral opacity-80 font-semibold">
                    search student
                </h2> */}

                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full flex justify-center mt-1"
                >
                    <div class="input-box">
                        <CiSearch className="icon" />
                        <input
                            type="text"
                            placeholder="Enter Roll Number"
                            className="number roll-field"
                            {...register("roll", {
                                required: {
                                    value: true,
                                    message:
                                        "Student Roll number required to search",
                                },
                            })}
                        />
                        {errors?.roll && (
                            <span className="label-text-alt capitalize text-red-600 text-[10px] mt-1 font-semibold text-right">
                                {errors?.roll?.message}
                            </span>
                        )}
                        <button type="submit" class="button">
                            Search
                        </button>

                        <div className="dropdown dropdown-end filter">
                            <div
                                tabIndex={0}
                                role="button"
                                className=" button2"
                            >
                                Filter
                            </div>
                            <ul
                                tabIndex={0}
                                className="dropdown-content z-[1] menu p-2 mt-4 rounded-sm shadow bg-base-200 w-[180px]"
                            >
                                {semesters?.map((data) => {
                                    return (
                                        <div key={data._id}>
                                            <label className="label justify-start cursor-pointer py-[4px]">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-primary checkbox-xs w-[12px] h-[12px] rounded-sm mr-2"
                                                    onChange={(e) =>
                                                        checkUncheckHandler(
                                                            data,
                                                            e.target.checked
                                                        )
                                                    }
                                                />
                                                <span className="label-text number text-primary text-[13px]">
                                                    {data.name}
                                                </span>
                                            </label>
                                        </div>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: sticky;
    top: -15px;
    background-color: #fff;
    z-index: 1;
    padding: 10px 0 16px;
    .search-sec-container {
        width: 100%;
        max-width: 1145px;
    }
    .input-box {
        position: relative;
        height: 50px;
        width: 100%;
        background: #fff;
        border-radius: 6px;
        /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15); */
        box-shadow: 1px 2px 10px #e1e3ec;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
    .input-box .icon,
    .input-box .button,
    .filter {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .input-box .icon {
        left: 20px;
        font-size: 25px;
        color: #707070;
    }
    .input-box .roll-field {
        height: 100%;
        width: 100%;
        outline: none;
        font-size: 16px;
        font-weight: 500;
        border: none;
        padding: 0 155px 0 65px;
        background-color: transparent;
    }
    .input-box .roll-field::placeholder {
        font-size: 15px;
        font-weight: 400;
    }
    .input-box .button {
        right: 8px;
        font-size: 15px;
        letter-spacing: 1px;
        font-weight: 500;
        color: #fff;
        border: none;
        padding: 7px 30px;
        border-radius: 4px;
        background-color: var(--primary-clr);
        cursor: pointer;
    }
    .input-box .button2 {
        font-size: 15px;
        letter-spacing: 1px;
        font-weight: 500;
        color: #fff;
        border: none;
        padding: 7px 30px;
        border-radius: 4px;
        background-color: #404040;
        cursor: pointer;
    }
    .input-box .filter {
        right: 130px;
    }
    .input-box .button:hover {
        background-color: var(--secondary-clr);
    }
    .input-box .button.clicked {
        transform: translateY(-50%) scale(0.98);
    }

    /* Responsive */
    @media screen and (max-width: 500px) {
        .input-box {
            height: 66px;
            margin: 0 8px;
        }
        .input-box i {
            left: 12px;
            font-size: 25px;
        }
        .input-box input {
            padding: 0 112px 0 50px;
        }
        .input-box .button {
            right: 12px;
            font-size: 14px;
            padding: 8px 18px;
        }
    }
`;

export default SearchSection;
