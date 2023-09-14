import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    getAllHandler,
    updateHandler,
} from "../../../../../../utils/fetchHandlers";
import {
    departments,
    semesters,
} from "../../../../../../utils/AddMarkFieldsData";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useMarkFormStepContext } from "../../../../../../context/Admin/MarkFormStepContext";
import FormStepOne from "../FormStepOne";

const SingleStudentForm = () => {
    const { stepValue } = useMarkFormStepContext();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
        setValue,
    } = useForm();

    const [isDeptSelected, setIsDeptSelected] = useState(false);
    const [isSessionSelected, setIsSessionSelected] = useState(false);
    const [isSemesterSelect, setIsSemesterSelect] = useState(false);
    const [isCourseSelect, setIsCourseSelect] = useState(false);
    const [isRollSelect, setIsRollSelect] = useState(false);
    const [courseData, setCourseData] = useState([]);
    const [sessionData, setSessionData] = useState([]);
    const [markDifference, setMarkDifference] = useState(0);
    const [internalResult, setInternalResult] = useState({});

    const deptWatch = watch("department");
    const sessionWatch = watch("session");
    const semesterWatch = watch("semester");
    const courseWatch = watch("course");
    const firstExaminerWatch = watch("firstExaminer");
    const secondExaminerWatch = watch("secondExaminer");
    const rollWatch = watch("roll");

    const isGoToThirdExaminer = (firstExaminerNumber, secondExaminerNumber) => {
        if (
            firstExaminerNumber === undefined ||
            secondExaminerNumber === undefined ||
            firstExaminerNumber === "" ||
            secondExaminerNumber === ""
        ) {
            setMarkDifference([false, "not available"]);
        } else {
            firstExaminerNumber = Number(firstExaminerNumber);
            secondExaminerNumber = Number(secondExaminerNumber);
            const difference = Math.abs(
                firstExaminerNumber - secondExaminerNumber
            );
            if (difference >= 12) {
                setMarkDifference([true, difference]);
            } else {
                setMarkDifference([false, difference]);
            }
        }
    };

    const addSingleExternalMarkMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            toast.success("Mark Submitted");
            reset();
            setMarkDifference([false, "not available"]);
        },
        onError: (error, variables, context) => {
            console.log(error);
            // toast.warn(error.response.data.errors.common);
            toast.warn("Something Wrong");
        },
    });

    useEffect(() => {
        if (deptWatch && deptWatch !== "default") {
            setIsDeptSelected(true);
            const url = `https://student-management-delta.vercel.app/session/department/${deptWatch}`;
            getAllHandler(url)
                .then((res) => setSessionData(res))
                .catch((err) => console.log(err));
        } else {
            setIsDeptSelected(false);
        }
    }, [deptWatch]);

    useEffect(() => {
        if (sessionWatch) {
            setIsSessionSelected(true);
        } else {
            setIsSessionSelected(false);
        }
    }, [sessionWatch]);

    useEffect(() => {
        if (semesterWatch) {
            setIsSemesterSelect(true);
            const url = `https://student-management-delta.vercel.app/course/${sessionWatch}/${deptWatch}/${semesterWatch}`;
            getAllHandler(url)
                .then((res) => setCourseData(res))
                .catch((err) => console.log(err));
        } else {
            setIsSemesterSelect(false);
        }
    }, [semesterWatch]);

    useEffect(() => {
        if (courseWatch && courseWatch !== "default") {
            setIsCourseSelect(true);
        } else {
            setIsCourseSelect(false);
        }
    }, [courseWatch]);

    useEffect(() => {
        isGoToThirdExaminer(firstExaminerWatch, secondExaminerWatch);
    }, [firstExaminerWatch, secondExaminerWatch]);

    useEffect(() => {
        if (internalResult?.firstExaminer) {
            setValue("firstExaminer", internalResult?.firstExaminer);
        } else {
            setValue("firstExaminer", "");
        }
        if (internalResult?.secondExaminer) {
            setValue("secondExaminer", internalResult?.secondExaminer);
        } else {
            setValue("secondExaminer", "");
        }
        if (internalResult?.thirdExaminer) {
            setValue("thirdExaminer", internalResult?.thirdExaminer);
        } else {
            setValue("thirdExaminer", "");
        }
    }, [internalResult]);

    useEffect(() => {
        if (rollWatch && rollWatch !== "" && rollWatch.length == 8) {
            setIsRollSelect(true);
            const url = `https://student-management-delta.vercel.app/mark/${deptWatch}/${semesterWatch}/${courseWatch}/${rollWatch}`;
            getAllHandler(url)
                .then((res) => setInternalResult(res))
                .catch((err) => console.log(err));
        } else {
            setIsRollSelect(false);
            setInternalResult({});
        }
    }, [rollWatch]);

    const onSubmit = (data) => {
        const {
            department,
            session,
            semester,
            course,
            roll,
            firstExaminer,
            secondExaminer,
            thirdExaminer,
        } = data;
        const result = {
            department,
            semester,
            roll,
            courseId: course,
            firstExaminer,
            secondExaminer,
            thirdExaminer: thirdExaminer || 0,
        };

        addSingleExternalMarkMutation.mutate({
            body: result,
            url: "https://student-management-delta.vercel.app/mark/external/single",
        });
    };

    return (
        <div className="">
            {stepValue === 1 && <FormStepOne />}
            {stepValue === 2 && <h2>hello stttep 2</h2>}
        </div>
    );
};

export default SingleStudentForm;
