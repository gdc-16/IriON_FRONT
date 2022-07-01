import React, {useState} from "react";
import '../../assets/css/moreRecommend.css'
import photo from "../../img/syed-ahmad-7WBU6_iv-iU-unsplash.jpg"
import empty_heart from '../../assets/icons/empty_heart.png'
import full_heart from '../../assets/icons/full_heart.png'

export default function Grid(res) {
    const [item, setItem] = useState(res.data);
    const [stat, setStat] = useState(res.stat);
    const [status, setStatus] = useState(stat);

    return (
        <>
        <div className="grid-items-cover">
            <img src={item?.Animal?.animal_image_url !== undefined?item.Animal.animal_image_url:photo} alt="추가 유기견" />
        </div>
        <div className="grid-items-info">
            <span onClick={() => setStatus(!status)}>
                {status?<img src={full_heart} alt="팔로우하지 않음" className="heart_size"/>:
                <img src={empty_heart} alt="팔로우하지 않음" className="heart_size"/>}
            </span>
            <h3 className="title">앞으로 {item?.Animal?.left_day}일 남았어요</h3>
            <p>{item?.Animal?.name} ({item?.Animal?.gender})/{item.Animal.age}살</p>
            <p>{item?.Shelter?.shelter_name}</p>
        </div>
        </>
    )
}