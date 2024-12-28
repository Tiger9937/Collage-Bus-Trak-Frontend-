import React, { useEffect, useRef, useState } from 'react';
import {GetPublicParamsData} from '../../../utils/fetch'
import Form from './mainform'
import {Scorebar} from '../../index'
import {GetparamsData} from '../../../utils/fetch'
import { Cookies, useCookies } from 'react-cookie';




const StudentRegistration = () => {
  const [is_Select_Collage, set_isSelect_Collage] = useState(false)
  const [scorlBarPosition, setscorlBarPosition] = useState()
  const [Items, setItems] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [GetCokkie] = useCookies(['AuthName', 'Authorization'])
  const [CollageID, setCollageID] = useState()
  const [Collage_name_img , set_Collage_name_img] = useState([])
  const btn_ref = useRef(null)

  // TODO:: send data to the server for rigster the student
  // TODO:: Complit all the Loding Screan (applay loding screan whwn user click the college add show inside this btn)
  // TODO:: When the user get id than show inside this collage btn
  // TODO:: When the user get id than show inside this collage btn set Image And Name

  useEffect(() => {

    (async () => {
      const GetuserInfo = await GetparamsData(GetCokkie.AuthName, GetCokkie.Authorization)
      setUserInfo(GetuserInfo.data.user)
     
    })();

  }, [])

  // const handle_BTN_outside_Click = (event)=>{
  //   if(btn_ref.current && !btn_ref.current.contains(event.target)){
  //     set_isSelect_Collage(false)
  //   }
  // }

  // document.addEventListener("click", handle_BTN_outside_Click, true); 
  // document.removeEventListener("click", handle_BTN_outside_Click, false); 

  console.log("CLGIMGNAME-->>",Collage_name_img)

  const Select_Collage = async (event) => {

    set_isSelect_Collage(!is_Select_Collage)
    
    const AllCollage = await GetPublicParamsData("collage/colleges")
    setscorlBarPosition(event.target.getBoundingClientRect().bottom)
    
    setItems(AllCollage.data)


    const handle_BTN_outside_Click = (event) => {
      if (btn_ref.current && !btn_ref.current.contains(event.target)) {
        set_isSelect_Collage(false)
      }
    }

    document.addEventListener("click", handle_BTN_outside_Click, true);
    document.removeEventListener("click", handle_BTN_outside_Click, false);

  };
  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) : text;
}
  const handleButtonClick = () => {
    const button = btn_ref.current;
    if (button) {
      button.classList.toggle('max-w-full');
    }
  };
  



  return (


    <div className="max-w-7xl mx-auto p-1">
      {/* Title */}
      <div className="text-center mb-8">
        <img src={userInfo.avatar} alt="Profile" className="w-20 h-20 rounded-full mx-auto" />
        <h1 className="text-4xl font-bold text-Light-purple font-Itim"> <span className='text-black'>Hello,</span> {userInfo.fullname}</h1>
        <p className="text-gray-500 mt-1 -mb-3 text-xl ">Register yourself as Student</p>
      </div>

      <div className="flex justify-center mb-5 " >
        {/* fix the button width  show the collage name is big name show  15 later show and add the readme show the small name the click the show full colloge name and extend the width  */}
        <button ref={btn_ref} onClick={(event) => {Select_Collage(event); handleButtonClick(); }} className="bg-Light-purple text-white hover:bg-hover-purpal justify-center font-Assistant font-bold  py-2 px-2 sm:px-4 rounded-xl flex items-center w-44 gap-y-0 sm:w-96">
          {Collage_name_img[0] ? (<> <img src={Collage_name_img[1]} alt="" className="h-6 w-6 rounded-3xl sm:h-10 sm:w-10 " />
              <span className="ml-1 sm:ml-2 text-[10px] sm:text-[20px] font-bold p-0">
                {Collage_name_img[0].length > 15 ? (
  <span>
    {truncateText(Collage_name_img[0], 15)} 
    <span className='text-green-500 cursor-pointer sm:text-[12px] text-[8px]' onClick={handleButtonClick}>... Read more</span>
  </span>
) : Collage_name_img[0]}
              </span>
            </>
          ) : (
            <div className='text-[10px] sm:text-[20px]'>collage +</div>
          )}
        </button>
        <Scorebar
          CollageID={(data) => setCollageID(data)}
          classname={"absolute w-96 z-10"}
          items={Items}
          Img_Name={(name, img) => set_Collage_name_img([name, img])}
          Style={{ padding: "15px", height: "30vh", overflow: "auto", background: "#8E54DA", display: `${is_Select_Collage ? "inline" : "none"}`, top: `${scorlBarPosition}px` }}
        />
      </div>

      {/* form */}

      <Form CollageID={CollageID} />

    </div>


  );
};
// ['Item1' , "Item1" , 'Item1' , 'Item1' , 'Item1' ,'Item1' , 'Item1' , 'Item1' , 'Item1']

export default StudentRegistration;

// student Rigster applay logic and froms complit the other fild
// error component improvment
// improve home singup login button
// light mord Dark mode
// apply resposibness

// logic applay
// usestates 
















// student Rigster applay logic and froms complit the other fild
  // error component improvment
  // improve home singup login button
  // light mord Dark mode
  // apply resposibness

  // logic applay
        // usestates 