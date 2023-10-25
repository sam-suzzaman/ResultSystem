import Wrapper from "../../../../../../assets/wrappers/Admin/ExternalMarkFormWrapper";
import { useMarkFormStepContext } from "../../../../../../context/Admin/MarkFormStepContext";
import FormStepOne from "../FormStepOne";
import FormStepFour from "./MultipleStudentFormStep/FormStepFour";
import FormStepThree from "./MultipleStudentFormStep/FormStepThree";
import FormStepTwo from "./MultipleStudentFormStep/FormStepTwo";

const MultipleStudentForm = () => {
    const { stepValue } = useMarkFormStepContext();

    return (
        <Wrapper>
            <div>
                {stepValue === 1 && <FormStepOne name="Semester Final Mark" />}
                {stepValue === 2 && (
                    <Wrapper>
                        <FormStepTwo />
                    </Wrapper>
                )}
                {stepValue === 3 && <FormStepThree />}
                {stepValue === 4 && <FormStepFour />}
            </div>
        </Wrapper>
    );
};

export default MultipleStudentForm;
