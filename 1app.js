function consoleObject (objectin) {                                  
  for (let sobstv_svojstva in objectin) {                             
    if (objectin.hasOwnProperty(sobstv_svojstva)) {                   
      console.log(sobstv_svojstva, ":" objectin[sobstv_svojstva]);   
    }
  }
}


