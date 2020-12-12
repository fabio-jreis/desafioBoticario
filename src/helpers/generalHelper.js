


// '1997-07-16T19:20:15' --- ISO 8601 Formats
// '1997-07-16T19:20:30+01:00' --- ISO 8601 with Timezone offset
export const convertDate = (date, format, mask) => {
    
    if(format === 'ISO8601' && mask === 'DDMMAAAA') {
        
        var dateAux = date.substring(8,10) + date.substring(5,7) + date.substring(0,4);    
        return dateAux;

    } else  if(format === 'ISO8601' && mask === 'DD/MM/AAAA HH:MM') {
        
        var dateAux = date.substring(8,10) +
                      '/' + 
                      date.substring(5,7) +
                      '/' + 
                      date.substring(0,4) +
                      ' ' +
                      date.substring(11,13) +
                      ':' +
                      date.substring(14,16)            
        return dateAux;
        
    } else  if(format === 'ISO8601' && mask === 'DD/MM/AAAA') {

        var dateAux = date.substring(8,10) + '/' + date.substring(5,7) + '/' + date.substring(0,4);
        return dateAux;

    }

    if(mask === 'DD/MM/AAAA HH:MM') {

        var dateAux = new Date(date);
        
        var date =  
                    ("00" + dateAux.getDate()).slice(-2)
                    + "/" 
                    + ("00" + (dateAux.getMonth() + 1)).slice(-2) 
                    + "/" 
                    + dateAux.getFullYear()
                    
                    +" "
                    
                    + ("00" + dateAux.getHours()).slice(-2) 
                    + ":" 
                    +("00" + dateAux.getMinutes()).slice(-2) 

        return date;
    }


    // 02/12/2012 to 2012-12-02
    if(format === 'DDMMAAAA' && mask === 'AAAA-MM-DD') {
        
        var dateAux = date.substring(4,8) + "-" + date.substring(2,4) + "-" + date.substring(0,2);
        return dateAux;
    }
}
