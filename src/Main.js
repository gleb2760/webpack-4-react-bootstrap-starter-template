import React from 'react'
import photo from "./image/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);




const Main =()=>{
    return(
                <div className="main container-fuild">
                    <div className="row ml-3 mr-3 main_1">
                        <nav>	
                            <ul className="aside aside_dop">
                                <li>
                                    <div className="round main_2"></div>
                                    <div className="main_3">
                                        <span className="main_4"> <a href="#">
                                            Портфило</a>
                                        </span>
                                    </div>
                                    <div className="round main_5"></div>
                                </li>

                                <li className="main_6">
                                    <div className="round"></div>
                                    <div className="main_7">
                                        <span className="main_8"><a href="#">Контакты</a>
                                        </span>
                                    </div>
                                    <div className="round"></div>
                                </li>

                                <li className="main_16">
                                    <div className="round"></div>
                                    <div className="main_7" >
                                        <span className="main_9"><a href="#">Агенство</a>
                                        </span>
                                    </div>
                                    <div className="round"></div>
                                </li>

                                <li className="main_17">
                                    <div className="round"></div>
                                    <div className="main_10">
                                        <span className="main_11">
                                        </span>
                                    </div>
                                    <div className="round main_12">
                                        <i className=""></i>
                                    </div>
                                    <div className="round main_13">
                                    <FontAwesomeIcon  icon={['fab', 'javascript']}/>
                                    </div>
                                    <div className="main_14"></div>
                                </li>
                            </ul>
                        </nav>													
                <div className="row">
                    <div className="discription_right" > 
                    <p>
                        Описание Описание Описание Описание
                        Описание Описание Описание Описание
                        Описание Описание Описание Описание
                        Описание Описание Описание Описание
                        Описание Описание Описание Описание
                        Описание Описание Описание Описание
                        Описание Описание Описание Описание
                        Описание Описание Описание Описание
                        Описание Описание Описание Описание
                        Описание Описание Описание Описание
                        Описание Описание Описание Описание
                        Описание Описание Описание Описание		
                        Описание
                        </p>				
                        <h3 className="main_15">Крайний проект</h3>				
                        <div className="row ">
                            <div className="col-4">
                                <img className="photo" src={photo} alt="picture"/>
                            </div>
                            <div className="col-8">
                                <p className="site">Cайт для компании "прометрей"</p>
                                <button btn-rounded className="btn btn-rounded btn-bl">
                                    посмотреть
                                </button> 
                            </div>
                        </div>
                    </div>
                    <div class="text3 phone">
                                    х(ххх)хххх
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;