import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const AddMarkPage = () => {
    const times = [1, 2];
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            myData: [{ id: "", mid1: "" }],
        },
    });

    const { fields } = useFieldArray({
        name: "myData",
        control,
    });

    const handler = (data) => {
        console.log(data);
    };

    return (
        <div>
            <div className="text-center font-bold text-2xl uppercase">
                <h2 className="">Add Marks</h2>
            </div>
            <div className="mt-8">
                <div className="w-64 bg-slate-200">
                    <form action="" onSubmit={handleSubmit(handler)}>
                        <div className="grid grid-cols-2 text-center">
                            <div className="">id</div>
                            <div className="">mid1</div>
                            {times.map((_, rowIndex) => {
                                return (
                                    <React.Fragment key={rowIndex}>
                                        {fields.map((field, index) => {
                                            return (
                                                <React.Fragment key={field.id}>
                                                    <div className="">
                                                        <input
                                                            type="text"
                                                            placeholder="id"
                                                            className="input input-bordered w-full max-w-xs"
                                                            {...register(
                                                                `myData.${rowIndex}.id`
                                                            )}
                                                        />
                                                    </div>
                                                    <div className="">
                                                        <input
                                                            type="text"
                                                            placeholder="mid1"
                                                            className="input input-bordered w-full max-w-xs"
                                                            {...register(
                                                                `myData.${rowIndex}.mid1`
                                                            )}
                                                        />
                                                    </div>
                                                </React.Fragment>
                                            );
                                        })}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                        <button type="submit" className="btn btn-md btn-accent">
                            submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMarkPage;
