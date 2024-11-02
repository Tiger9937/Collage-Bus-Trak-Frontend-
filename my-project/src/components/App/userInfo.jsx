import React, { useState , useEffect} from 'react';
import {GetparamsData} from '../../utils/fetch'
import { useCookies} from 'react-cookie'

export default function UserInfo() {
    const [notificationCount , setnotificationCount] = useState()
    const [GetCokkie , setCokkie] = useCookies(['AuthName' , 'Authorization'])


    const [authData , setauthData] = useState({
        username:" Linx Luxury ",
        rollNo:"RollNo.AC05023",
        profileImage:"https://res.cloudinary.com/dwbjaa3ng/image/upload/v1726760705/AvterIMG3_owxedr.png",
        followers:"1.5k",
        follow:"10k",
    })

    // TODO: privent the double calling this use effect
    useEffect(()=>{
        (async () => {
          const username = GetCokkie.AuthName
          const Token = GetCokkie.Authorization
          const userInfo = await GetparamsData(username,Token)
         console.log(userInfo)
          setauthData({
            username: userInfo.data.user.fullname,

            profileImage: userInfo.data.user.avatar,

            rollNo:"RollNo.AC05023",

            followers: userInfo.data.flowersInfo[0].FollowersCount,

            follow: userInfo.data.flowersInfo[0].FollingCount,

          })
        })();
      },[])


    return (
        <div className="basis-[10%] flex" >
            <div className='ml-5 mt-4 flex min-w-[21rem] rounded-lg'>
                <img 
                    className='h-20 w-20 border-8 rounded-full border-white'
                    src={authData.profileImage} alt="Profile" 
                />
                <p className='m-2 ml-2'>
                    {/* TODO:Hendl if username is long  */}
                    <span className='font-Itim text-3xl break-words text-deep-purple'>{authData?.username}</span>
                    <span className='line-break text-sm' >{authData?.rollNo }</span>
                </p>
            </div>

            <div className='w-1/2'>
                <div className='h-11 flex p-2 justify-end'>
                    <img className='h-10 w-10' src="public/svg/ball.svg" alt="Notification" />
                    {notificationCount && (
                        <span className='pl-2 pb-0 absolute min-h-6 min-w-6 rounded-full bg-red-500'>
                            <span className='text-yellow-50'>{notificationCount}</span>
                        </span>
                    )}
                </div>

                <div className="flex -m-[5px]">
                    <div>
                        <span className='text-xl pl-4 text-Light-purple font-AndadaPro'>{authData?.follow }</span>
                        <span className='line-break text-2xl'>Follow</span>
                    </div>

                    <span className='h-[50px] min-h-[1em] w-0.5 bg-slate-600 m-3'></span>

                    <div>
                        <span className='text-2xl pl-6 text-Light-purple font-AndadaPro'>{authData?.followers }</span>
                        <span className='line-break text-2xl'>Followers</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
