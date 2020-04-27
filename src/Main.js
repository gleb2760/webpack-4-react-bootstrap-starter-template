import React from 'react'
import photo from "./image/logo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook} from '@fortawesome/fontawesome-free-brands';


const Main =()=>{
    return(
                <div className="main container-fuild">
                    <div className="row ml-3 mr-3 main_1">
                        <nav>	
                            <ul className="aside aside_dop">
                                <li className="nmmn">
                                    <div className="round main_2"></div>
                                    <div className="main_3">
                                        <span className="main_4"> <a className="menu" href="#">
                                            Портфило</a>
                                        </span>
                                    </div>
                                    <div className="round main_5"></div>
                                </li>

                                <li className="main_6">
                                    <div className="round"></div>
                                    <div className="main_7">
                                        <span className="main_8"><a className="menu" href="#">Контакты</a>
                                        </span>
                                    </div>
                                    <div className="round"></div>
                                </li>

                                <li className="main_16">
                                    <div className="round"></div>
                                    <div className="main_7" >
                                        <span className="main_9"><a className="menu" href="#">Агенство</a>
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
                                    <div className="main_13">
                                    <FontAwesomeIcon className ='' icon={faInstagram} />
                                    
                                    </div>
                                    <div class="round round_social"></div>
                                    <div className="main_14">
                                    <FontAwesomeIcon className ='' icon={faFacebook} />
                                    
                                    </div>
                                </li>
                            </ul>
                        </nav>													
                <div className="row d-flex m-2 right">
                <div className="col-11">
                    <div className="discription_right" > 
                            <p>
                            Описание Описание Описание Описание
                            Описание Описание Описание Описание
                            Описание Описание Описание Описание
                            Описание Описание Описание Описание
                            Описание Описание Описание Описание
                            Описание Описание Описание Описание
                            </p>
                        <div className="project">				
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
                                    <div className="language">
                                        <select id="inlineFormCustomSelect">
                                            <option className="switch_lang" value="1">EN</option>
                                            <option className="switch_lang" value="2">RU</option>
                                        </select>  

                                    </div> 

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-1 cc">
                        <div class="text3 phone">
                                        х(ххх)хххх
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;