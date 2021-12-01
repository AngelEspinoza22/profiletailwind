
import React from 'react'
import Avatar from './avatar/Avatar'
import AboutMe from './aboutMe/AboutMe'
import Header from './header/Header'
import ProfilePic from './profilePic/ProfilePic'
import Badge from './badge/Badge'
import Gallery from './gallery/Gallery'

const Profile = () => {
    return (
        <div className="container mx-auto">

            <div className="grid grid-cols-1 ">
                <Header/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="mt-8">
                    <ProfilePic/>
                </div>
                <div className="col-span-2 mt-8">
                    <AboutMe/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="col-span-3 mt-8">
                    <Badge/>
                </div>
                <div className="mt-8">
                    <Avatar/>
                </div>
            </div>

            <div className="grid grid-cols-1">
                <Gallery/>
            </div>


        </div>
    )
}

export default Profile
