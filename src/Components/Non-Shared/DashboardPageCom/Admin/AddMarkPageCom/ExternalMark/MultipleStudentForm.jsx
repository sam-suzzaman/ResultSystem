import Wrapper from "../../../../../../assets/wrappers/Admin/ExternalMarkFormWrapper";
import StepOne from "../ExternalMark/MultipleStudentFormStep/StepOne";
import StepTwo from "../ExternalMark/MultipleStudentFormStep/StepTwo";
import { useExternalContext } from "../../../../../../context/Admin/ExternalMarkContext";

const MultipleStudentForm = () => {
    const { stepValue } = useExternalContext();

    return (
        <Wrapper>
            <div>
                {stepValue === 1 && <StepOne />}
                {stepValue === 2 && <StepTwo />}
            </div>
        </Wrapper>
    );
};

export default MultipleStudentForm;
