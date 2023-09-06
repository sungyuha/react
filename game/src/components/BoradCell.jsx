import './BoradCell.css';

const BoradCell = ({cell}) => { // cell를 받아옴
    // 스타일에 따라 배치한 다양한 유형의 테트리스를 시작적으로 볼 수 있도록 구현
    <div className={`boradCell ${cell.className}`}>
        <div className='sparkle'></div>
    </div>
};

export default BoradCell;