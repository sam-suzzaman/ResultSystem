import "./semesterCard.css";

const SemesterCard = ({ title }) => {
    return (
        <div class="semister-card">
            <div class="top">
                <div class="caption">
                    <h3 class="title"> {title}</h3>
                    <div className="">
                        <button className="btn btn-xs bg-[#2b9859] hover:bg-[#33b76a] text-white rounded-sm">
                            add course
                        </button>
                        <button className="btn btn-xs bg-[#2b9859] hover:bg-[#33b76a] text-white rounded-sm ml-2">
                            add marks
                        </button>
                    </div>
                </div>
            </div>
            <div class="middle"></div>
            <div class="bottom"></div>
        </div>
    );
};

export default SemesterCard;
