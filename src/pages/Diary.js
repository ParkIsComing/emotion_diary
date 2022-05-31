import { useParams } from "react-router-dom";
//useParams같은 사용자 정의 훅을 custom hooks라고 함
const Diary = () => {

    const {id} = useParams();
    console.log(id);
    
    return <div>
        <h1>Diary</h1>
        <p>이곳은 일기상세페이지</p>
    </div>
}

export default Diary;