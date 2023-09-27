import React from 'react'
import profile from '../Components/Navigation/profile.png'
import logo from '../../src/react.png'
import pythonlogo from '../../src/python.png'
import nginxlogo from '../../src/nginx.png'
import sqllogo from '../../src/mysql.png'
import dockerlogo from '../../src/docker.png'
import linkedin from '../Components/linkedin.png'
import github from '../Components/github.png'
import insta from '../Components/instagram.png'
import mail from '../Components/email.png'
import itsme from '../Components/Untitled(1).png'

function Home() {
    return (
        <div className="container-fluid m-0 p-0" id="home" >
            <div className=' home-container position-relative'>
                <div className='position-absolute social-media d-flex flex-column'>
                    <div className='px-1 py-1 m-3 media-img-div'><img className='media-img' src={linkedin} alt='linkdin' /></div>
                    <div className='px-1 py-1 m-3 media-img-div'><img className='media-img' src={github} alt='github' /></div>
                    <div className='px-1 py-1 m-3 media-img-div'><img className='media-img' src={mail} alt='mail' /></div>
                    <div className='px-1 py-1 m-3 media-img-div'><img className='media-img' src={insta} alt='insta' /></div>
                </div>
                <div className='d-flex align-items-center justify-content-center h-100 w-100'>
                    <div className='row p-0 m-0 row-container' style={{ width: '70%', height: '70%' }}>
                        <div className='col-sm-12 col-lg-6 col-12 p-0 d-none d-lg-block'>
                            <div className=' d-flex align-items-center justify-content-center h-100 w-100'>
                                <div className='' style={{ width: '70%', height: '80%' }}>
                                    <div>
                                        <img className='its-me' src={itsme} alt='its me image' />
                                    </div>
                                    <h1 className='name-head'>Vishvajit</h1>
                                    <h1 style={{ marginLeft: '130px' }} className='name-head '>Havale</h1>
                                    <h3 >Python Back-end Developer</h3>
                                    <p > AKA Glitzyken. Software Developer from Lagos, Nigeria with rock-solid experience in building complex applications with cutting-edge technologies.
                                        talk button
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-lg-6 col-12 m-0 d-flex align-items-center justify-content-center h-100 w-100 profile-container'>
                            <div className='h-100 w-100 d-flex  align-items-center justify-content-center'>
                                <img className='center-img' src={profile}></img>
                                {/* <img src="https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653600089/kenjimmy.me/Portfolio_ngecqk.png" alt="ken photo" style={{height:'60%'}} className="" data-v-266b19da=""></img> */}
                            </div>
                        </div>

                        <div className='col-sm-12 col-lg-6 col-12 p-0 d-md-block d-lg-none h-100 w-100'>
                            <div className=' d-flex align-items-center justify-content-center h-100 w-100'>
                                <div className='' style={{ width: '70%', height: '80%' }}>
                                    <div>
                                        <img className='its-me' src={itsme} alt='its me image' />
                                    </div>
                                    <h1 className='name-head'>Vishvajit</h1>
                                    <h1 style={{ marginLeft: '150px' }} className='name-head last-name'>Havale</h1>
                                    <h3 >Python Back-end Developer</h3>
                                    <p > AKA Glitzyken. Software Developer from Lagos, Nigeria with rock-solid experience in building complex applications with cutting-edge technologies.
                                        talk button
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='position-absolute technology-container'>
                    <div className='row'>
                        <div className='col-lg-2 col-md-2 col-sm-2 col-2'>
                            <div className='technical'>
                                <img className='tech-icons' src={pythonlogo} alt='python' />
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-2 col-2'>
                            <div className='technical'>
                                <img className='tech-icons' src={logo} alt='react' />
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-2 col-2'>
                            <div className='technical'>
                                <img className='tech-icons' src={sqllogo} alt='sql' />
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-2 col-2'>
                            <div className='technical'>
                                <img className='tech-icons' src={sqllogo} alt='redis' />
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-2 col-2'>
                            <div className='technical'>
                                <img className='tech-icons' src={nginxlogo} alt='nginx' />
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-2 col-2'>
                            <div className='technical'>
                                <img className='tech-icons' src={dockerlogo} alt='docker' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home