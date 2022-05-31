import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import MyButton from "../components/MyButton";
import MyHeader from "./../components/MyHeader";
import DiaryList from "../components/DiaryList";
const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월 `;

  useEffect(() => {
    if (diaryList.length >= 1) {
      //curDate가 바뀌면 년,월에 일치하는 일기만 뽑아내게
      const firstDay = new Date(
        curDate.getFullYear(), //~년 ~월 1일
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date( //같은 월 마지막 날
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();

      setData(
        diaryList.filter((it) => firstDay <= it.data && it.data <= lastDay)
      );
    }
  }, [diaryList, curDate]); //뎁스에 diaryList 전달해줘야 diaryList 바뀌면(by 추가,수정,삭제) 동작

  useEffect(() => {
    console.log(data);
  }, [data]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()) //근데 이렇게 하면 5월 31일 때 >버튼 누르면 6월은 30일까지만 있어서 7월이 됨..
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      {/*가운데 연도, 월*/}
      <DiaryList diaryList={data}/>
    </div>
  );
};

export default Home;
