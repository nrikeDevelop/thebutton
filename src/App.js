import React from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import swal from 'sweetalert';

import PowerOff from '@material-ui/icons/PowerSettingsNew';


function App() {
  return (
    <div className="bg_color">
        <div className="center_content">
            <Paper className="paper center_content">
              <div className="button_container">
                <Fab color="secondary" aria-label="Edit"  onClick={()=>{
                  fetch('http://susy1.duckdns.org:3000/pc/e0:d5:5e:19:74:7c')
                  .then((response) => {
                    return response.json()
                  })
                  .then((recurso) => {
                    if(recurso.success){
                      swal("PC", "Encendido, espera a que se carge", "success");
                    }else{
                      swal("PC", "Fallo, Comprueba el servidor", "error");
                    }
                  })
                }}>
                  <PowerOff className="buton" />
                </Fab>
              </div>
            </Paper>
        </div>
    </div>
  );
}

export default App;
