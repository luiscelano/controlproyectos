(function(params) {
    "use strict";
    var dropZone = document.getElementById('drop-zone')
    dropZone.ondragover=function(){
        this.className='upload-console-drop drop';
        return false;
    }
    dropZone.ondragleave = function(){
        this.className='upload-console-drop';
        return false;
    }
    dropZone.ondrop=function(e){
        this.className='upload-console-drop';
        e.preventDefault()
        uploadFiles(e.dataTransfer.files)
    }
    var uploadFiles=function(files){
        console.log(files)
       
    }
    function files(data,x){
        return `
      <tr>
        <th scope="row">${x+1}</th>
        <td>${user.name}</td>
        <td>${user.type}</td>
        <td>${user.area}</td>
        </tr>
      `
    }
}());