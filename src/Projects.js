import react, {useEffect, useRef} from "react";

function Dalabel(){
    return <>
    <h3>2023.05~2023.06 <a href="https://github.com/AmenPark/final-project-level3-nlp-11">인공지능 라벨링 도움 플랫폼</a></h3>
    &nbsp; 플랫폼 웹 프로젝트입니다. 인공지능에게 줄 데이터를 만드는 것을 목표로 하였습니다.<br/>
    &nbsp; 인공지능 서버를 따로 붙여 2개의 서버로 구성되어 있습니다.<br/>
    &nbsp; 최대한 보안을 의식하였고, 사용자의 웹 서비스 이용 시나리오를 생각하여 설계하였습니다.
    </>
}

function FactoryManager(){
    return <>
    <h3>2022.08 <a href="https://github.com/AmenPark/Factory_managing_problem">코딩테스트 API 서버 구축</a></h3>
    &nbsp; 개인 프로젝트입니다. 짧은 시간동안 영감을 받아 API 서버를 구축했습니다.<br/>
    </>
}
function Travel_sug(){
    return<>
    <h3>2020.11~2020.12 <a href="https://github.com/AmenPark/dalabelProject">여행지 추천 웹 서비스</a></h3>
    &nbsp; 키워드를 통해 여행지를 추천하는 인공지능을 만들고, 웹 페이지에 붙였습니다.<br/>
    &nbsp; 데이터를 수집, 전처리 및 인공지능을 살짝 튜닝하여 만들었습니다.<br/>
    </>
}

function MyProject() {
    return <>
    <Dalabel/>
    <FactoryManager/>
    <Travel_sug/>
    </>
}

export default MyProject;