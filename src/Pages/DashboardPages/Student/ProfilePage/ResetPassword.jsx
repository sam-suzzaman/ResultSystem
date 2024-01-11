import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useFetchConfig from "../../../../utils/useFetchConfig";
import { useUserContext } from "../../../../context/Admin/UserContext";

const ResetPassword = () => {
    // States
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    // Hooks
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const config = useFetchConfig();

    // context
    const { userLogout } = useUserContext();

    // Form Submit Handler
    const onSubmit = async (data) => {
        // const format = {
        //     oldPassword: "18102934",
        //     newPassword: "18102933",
        // };
        setLoading(true);
        try {
            const response = await axios.post(
                "https://student-management-delta.vercel.app/user-info/reset-password",
                data,
                config
            );
            localStorage.setItem("access-token", "");
            reset();
            userLogout();
            navigate("/login");
            Swal.fire({
                icon: "success",
                title: "Done",
                text: "Password changed successfully",
            });
        } catch (error) {
            // setOthersError(error.response?.data?.message);
            console.log(error);
            // toast.warn("Enter Valid Credentials");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
        setLoading(false);
    };
    return (
        <Wrapper>
            <form
                action=""
                className="w-full max-w-sm reset-form"
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
            >
                <div className="flex flex-col justify-center   gap-4 shadow-lg px-6 py-8">
                    <h3 className="text-lg md:text-2xl font-semibold  mb-4 mt-4 opacity-80 text-center text-secondary">
                        Reset Passowrd
                    </h3>

                    {/* old password */}
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text text-xs font-medium opacity-90">
                                Previous Passowrd
                            </span>
                        </label>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            placeholder="Type here"
                            className="input input-bordered w-full rounded-sm input-sm number "
                            {...register("oldPassword", {
                                required: {
                                    value: true,
                                    message: "Enter valid Password",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Too long Password(max 20char)",
                                },
                                minLength: {
                                    value: 5,
                                    message: "Too short Password(max 5char)",
                                },
                            })}
                        />
                        {errors?.oldPassword && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors?.oldPassword?.message}
                            </span>
                        )}
                    </div>

                    {/* new password */}
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text text-xs font-medium opacity-90">
                                New Passowrd
                            </span>
                        </label>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            placeholder="Type here"
                            className="input input-bordered w-full rounded-sm input-sm number"
                            {...register("newPassword", {
                                required: {
                                    value: true,
                                    message: "Enter valid Password",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Too long Password(max 20char)",
                                },
                                minLength: {
                                    value: 5,
                                    message: "Too short Password(max 5char)",
                                },
                            })}
                        />
                        {errors?.newPassword && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors?.newPassword?.message}
                            </span>
                        )}
                    </div>

                    <div className="flex justify-start items-start mt-1">
                        <input
                            type="checkbox"
                            checked={isShowPassword}
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            className="checkbox checkbox-xs text-left checkbox-secondary"
                        />
                        <span className="ml-[5px] text-[12px] font-medium">
                            Show Password
                        </span>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="reset_btn disabled:cursor-not-allowed"
                            disabled={loading}
                        >
                            {loading ? "loading..." : "reset"}
                        </button>
                    </div>
                </div>
            </form>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;

    .reset-form {
        border-radius: 6px;
        background: #ffffff;
        box-shadow: -11px -11px 22px #d4d4d4, 11px 11px 22px #f8f8f8;
    }
    .reset_btn {
        margin-top: 16px;
        display: inline-block;
        border: 1px solid gray;
        background-color: var(--primary-clr);
        color: #fff;
        padding: 6px 30px;
        text-transform: capitalize;
        border-radius: 4px;
        transition: all 0.2s linear;
    }
    .reset_btn:hover {
        background-color: var(--secondary-clr);
    }
    .eye-icon {
        position: absolute;
        top: 40px;
        right: 6px;
        z-index: 10;
        font-size: 18px;
        color: var(--primary-clr);
        cursor: pointer;
    }
`;
export default ResetPassword;
