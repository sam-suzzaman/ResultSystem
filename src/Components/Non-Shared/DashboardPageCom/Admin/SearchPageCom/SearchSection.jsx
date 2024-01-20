import React from "react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";

const SearchSection = ({ setRoll }) => {
    // hooks
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

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
                            className="number"
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
    z-index: 10;
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
    .input-box .button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .input-box .icon {
        left: 20px;
        font-size: 25px;
        color: #707070;
    }
    .input-box input {
        height: 100%;
        width: 100%;
        outline: none;
        font-size: 16px;
        font-weight: 500;
        border: none;
        padding: 0 155px 0 65px;
        background-color: transparent;
    }
    .input-box input::placeholder {
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
