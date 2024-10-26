import React, { useState } from 'react';
import '@fontsource/inter';
import { useSelector } from 'react-redux';

export default function UserInfo() {
    const [username, setUsername] = useState('Linx Luxury');
    const [rollNo, setRollNo] = useState("RollNo.AC05023");
    const [profileImage, setProfileImage] = useState("https://res.cloudinary.com/dwbjaa3ng/image/upload/v1726760705/AvterIMG3_owxedr.png");
    const [followers, setFollowers] = useState('1.5k');
    const [follow, setFollow] = useState('10k');
    const [notificationCount, setNotificationCount] = useState(null);

    const authData = useSelector(state => state.auth);
    console.log("Data Received Successfully:", authData);

    return (
        <div className="basis-[10%] flex" style={{ fontFamily: 'inter, sans-serif' }}>
            <div className='ml-5 mt-4 flex min-w-[21rem] rounded-lg'>
                <img 
                    className='h-20 w-20 border-8 rounded-full border-white'
                    src={authData?.profileImage || profileImage} alt="Profile" 
                />
                <p className='m-2 ml-2'>
                    <span className='font-Itim text-4xl break-words text-deep-purple'>{authData?.username || username}</span>
                    <span className='line-break text-sm' style={{ fontFamily: 'inter, sans-serif' }}>{authData?.rollNo || rollNo}</span>
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
                        <span className='text-xl pl-4 text-Light-purple font-AndadaPro'>{authData?.follow || follow}</span>
                        <span className='line-break text-2xl'>Follow</span>
                    </div>

                    <span className='h-[50px] min-h-[1em] w-0.5 bg-slate-600 m-3'></span>

                    <div>
                        <span className='text-2xl pl-6 text-Light-purple font-AndadaPro'>{authData?.followers || followers}</span>
                        <span className='line-break text-2xl'>Followers</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
