import Wrapper from "../../../../../../assets/wrappers/Admin/ExternalMarkFormWrapper";
import { useMarkFormStepContext } from "../../../../../../context/Admin/MarkFormStepContext";
import FormStepOne from "../FormStepOne";
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
            </div>
        </Wrapper>
    );
};

export default MultipleStudentForm;
