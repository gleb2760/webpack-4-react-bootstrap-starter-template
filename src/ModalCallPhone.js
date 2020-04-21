import React from 'react';

const ModalCallPhone=()=>{
    return(
        <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Обратный звонок</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <input class="form-control" type="text" placeholder="Ваше имя"/>
                <input class="form-control" type="text" placeholder="Ваш телефон"/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
              <button type="button" class="btn btn-primary">Отправить</button>
            </div>
          </div>
        </div>
      </div>

    );
}
export default ModalCallPhone