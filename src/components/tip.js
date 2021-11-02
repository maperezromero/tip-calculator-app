
export const Tip = () => {
    return (
        <span className = "tip">
            <span className = "text">
                Select Tip %
            </span>
            <span className = "tip-container">
                <button className = "tip-button" id = "tip-5">
                    5%
                </button>
                <button className = "tip-button" id = "tip-10">
                    10%
                </button>
                <button className = "tip-button" id = "tip-15">
                    15%
                </button>
                <button className = "tip-button" id = "tip-25">
                    25%
                </button>
                <button className = "tip-button" id = "tip-50">
                    50%
                </button>
                <span className = "custom-tip">
                    Custom
                </span>

            </span>
        </span>
    );
}