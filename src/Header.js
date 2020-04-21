import React from 'react';
import logo from "./image/logo.png";

const Header =()=>{
	return (
			<div className="header">
				<div class="container-fuild">
					<div class="row row_dop" >
						<div class="col-2">
							<img class="logo " src={logo}/>
						</div>
						<div class="artical row d-flex m-2 right" >
						<div class="col-10">
							<button data-toggle="modal" data-target="#exampleModal" class="btn btn-rounded btn-bl mt-2">
								заказать проект
							</button> 	
							<div class="round round_dop">
							
							</div>	
							<button data-toggle="modal" data-target="#exampleModal1" class="btn btn-rounded btn-bl right call">
								обратный звонок
							</button> 
							<h3 class="centered centered_dop">О НАС
							</h3>
							<p class="discription_right_first">
							Описание Описание Описание Описание
							Описание Описание Описание Описание
							</p>
						</div>
						<div class="col-2 header_1">
							<div class="round header_2">
							
							</div>
							<div class="round header_3">
							
							</div>
							<div className="header_4">
							<span className="header_5"> Аг
							</span>
							</div>
							<div className="round header_6">
							
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
	);
}

export default Header;