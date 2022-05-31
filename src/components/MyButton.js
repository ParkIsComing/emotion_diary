const MyButton = ({text, type, onClick}) => {

    const btnType = ['positive', 'negative'].includes(type)? type:'default'; //들어온 type이 배열 안에 없으면 강제로 default로 설정
    return (
        <button className={["MyButton", `MyButton_${btnType}`].join(" ")} onClick={onClick}> {/*className은 문자열이라서 join쓴거*/}
            {text}
        </button>
    );
}

MyButton.defaultProps = {
    type: "default"
}
export default MyButton;




