import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import "./AddMark.css";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import LoadingCom from "../../../../Components/Shared/LoadingCom/LoadingCom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAllHandler, postHandler } from "../../../../utils/fetchHandlers";
import { toast } from "react-toastify";

const AddMarkPage = () => {
    // const times = [1, 2];
    const { session, semester, courseCode } = useParams();
    const { pathname } = useLocation();
    const [course, setCourse] = useState();
    const {
        isLoading,
        isError,
        data: studentList,
        error,
    } = useQuery("studentList", () =>
        getAllHandler(
            `https://student-management-delta.vercel.app/user/EEE/${session}`
        )
    );
    const {
        isLoading: isCourseLoading,
        isError: isCourseError,
        data: courseList,
        error: courseError,
    } = useQuery("courseList", () =>
        getAllHandler(
            `https://student-management-delta.vercel.app/course/${session}/EEE/${
                semester * 1
            }`
        )
    );

    useEffect(() => {
        const result = courseList?.find(
            (course) => course?.courseCode === courseCode
        );
        setCourse(result);
    }, [courseList]);

    const {
        register,
        handleSubmit,
        watch,
        control,
        reset,
        formState: { errors },
    } = useForm();

    // const { fields } = useFieldArray({
    //     name: "resultList",
    //     control,
    // });

    const addMarkMutation = useMutation({
        mutationFn: postHandler,
        onSuccess: (data, variable, context) => {
            // reset();
            toast.success("Result Add Successfully");
        },
        onError: (error, variable, context) => {
            toast.error("Something Wrong");
        },
    });

    const handler = (data) => {
        const commonInfo = {
            department: "EEE",
            semester: semester * 1,
            courseName: course.courseName,
            courseCode: course.courseCode,
        };
        const mergedResult = data.resultList.map((result) => {
            const totalMarks = Math.ceil(
                (result.firstExaminer * 1 + result.secondExaminer * 1) / 2 +
                    result.midOne * 1 +
                    result.midTwo * 1 +
                    result.attendance * 1 +
                    result.presentationOrAssignment * 1
            );
            return { ...result, ...commonInfo, total: totalMarks };
        });

        addMarkMutation.mutate({
            body: { marks: mergedResult },
            url: "https://student-management-delta.vercel.app/mark",
        });
    };

    if (isLoading || isCourseLoading) {
        return <LoadingCom />;
    }
    if (isError || isCourseError) {
        return (
            <h2 className="text-center font-bold text-lg mt-4">
                {error?.message || courseError?.message}
            </h2>
        );
    }

    return (
        <div className="mb-6">
            <div className="">
                <Breadcrumb location={pathname} />
            </div>
            <div className=" mt-4 ">
                <h2 className="text-center font-bold text-lg uppercase">
                    Add Marks
                </h2>
                <h3 className="text-center font-medium text-sm text-[#414141]">
                    Course Title:
                    <span className="capitalize">{course?.courseName}</span>
                </h3>
                <h3 className="text-center font-medium text-sm text-[#434343]">
                    Course Code:
                    <span className="capitalize">{course?.courseCode}</span>
                </h3>
                <h3 className="text-center font-medium text-sm text-[#434343]">
                    Session:
                    <span className="capitalize">{session}</span>
                </h3>
            </div>
            <div className="mt-6">
                <form onSubmit={handleSubmit(handler)} className="form-wrapper">
                    <div className="mark_input_form_container">
                        <div className="mark">
                            <h3>Student ID</h3>
                        </div>
                        <div className="mark">
                            <h3>Attendance</h3>
                        </div>
                        <div className="mark">
                            <h3 id="mid">Mid Term-01</h3>
                        </div>
                        <div className="mark">
                            <h3>Mid Term-02</h3>
                        </div>
                        <div className="mark">
                            <h3 id="asp">
                                Assignment/ <br /> Presentation
                            </h3>
                        </div>
                        <div className="mark">
                            <h3>1st Examine </h3>
                        </div>
                        <div className="mark">
                            <h3>2nd Examine </h3>
                        </div>
                        <div className="mark">
                            <h3>3rd Examine </h3>
                        </div>
                        {studentList?.map((student, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <input
                                        type="text"
                                        className="idField"
                                        {...register(
                                            `resultList.${index}.roll`
                                        )}
                                        defaultValue={student?.roll}
                                        readOnly
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.attendance`
                                        )}
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.midOne`
                                        )}
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.midTwo`
                                        )}
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.presentationOrAssignment`
                                        )}
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.firstExaminer`
                                        )}
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.secondExaminer`
                                        )}
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.thirdExaminer`
                                        )}
                                    />
                                </React.Fragment>
                            );
                        })}
                    </div>

                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="btn btn-sm rounded-sm font-medium btn-accent text-sm bg-[#51a85d] hover:bg-[#368941] text-white"
                        >
                            submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMarkPage;
