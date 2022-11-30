import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    // card안에 있는 <div>에 설정 된 이 긴 문자열에 추가 되야함
    return (
        <div className={classes}>{props.children}</div>
        // children은 예약어
    );
};

export default Card;