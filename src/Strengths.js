import React, { useState } from 'react';

function Strengths1(){
    return <>
    <a href='https://github.com/AmenPark/code_test_study'>
    여러 문제들을 풀었습니다.
    </a>
    <br/>
    여러 알고리즘, 자료구조를 공부했습니다.<br/>
    문제를 더 작은 단위로 쪼개며, 어떻게 해결할지 고민했습니다.<br/>
    코드를 보며 어떤 에러를 발생시킬 수 있는지 생각하게 되었습니다.<br/>
    메모리적으로, 시간적으로, 더 좋은 방법을 고민했습니다.<br/>
    </>
}
function Strengths2(){
    return <>
    다 알지 못해도 괜찮습니다. 보고 하면 되니까요.<br/>
    다양한 자료를 보며 공부했습니다.<br/>
    수학과 관련된 논문부터, 인공지능을 거쳐 다양한 프로그래밍 방법론까지.<br/>
    여러 공식 문서를 빼면 섭하겠지요.<br/>
    물론 다 외웠다는게 아닙니다. 필요하면 찾아 쓰는 훈련이 되었단 뜻입니다.<br/>
    </>
}
function Strengths3(){
    return <>
    <a href="https://github.com/HiddenLayerSDGN/HiddenLayer/wiki">회의록의 결과물은 아무런 갈등이 없어 보입니다.</a><br/>
    그 결과물의 속에는 갈등과 대화, 설득이 숨어있습니다.<br/>
    누군가는 개인사로 중도하차를 말했지만, 공감의 대화로 끝까지 함께하였습니다.<br/>
    누군가는 구조를 이해하지 못했지만, 대화를 통해 지향점을 맞췄습니다.<br/>
    큰 사건 없이 프로젝트가 끝난 것은 훌륭한 커뮤니케이션의 결과물입니다.<br/>
    </>
}
function Strengths4(){
    return <>
    책임을 져야 하는 프로젝트는 책임을 저버린 적이 없습니다.<br/>
    학생때 발표를 위한 간단한 게임 프로젝트부터,<br/>
    다라벨 웹 프로젝트까지.<br/>
    기능도 제대로 작동하지 않는 프로젝트를 방치한 적이 없습니다.<br/>
    </>
}


function Strengths(){

    const [tableData, setTableData] = useState([<Strengths1/>,<Strengths2/>,<Strengths3/>,<Strengths4/>]);
    const [headerData, setHeaderData] = useState(['컴퓨터적 사고능력', '자료 활용능력', '대화, 설득', '끈기력과 책임감']);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handleClick = () => {
    if (currentIndex === tableData.length - 1) {
        setCurrentIndex(0);
    } else {
        setCurrentIndex(prevIndex => prevIndex + 1);
    }
    };
    
    return (
    <div className="table">
        <table className="Strengths_table">
        <thead>
            <tr>

                <th>{headerData[currentIndex]}</th>

            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{tableData[currentIndex]}</td>
            </tr>
        </tbody>
        </table>
        <button onClick={handleClick}>그리고?</button>
    </div>
    );
}

export default Strengths;